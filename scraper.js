import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // 브라우저 동작을 직접 확인할 수 있도록 설정
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const categories = [
        { name: 'Skin Care', url: 'https://kr.aesop.com/c/skin-care/' },
        { name: 'Body & Hand', url: 'https://kr.aesop.com/c/body-hand/' },
        { name: 'Hair', url: 'https://kr.aesop.com/c/hair/' },
        { name: 'Fragrance', url: 'https://kr.aesop.com/c/fragrance/' },
        { name: 'Home', url: 'https://kr.aesop.com/c/home/' }
    ];

    let allProducts = [];

    try {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
        await page.setViewport({ width: 1400, height: 1000 });

        for (const category of categories) {
            console.log(`\n--- [${category.name}] 수집 시작 ---`);
            await page.goto(category.url, { waitUntil: 'load', timeout: 60000 });

            // 1. "더 보기" 버튼 반복 클릭하여 모든 제품 로드
            let hasMore = true;
            while (hasMore) {
                const loadMoreButton = await page.$('a.c-load-more__button');
                if (loadMoreButton) {
                    await page.evaluate(() => {
                        const btn = document.querySelector('a.c-load-more__button');
                        if (btn) btn.scrollIntoView({ behavior: 'auto', block: 'center' });
                    });
                    await new Promise(r => setTimeout(r, 1000));
                    await loadMoreButton.click();
                    try {
                        await page.waitForFunction(
                            (prev) => document.querySelectorAll('.c-product-tile__wrapper').length > prev,
                            { timeout: 8000 },
                            await page.$$eval('.c-product-tile__wrapper', el => el.length)
                        );
                        await new Promise(r => setTimeout(r, 1500));
                    } catch (e) { hasMore = false; }
                } else { hasMore = false; }
            }

            // 2. 데이터 추출 (용량별 클릭 + 이미지 대기 로직 개선)
            const categoryProducts = await page.evaluate(async (catName) => {
                const items = Array.from(document.querySelectorAll('.c-product-tile__wrapper'));
                const results = [];

                /**
                 * 이미지 URL에서 저화질 쿼리 파라미터를 제거합니다.
                 * sw, q, bgcolor, sfrm 등의 파라미터를 제거하여 원본 고화질 이미지 URL을 반환합니다.
                 */
                function cleanImageUrl(url) {
                    if (!url || url.startsWith('data:')) return url;
                    try {
                        const urlObj = new URL(url);
                        return urlObj.origin + urlObj.pathname;
                    } catch {
                        return url;
                    }
                }

                /**
                 * 제품 타일에서 실제 로드된 이미지 URL을 가져옵니다.
                 * base64 플레이스홀더가 아닌 실제 CDN URL을 반환합니다.
                 */
                function getLoadedImageUrl(item) {
                    const img = item.querySelector('img');
                    if (!img) return '';

                    // srcset에서 고화질 이미지 URL 추출 시도
                    if (img.srcset) {
                        const srcsetParts = img.srcset.split(',');
                        const lastPart = srcsetParts[srcsetParts.length - 1].trim().split(' ')[0];
                        if (lastPart && !lastPart.startsWith('data:')) {
                            return cleanImageUrl(lastPart);
                        }
                    }

                    // data-src 속성 확인 (지연 로딩 대응)
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc && !dataSrc.startsWith('data:')) {
                        return cleanImageUrl(dataSrc);
                    }

                    // src 속성에서 가져오기 (base64가 아닌 경우)
                    if (img.src && !img.src.startsWith('data:')) {
                        return cleanImageUrl(img.src);
                    }

                    return '';
                }

                /**
                 * 가격 문자열에서 숫자만 추출합니다.
                 * "원래 가격 새 가격 79,000원" -> 79000
                 */
                function parsePrice(priceText) {
                    if (typeof priceText === 'number') return priceText;
                    if (!priceText) return 0;
                    const matches = priceText.match(/[\d,]+/g);
                    if (!matches) return 0;
                    const lastMatch = matches[matches.length - 1];
                    return parseInt(lastMatch.replace(/,/g, ''), 10) || 0;
                }

                for (const item of items) {
                    const rawData = item.getAttribute('data-analytics');
                    if (!rawData) continue;
                    const p = JSON.parse(rawData).products[0];

                    // 설명 텍스트 추출 (HTML 테이블 제거)
                    const uiDesc = item.querySelector('.c-product-tile__description')?.innerText || "";
                    let cleanDesc = uiDesc.trim();
                    if (cleanDesc.includes('<table')) cleanDesc = "";

                    // 용량별 이미지 및 가격 수집
                    const variantButtons = Array.from(item.querySelectorAll('.c-variant-selector__item, .c-tag-list__item button'));
                    const selectField = item.querySelector('select.c-select__field');
                    let variants = [];

                    if (selectField) {
                        // 드롭다운 방식: 각 옵션 선택 후 이미지 수집
                        for (const opt of Array.from(selectField.options)) {
                            selectField.value = opt.value;
                            selectField.dispatchEvent(new Event('change', { bubbles: true }));
                            // 이미지 교체 대기 시간 증가 (기존 800ms -> 2000ms)
                            await new Promise(r => setTimeout(r, 2000));

                            const imageUrl = getLoadedImageUrl(item);
                            const priceText = item.querySelector('.c-product-tile__price')?.innerText || String(p.price);

                            variants.push({
                                capacity: opt.text.trim(),
                                price: parsePrice(priceText),
                                image: imageUrl || cleanImageUrl(p.imgUrl) || ''
                            });
                        }
                    } else if (variantButtons.length > 1) {
                        // 버튼 방식: 각 버튼 클릭 후 이미지 수집
                        for (const btn of variantButtons) {
                            btn.click();
                            await new Promise(r => setTimeout(r, 2000));

                            const imageUrl = getLoadedImageUrl(item);
                            const priceText = item.querySelector('.c-product-tile__price')?.innerText || String(p.price);

                            variants.push({
                                capacity: btn.innerText.trim(),
                                price: parsePrice(priceText),
                                image: imageUrl || cleanImageUrl(p.imgUrl) || ''
                            });
                        }
                    } else {
                        // 단일 용량 제품
                        const imageUrl = getLoadedImageUrl(item);
                        variants.push({
                            capacity: p.variant || 'Single Size',
                            price: parsePrice(String(p.price)),
                            image: imageUrl || cleanImageUrl(p.imgUrl) || ''
                        });
                    }

                    results.push({
                        category: catName,
                        name: p.name,
                        description: cleanDesc,
                        variants: variants
                    });
                }
                return results;
            }, category.name);

            allProducts = [...allProducts, ...categoryProducts];
            console.log(`${category.name} 완료: ${categoryProducts.length}개 수집됨`);
        }

        // 중복 제품 제거 (같은 카테고리 내에서 같은 이름 중복 방지)
        const seen = new Set();
        const uniqueProducts = [];
        for (const product of allProducts) {
            const key = `${product.category}|${product.name}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueProducts.push(product);
            }
        }

        const dir = './src/data';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'products.json'), JSON.stringify(uniqueProducts, null, 2));
        console.log(`\n\ud83c\udf89 수집 대성공! 총 ${uniqueProducts.length}개의 데이터를 저장했습니다.`);

    } catch (error) {
        console.error('\u26a0\ufe0f 에러:', error.message);
    } finally {
        await browser.close();
    }
})();