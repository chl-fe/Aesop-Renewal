import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurStory.scss';

import aboutBg from '../assets/about_background.mov';
import aboutFormulation from '../assets/about_formulation.png';
import aboutTexture from '../assets/about_texture.png';
import aboutSustain from '../assets/about_sustain.png';
import shop01 from '../assets/about_shop01.png';
import shop02 from '../assets/about_shop02.png';
import shop03 from '../assets/about_shop03.png';
import shop04 from '../assets/about_shop04.png';
import shop05 from '../assets/about_shop05.png';
import shop06 from '../assets/about_shop06.png';

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
    {
        subtitle: 'thoughtful formulations',
        desc: '이솝은 멜버른 연구소에서 화학자들이 식물 유래 성분과 검증된 합성 성분을 결합해 포뮬러를 설계하는 하이브리드 접근을 취합니다. 피부에 실제로 필요한 효능과 안전성을 기준으로 충분한 연구·테스트를 거친 제품만을 출시합니다.',
        overlayColor: 'rgba(50, 41, 29, 0.46)',
    },
    {
        subtitle: 'quiet sensory rituals',
        desc: '이솝은 스킨·바디·헤어 케어를 단순한 관리가 아닌, 하루를 정돈하는 차분한 리추얼로 바라봅니다. 허브·시트러스·우디 노트의 향과 질감이 어우러져 과장되지 않은 감각 경험을 만듭니다.',
        overlayColor: 'rgba(28, 37, 30, 0.52)',
    },
    {
        subtitle: 'local character spaces',
        desc: '이솝 매장은 어디서나 같은 인테리어를 반복하지 않습니다. 현지 건축가·디자이너와 협업해 지역적 이야기와 브랜드 세계관이 자연스럽게 섞인 공간을 만들며, 각 도시의 맥락과 건축 요소를 존중합니다.',
        overlayColor: 'rgba(42, 28, 18, 0.50)',
    },
];

const ORIGINS_TABS = [
    {
        id: 'origins',
        label: 'Origins',
        en: 'Founded in a Melbourne hair salon in 1987, the brand began with formulations based on essential oils.',
        kr: '이솝은 1987년 멜버른의 한 살롱에서 시작되었습니다.\n에센셜 오일을 바탕으로 한 조합이 브랜드의 출발점이 되었습니다.',
    },
    {
        id: 'naming',
        label: 'Naming',
        en: 'The name Aesop is drawn from the ancient storyteller associated with fables, reflecting a restrained stance against exaggerated beauty claims.',
        kr: '브랜드명은 이솝 우화로 알려진 이야기꾼 \'Aesop\'에서 가져왔습니다.\n과장된 미용 광고에 대한 절제된 태도를 상징합니다.',
    },
    {
        id: 'formulation',
        label: 'Formulation',
        en: 'Formulations are developed in-house by chemists, informed by new technologies and established science.\nPlant-derived ingredients are balanced with scientifically developed components, with a focus on protecting and restoring the skin.',
        kr: '자체 실험실에서 화학자들이 새로운 기술과 검증된 과학을 바탕으로 만듭니다.\n식물 유래 성분과 과학적 성분을 균형 있게 조합해, 피부의 보호와 회복에 초점을 둡니다.',
    },
    {
        id: 'architecture',
        label: 'Architecture',
        en: 'The first store in St Kilda was realised through the reinterpretation of an existing space.\nSince then, architecture and spatial design have become integral to the brand.',
        kr: '세인트 킬다의 첫 스토어는 기존 공간을 재해석하는 방식으로 만들어졌습니다.\n이후 건축과 공간 디자인은 브랜드를 구성하는 중요한 축이 되었습니다.',
    },
    {
        id: 'approach',
        label: 'Approach',
        en: 'Expanding beyond skin, hair, and body care into fragrance and space, the brand favours considered growth over rapid expansion, maintaining consistency and balance.',
        kr: '스킨, 헤어, 바디 케어를 넘어 향과 공간으로 확장하고 있습니다.\n빠른 확장보다 브랜드의 일관성과 균형을 유지하는 방식을 택합니다.',
    },
];

const ARCH_IMAGES = [shop01, shop02, shop03, shop04, shop05, shop06];

// Origins 탭 전환 트리거 포인트 (600vh 기준)
// 앞 4탭 각 100vh, 마지막 Approach 200vh 확보
// [Origins=0%, Naming=16.67%, Formulation=33.33%, Architecture=50%, Approach=66.67%]
const ORIGINS_TRIGGER_PCT = [0, 16.67, 33.33, 50, 66.67];

const OurStory = () => {
    // ── Hero refs ────────────────────────────────────────────────────────────
    const pageRef       = useRef(null);
    const heroRef       = useRef(null);
    const panelRef      = useRef(null);
    const overlayRef    = useRef(null);
    const subtitleRef   = useRef(null);
    const descRef       = useRef(null);

    // ── Origins refs ─────────────────────────────────────────────────────────
    const originsRef        = useRef(null);   // 500vh 스크롤 컨테이너
    const originsPanelRef   = useRef(null);   // 100vh 핀 패널
    const tabContentEnRef   = useRef(null);
    const tabContentKrRef   = useRef(null);
    const tabButtonRefs     = useRef([]);
    const activeTabRef      = useRef('origins');

    // ── 탭 전환 (클릭 · 스크롤 공용) ─────────────────────────────────────────
    const changeTab = useCallback((id) => {
        const tab = ORIGINS_TABS.find((t) => t.id === id);
        if (!tab || activeTabRef.current === id) return;
        activeTabRef.current = id;

        const enEl = tabContentEnRef.current;
        const krEl = tabContentKrRef.current;
        if (!enEl || !krEl) return;

        gsap.to([enEl, krEl], {
            autoAlpha: 0,
            y: -14,
            duration: 0.28,
            ease: 'power2.in',
            onComplete: () => {
                enEl.textContent = tab.en;
                krEl.textContent = tab.kr;
                // 활성 탭 버튼 스타일 교체
                tabButtonRefs.current.forEach((btn) => {
                    if (btn) btn.classList.toggle('is-active', btn.dataset.id === id);
                });
                gsap.fromTo(
                    [enEl, krEl],
                    { autoAlpha: 0, y: 14 },
                    { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power3.out' }
                );
            },
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // ── Hero 슬라이드 전환 ────────────────────────────────────────────
            const changeSlide = (index) => {
                const slide = SLIDES[index];
                const tl = gsap.timeline();

                tl.to([subtitleRef.current, descRef.current], {
                    autoAlpha: 0, y: -28, duration: 0.38, stagger: 0.06, ease: 'power2.in',
                });
                tl.to(overlayRef.current, {
                    backgroundColor: slide.overlayColor, duration: 0.9, ease: 'power2.inOut',
                }, 0);
                tl.call(() => {
                    subtitleRef.current.textContent = slide.subtitle;
                    descRef.current.textContent     = slide.desc;
                });
                tl.fromTo(
                    [subtitleRef.current, descRef.current],
                    { autoAlpha: 0, y: 28 },
                    { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
                );
            };

            mm.add('(prefers-reduced-motion: no-preference)', () => {
                // ── Hero 핀 ──────────────────────────────────────────────────
                ScrollTrigger.create({
                    trigger: heroRef.current,
                    start: 'top top', end: 'bottom bottom',
                    pin: panelRef.current, pinSpacing: false,
                    id: 'hero-panel-pin',
                });
                ScrollTrigger.create({
                    trigger: heroRef.current, start: '33.33% top',
                    onEnter: () => changeSlide(1), onLeaveBack: () => changeSlide(0),
                });
                ScrollTrigger.create({
                    trigger: heroRef.current, start: '66.66% top',
                    onEnter: () => changeSlide(2), onLeaveBack: () => changeSlide(1),
                });

                // ── Origins 핀 ───────────────────────────────────────────────
                ScrollTrigger.create({
                    trigger: originsRef.current,
                    start: 'top top', end: 'bottom bottom',
                    pin: originsPanelRef.current, pinSpacing: false,
                    id: 'origins-panel-pin',
                });

                // ── Origins 탭 스크롤 전환 (20% 간격 = 100vh) ────────────────
                // 진입 시 reveal (label + tabs)
                gsap.from('.about-origins__label', {
                    autoAlpha: 0, y: 20, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: originsRef.current, start: 'top 80%' },
                });
                gsap.from('.about-origins__tab', {
                    autoAlpha: 0, x: -30, duration: 0.9, stagger: 0.08, ease: 'power3.out',
                    scrollTrigger: { trigger: originsRef.current, start: 'top 80%' },
                });

                // 탭 1→4 스크롤 전환
                ORIGINS_TABS.forEach((tab, i) => {
                    if (i === 0) return;
                    ScrollTrigger.create({
                        trigger: originsRef.current,
                        start: `${ORIGINS_TRIGGER_PCT[i]}% top`,
                        onEnter:     () => changeTab(tab.id),
                        onLeaveBack: () => changeTab(ORIGINS_TABS[i - 1].id),
                    });
                });

                // ── Our Values reveal ────────────────────────────────────────
                gsap.from('.about-values__heading, .about-values__en, .about-values__kr', {
                    autoAlpha: 0, y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-values', start: 'top 65%' },
                });

                // ── 하단 섹션 reveals ────────────────────────────────────────
                gsap.from('.about-formulation__title', {
                    autoAlpha: 0, y: 70, duration: 1.3, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-formulation', start: 'top 65%' },
                });
                gsap.from('.about-formulation__texture, .about-formulation__main, .about-formulation__desc', {
                    autoAlpha: 0, y: 50, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-formulation__main', start: 'top 75%' },
                });
                gsap.from('.about-architecture__title', {
                    autoAlpha: 0, y: 70, duration: 1.3, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-architecture', start: 'top 65%' },
                });
                gsap.from('.arch-img', {
                    autoAlpha: 0, y: 80, duration: 1, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-architecture__images', start: 'top 80%' },
                });
                gsap.from('.about-sustainability__title', {
                    autoAlpha: 0, y: 70, duration: 1.3, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-sustainability', start: 'top 65%' },
                });
                gsap.from('.about-sustainability__image, .about-sustainability__desc', {
                    autoAlpha: 0, y: 50, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-sustainability__image', start: 'top 75%' },
                });
            });

            // ── reduced-motion fallback ───────────────────────────────────────
            mm.add('(prefers-reduced-motion: reduce)', () => {
                // Hero 즉시 전환
                ScrollTrigger.create({
                    trigger: heroRef.current, start: '33.33% top',
                    onEnter: () => {
                        subtitleRef.current.textContent = SLIDES[1].subtitle;
                        descRef.current.textContent     = SLIDES[1].desc;
                        gsap.set(overlayRef.current, { backgroundColor: SLIDES[1].overlayColor });
                    },
                    onLeaveBack: () => {
                        subtitleRef.current.textContent = SLIDES[0].subtitle;
                        descRef.current.textContent     = SLIDES[0].desc;
                        gsap.set(overlayRef.current, { backgroundColor: SLIDES[0].overlayColor });
                    },
                });
                ScrollTrigger.create({
                    trigger: heroRef.current, start: '66.66% top',
                    onEnter: () => {
                        subtitleRef.current.textContent = SLIDES[2].subtitle;
                        descRef.current.textContent     = SLIDES[2].desc;
                        gsap.set(overlayRef.current, { backgroundColor: SLIDES[2].overlayColor });
                    },
                    onLeaveBack: () => {
                        subtitleRef.current.textContent = SLIDES[1].subtitle;
                        descRef.current.textContent     = SLIDES[1].desc;
                        gsap.set(overlayRef.current, { backgroundColor: SLIDES[1].overlayColor });
                    },
                });

                // Origins 즉시 전환
                ORIGINS_TABS.forEach((tab, i) => {
                    if (i === 0) return;
                    ScrollTrigger.create({
                        trigger: originsRef.current,
                        start: `${ORIGINS_TRIGGER_PCT[i]}% top`,
                        onEnter: () => {
                            activeTabRef.current = tab.id;
                            tabContentEnRef.current.textContent = tab.en;
                            tabContentKrRef.current.textContent = tab.kr;
                            tabButtonRefs.current.forEach((btn) => {
                                if (btn) btn.classList.toggle('is-active', btn.dataset.id === tab.id);
                            });
                        },
                        onLeaveBack: () => {
                            const prev = ORIGINS_TABS[i - 1];
                            activeTabRef.current = prev.id;
                            tabContentEnRef.current.textContent = prev.en;
                            tabContentKrRef.current.textContent = prev.kr;
                            tabButtonRefs.current.forEach((btn) => {
                                if (btn) btn.classList.toggle('is-active', btn.dataset.id === prev.id);
                            });
                        },
                    });
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, [changeTab]);

    return (
        <div className="our-story" ref={pageRef} data-node-id="763:1534">

            {/* ── HERO ── */}
            <section className="about-hero" ref={heroRef} data-node-id="763:1309">
                <div className="about-hero__panel" ref={panelRef}>
                    <video className="about-hero__video" autoPlay muted loop playsInline>
                        <source src={aboutBg} type="video/mp4" />
                    </video>
                    <div
                        className="about-hero__overlay"
                        ref={overlayRef}
                        style={{ backgroundColor: SLIDES[0].overlayColor }}
                    />
                    <div className="about-hero__content">
                        <div className="about-hero__heading">
                            <span className="about-hero__pre">We cultivate</span>
                            <span className="about-hero__subtitle" ref={subtitleRef}>
                                {SLIDES[0].subtitle}
                            </span>
                        </div>
                        <p className="about-hero__desc" ref={descRef}>
                            {SLIDES[0].desc}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── OUR VALUES ── */}
            <section className="about-values" data-node-id="763:1371">
                <div className="about-values__inner">
                    <h2 className="about-values__heading">Our Values</h2>
                    <p className="about-values__en">
                        Through considered formulations, sensory rituals, and an approach to space,
                        we connect everyday life and environment as a continuous experience.
                    </p>
                    <p className="about-values__kr">
                        신중한 조합과 감각적인 리추얼, 그리고 공간에 대한 태도를 통해,
                        일상과 환경을 하나의 흐름으로 연결합니다.
                    </p>
                </div>
            </section>

            {/* ── ORIGINS : 500vh 스크롤 컨테이너 ── */}
            <section className="about-origins" ref={originsRef} data-node-id="763:1357">

                {/* 100vh 핀 패널 */}
                <div className="about-origins__panel" ref={originsPanelRef}>
                    <div className="about-origins__inner">
                        <p className="about-origins__label">Our Values</p>

                        <div className="about-origins__body">
                            <nav className="about-origins__tabs">
                                {ORIGINS_TABS.map((tab, i) => (
                                    <button
                                        key={tab.id}
                                        data-id={tab.id}
                                        ref={(el) => { tabButtonRefs.current[i] = el; }}
                                        className={`about-origins__tab ${tab.id === 'origins' ? 'is-active' : ''}`}
                                        onClick={() => changeTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="about-origins__content">
                                <p
                                    className="about-origins__content-en"
                                    ref={tabContentEnRef}
                                >
                                    {ORIGINS_TABS[0].en}
                                </p>
                                <p
                                    className="about-origins__content-kr"
                                    ref={tabContentKrRef}
                                >
                                    {ORIGINS_TABS[0].kr}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FORMULATION ── */}
            <section className="about-formulation" data-node-id="763:1336">
                <h2 className="about-formulation__title">Formulation</h2>
                <img className="about-formulation__texture" src={aboutTexture} alt="" aria-hidden="true" />
                <img className="about-formulation__main" src={aboutFormulation} alt="Aesop formulation products" />
                <p className="about-formulation__desc">
                    자체 실험실에서 화학자들이 직접 포뮬레이션을 설계합니다. 새로운 기술과 검증된 과학을 병행하며,
                    식물 유래 성분과 과학 성분을 균형 있게 조합합니다. 우리는 피부를 보호하고 회복하는 데 초점을 둔 스킨케어를 지향합니다.
                </p>
            </section>

            {/* ── ARCHITECTURE ── */}
            <section className="about-architecture" data-node-id="763:1348">
                <h2 className="about-architecture__title">Architecture</h2>
                <div className="about-architecture__images">
                    {ARCH_IMAGES.map((img, i) => (
                        <img
                            key={i}
                            className={`arch-img arch-img--${i + 1}`}
                            src={img}
                            alt={`Aesop store ${i + 1}`}
                        />
                    ))}
                </div>
                <p className="about-architecture__desc">
                    잘 설계된 디자인은 삶의 질을 향상시킵니다. 우리는 절제된 톤과 실용성, 지속가능성을 바탕으로 공간을 설계합니다.
                    각 도시의 환경을 존중하며, 이미 존재하는 건축 요소와 함께 공간을 완성합니다.
                </p>
            </section>

            {/* ── SUSTAINABILITY ── */}
            <section className="about-sustainability" data-node-id="763:1341">
                <h2 className="about-sustainability__title">Sustainability</h2>
                <div className="about-sustainability__image">
                    <img src={aboutSustain} alt="Aesop sustainable products" />
                </div>
                <p className="about-sustainability__desc">
                    불필요한 패키징을 줄이고, 재사용과 재활용이 가능한 소재를 우선합니다.
                    제품 전반에 걸쳐 지속 가능한 설계와 재료 선택을 고려합니다.
                    과도한 장식을 지양하며, 필요한 만큼만 사용하는 태도를 유지합니다.
                </p>
            </section>

        </div>
    );
};

export default OurStory;
