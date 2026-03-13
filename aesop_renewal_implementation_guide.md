# 구현 기준서

## 1. 이 문서의 목표

이 프로젝트의 핵심은 아래 5가지를 동시에 맞추는 것입니다.

1. **Aesop 특유의 절제된 감각, 리추얼 중심의 제품 경험, 문학적·문화적 무드를 디지털에서 재해석하는 것**
2. **에디토리얼한 여백감과 화면 리듬은 참고하되, 패션몰이 아니라 라이프스타일·뷰티 커머스에 맞게 재구성하는 것**
3. **React + Zustand + LocalStorage 기반의 클라이언트 전용 구조를 유지하면서, 홈 → 카테고리 → 상세 → 장바구니 → 결제 → 마이페이지까지 실제 흐름이 살아 있게 구현하는 것**
4. **오프라인 매장에서 느끼는 브랜드 경험이 온라인 공식몰에서도 이어지도록 설계하는 것**
5. **자기 사용 목적과 선물 목적이 모두 빠르게 해결되는 반응형 UX를 만드는 것**

즉, 이 프로젝트는 “감성적인 첫 화면”이 아니라,  
**브랜드 무드와 실사용 흐름이 함께 완성된 Aesop형 공식몰 리뉴얼 포트폴리오**로 구현해야 합니다.

---

## 2. 한 줄 정의

**웜 뉴트럴 톤 기반의 절제된 프리미엄 무드와 리추얼 중심 탐색을 결합한 서버리스 라이프스타일 이커머스 포트폴리오**

- 백엔드는 붙이지 않는다.
- 상품, 회원, 장바구니, 주문, 문의, 리뷰는 모두 **클라이언트 상태 + LocalStorage 영속성**으로 처리한다.
- 결과물은 “설명용 목업”이 아니라 **실제 클릭 흐름이 살아 있는 UI**여야 한다.

---

## 3. 이 프로젝트에서 절대 놓치면 안 되는 기준

### 3-1. 구조 기준

- 탐색 구조는 **성별 중심이 아니라 목적 중심**이어야 한다.
- 핵심 탐색축은 아래 5개다.
  - 카테고리
  - 피부/사용 고민
  - 향/아로마 계열
  - 사용 상황
  - 선물 상황
- 오프라인 매장 경험을 온라인에서 이어주는 장치가 반드시 있어야 한다.
  - 매장 찾기
  - 추천 루틴
  - 재구매 진입
  - 선물 큐레이션

### 3-2. 화면 기준

- 전체 톤은 **화이트와 웜 베이지, 브라운 계열을 중심으로 한 절제된 프리미엄 무드**로 구성한다.
- 기존의 흑백 모노톤 패션몰 무드보다, **부드러운 명도 차와 따뜻한 종이 질감의 배경감**이 중요하다.
- 포인트 컬러는 강한 원색을 쓰지 않고, **깊은 브라운 계열과 제한적인 피치/세이지 포인트**로 대비를 준다.
- 타이포는 과장하지 않고, **큰 여백 / 낮은 채도의 배경 / 차분한 제목 대비 / 얇은 구분선**으로 브랜드 무드를 만든다.
- 버튼, 카드, 테이블, 폼은 지나치게 날카롭지 않게 하되, **과한 둥근 모서리는 지양하고 정제된 반경**을 유지한다.

### 3-3. UX 기준

- 첫 화면 1스크롤 안에서 사용자는 최소 3가지를 이해해야 한다.
  1. 나에게 맞는 제품을 어떻게 찾는지
  2. 선물을 어떻게 실패 없이 고를 수 있는지
  3. 공식몰에서 사야 하는 이유가 무엇인지
- 자기 사용 고객에게는 **빠른 재탐색/재구매 흐름**, 선물 고객에게는 **빠른 선물 성공 확신**을 줘야 한다.
- 브랜드 가치(지속가능성, 패키징, 진정성)가 **좋은 말**로만 끝나면 안 되고, **구매 확신 요소**로 보여야 한다.
- 반응형은 단순 축소가 아니라 **구성 자체가 달라져야** 한다.

---

## 4. 이번 리뉴얼에서 먼저 바로잡아야 하는 방향

### 4-1. 삭제 또는 교체

- `WOMAN / MAN / KIDS` 중심 GNB
- `SALE` 중심 강조 구조
- `NEW COLLECTION / TIMELESS PIECES / URBAN ESSENTIALS` 같은 패션형 카피
- `색상 + 사이즈`를 기본 전제로 한 상품 구조
- 세로로 길게 떨어지는 패션 룩북형 제품 카드
- `SHOP NOW` 중심의 직선적 CTA만 있는 히어로 구조

### 4-2. 대체 방향

- GNB는 **Gift Guide / Products / Benefits / Our Story** 중심으로 재구성한다.
- 상품 탐색은 **카테고리 + 고민 + 향 + 상황 + 가격대** 기반으로 설계한다.
- 홈의 첫 진입은 **캠페인 + 공식몰 혜택 + 선물/리추얼 진입**이 함께 보이도록 한다.
- 상품 상세는 **variant, 향, 사용감, 주요 성분, 사용 방법, 패키징/리사이클, 선물 적합성** 중심으로 보여준다.
- 카드 퀵 액션은 `ADD`보다 **자세히 보기 / variant 선택 / 재구매**가 더 자연스럽다.

### 4-3. 구현 시 권장 판단

- LocalStorage 기반 구조는 유지해도 된다.
- Wishlist / Cart / Review / Inquiry / Order 흐름도 유지 가능하다.
- 다만 **상품 데이터 모델은 패션형에서 Aesop형으로 바뀌어야 한다.**
- 체크아웃은 비회원 결제보다 **로그인 기반 흐름**으로 정리하는 것이 더 자연스럽다.

---

## 5. 실제 기술 스택

## 5-1. 필수 스택

- **React 19**
- **Vite 7**
- **React Router DOM 7**
- **Zustand 5**
- **Sass / SCSS**
- **Swiper 11**
- **GSAP 3**
- **Lucide React**
- **SweetAlert2**
- **react-quill-new**
- **react-daum-postcode**

---

## 6. 전역 디자인 시스템

## 6-1. 폰트

### 기본 원칙

- **한글 UI / 본문 / 설명 텍스트는 `SUIT Variable`**
- **영문 헤드라인 / 에디토리얼 타이틀은 `Montage`**
- **영문 제품명 / 짧은 라벨 / 보조 타이포는 `Optima`**

### 폰트 패밀리 기준

```scss
$font-ko:
  'SUIT Variable',
  'SUIT',
  -apple-system,
  BlinkMacSystemFont,
  'Apple SD Gothic Neo',
  'Noto Sans KR',
  'Malgun Gothic',
  sans-serif;

$font-en-display:
  'Montage',
  'Optima',
  'Times New Roman',
  serif;

$font-en-ui:
  'Optima',
  'SUIT Variable',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  sans-serif;
```

### 타이포 적용 원칙

- 한글 중심 화면은 기본적으로 `$font-ko`를 사용한다.
- 영문 섹션 타이틀, 브랜드성 카피, 감성적 헤드라인은 `$font-en-display`를 사용한다.
- 영문 제품명, 짧은 CTA, 서브 레이블은 `$font-en-ui`를 사용한다.
- 한 화면 안에서 영문 폰트를 과도하게 섞지 말고, **Montage는 강조용 / Optima는 정돈용**으로 역할을 분리한다.

### 구현 메모

- `SUIT Variable`는 웹폰트 또는 self-host 방식으로 불러온다.
- `Optima`, `Montage`는 프로젝트 환경에 따라 **라이선스 확인 후 self-host**를 권장한다.
- 영문 폰트 미로딩 상황을 대비해 fallback을 반드시 포함한다.

## 6-2. 컬러 토큰

```scss
$yellow-50: #f1efec;
$yellow-100: #d5cec5;
$yellow-200: #c0b6a9;
$yellow-300: #a49582;
$yellow-400: #928169;
$yellow-500: #776144;
$yellow-600: #6c583e;
$yellow-700: #544530;
$yellow-800: #413525;
$yellow-900: #32291d;

$white: #fffbf3;

$bg-primary: #eee5da;
$bg-product: #decbbc;

/* accent */
$accent-peach: #efae97;
$accent-sage: #a3b18a;
$accent-brown: #776144;
```

### 의미 기반 시맨틱 토큰

```scss
$text-primary: $yellow-900;
$text-secondary: $yellow-700;
$text-muted: $yellow-500;

$border-light: $yellow-100;
$border-default: $yellow-200;
$border-strong: $yellow-300;

$surface-base: $white;
$surface-primary: $bg-primary;
$surface-product: $bg-product;
$surface-muted: $yellow-50;

$button-primary: $accent-brown;
$button-primary-hover: $yellow-600;
$button-secondary: transparent;
$button-secondary-border: $yellow-300;

$link-default: $yellow-800;
$link-hover: $yellow-900;

$badge-cart: $accent-peach;
$badge-benefit: $accent-sage;
$highlight-soft: $accent-peach;
$highlight-natural: $accent-sage;
$brand-key: $accent-brown;
```

### 컬러 사용 원칙

- 기본 배경은 `$white` 또는 `$bg-primary`를 사용한다.
- 상품 카드, 추천 영역, 제품 정보 블록 등은 `$bg-product`를 제한적으로 사용해 구역감을 만든다.
- 본문 텍스트는 `$text-primary`, 보조 텍스트는 `$text-secondary`, 설명 텍스트는 `$text-muted`를 사용한다.
- 브랜드의 핵심 브라운 톤은 `#776144`를 중심값으로 사용한다.
- `#EFAE97`는 장바구니 수량 배지, 소프트 하이라이트, 한정 배지, 가벼운 포인트에 사용한다.
- `#A3B18A`는 혜택 안내, 성공 상태, 친환경/브랜드 가치, 보조 CTA 영역에 사용한다.
- 강한 원색 포인트는 사용하지 않고, **피치와 세이지를 제한적으로만 사용**한다.
- 색의 주인공은 여전히 뉴트럴 베이지/브라운 계열이며, 포인트 컬러는 보조 역할만 한다.

### 6-3. 레이아웃 기준

- 공통 컨테이너 `.inner`
  - `width: 92%`
  - `max-width: 1680px`
- Header 높이
  - Desktop: **70px**
  - Tablet: **68px**
  - Mobile: **60px**
- Product Grid
  - Desktop: **4열**
  - Tablet: **3열**
  - Mobile: **2열**
- Product Card 이미지 비율
  - `4:5` 또는 `1:1.15`
- 공통 배경은 완전한 순백보다 **크리미한 아이보리 베이스**를 우선한다.
- 카드/섹션 간 구분은 그림자보다 **배경 명도 차와 얇은 보더**로 표현한다.

### 6-4. 반응형 브레이크포인트

```scss
$mobile: 767px;
$tablet: 1199px;
$desktop: 1440px;
```

- 모바일: `max-width: 767px`
- 태블릿: `max-width: 1199px`
- 데스크탑 유틸: `max-width: 1440px`

### 6-5. 무드 키워드

- warm neutral
- tactile
- refined
- ritual-driven
- quiet luxury
- editorial restraint
- soft contrast
- premium calm

---

## 7. 전체 라우팅 맵

라우트는 아래 기준으로 구성한다.

```txt
/
/gift-guide
/gift-guide/general
/gift-guide/fragrance
/products
/products/:category
/products/:category/:subcategory
/benefits
/benefits/official
/benefits/kr-exclusive
/our-story
/search
/login
/signup
/find-account
/mypage
/cart
/checkout
/product/:id
/support/notices
/support/faq
/support/contact
/support/live-chat
/support/store-locator
```

### 7-1. 라우트 의미

- `/` : 홈
- `/gift-guide` : 기프트 가이드 메인
- `/gift-guide/general` : 일반 기프트 추천
- `/gift-guide/fragrance` : 프래그런스 가이드
- `/products` : 전체 상품
- `/products/:category` : 1차 카테고리 상품 목록
- `/products/:category/:subcategory` : 세부 카테고리 또는 향 계열 페이지
- `/benefits` : 혜택 안내 메인
- `/benefits/official` : 공식몰 혜택
- `/benefits/kr-exclusive` : 한국 한정 혜택 / 콘텐츠
- `/our-story` : 브랜드 소개
- `/search` : 검색 결과 페이지
- `/login`, `/signup`, `/find-account` : 인증 흐름
- `/mypage` : 회원 전용 개인 포털
- `/cart` : 장바구니
- `/checkout` : 결제
- `/product/:id` : 상품 상세
- `/support/notices`, `/support/faq`, `/support/contact` : 고객지원
- `/support/live-chat` : 실시간 상담
- `/support/store-locator` : 매장 찾기

---

## 8. 데이터 모델 명세

## 8-1. 상품(Product)

Product 객체는 패션형 `색상 / 사이즈 / 성별` 구조가 아니라,  
**카테고리 / 서브카테고리 / 향 / 사용감 / 주요 성분 / 용량 variant / 패키징 정보** 중심으로 구성한다.

설명은 한글 기준으로 작성한다.

```ts
interface ProductVariant {
    id: string;
    label: string; // 예: '75mL', '500mL', '500mL 리필'
    price: number;
    compareAtPrice: number | null;
    stock: number;
    isDefault?: boolean;
    isRefill?: boolean;
}

interface ProductReview {
    id: number;
    userId: string;
    userName: string;
    date: string;
    rating: number;
    content: string;
}

interface Product {
    id: string;
    slug: string;
    name: string;
    brand: string; // 'Aesop'
    categorySlug: string;
    categoryLabel: string;
    subcategorySlug: string;
    subcategoryLabel: string;
    type: 'single' | 'kit';

    image: string;
    hoverImage?: string;
    gallery: string[];

    description: string;
    shortDescription?: string;
    texture: string;
    aromaNotes: string[];
    scentFamily?: 'floral' | 'fresh' | 'woody' | 'opulent' | string;

    keyIngredients: string[];
    suitableFor: string[];
    concerns: string[];
    benefits: string[];
    usage: string;
    routineStep?: string;

    variants: ProductVariant[];

    packagingInfo: {
        summary: string;
        recycleGuide: string[];
        sustainabilityNotes: string[];
    };

    merchandising: {
        isNew: boolean;
        isBest: boolean;
        isSignature: boolean;
        isGiftable: boolean;
        isOnlineExclusive: boolean;
    };

    giftMeta: {
        giftTags: string[];
        giftReason: string;
        canAddGiftWrap: boolean;
        canAddShoppingBag: boolean;
    };

    reviews: ProductReview[];
}
```

### 데이터 모델 원칙

- `price`, `discountPrice` 단일 필드 대신 **`variants[]` 기준 가격 구조**를 사용한다.
- `colors`, `sizes`, `gender`는 제거한다.
- 상품 탐색과 선물 추천을 위해 **`concerns`, `giftMeta`, `merchandising`** 필드를 둔다.
- 패키징 정보는 단순 스펙이 아니라 **리사이클 / 지속가능성 정보**까지 포함한다.

## 8-2. 사용자(User)

```ts
interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    phone?: string;
    address?: string;
    defaultShipping?: {
        receiver?: string;
        phone?: string;
        zipcode?: string;
        address?: string;
        detailAddress?: string;
    };
    createdAt: string;
}
```

실제 로그인 세션에 저장되는 `user`는 password를 제외한 형태다.

## 8-3. 장바구니 아이템(CartItem)

```ts
interface CartItem {
    cartId: string; // `${productId}-${variantId}`
    productId: string;
    name: string;
    image: string;

    categoryLabel: string;
    subcategoryLabel: string;

    selectedVariant: {
        id: string;
        label: string;
        price: number;
        isRefill?: boolean;
    };

    quantity: number;
    unitPrice: number;
}
```

### CartItem 원칙

- `selectedColor`, `selectedSize`는 제거한다.
- 제품 옵션은 **`selectedVariant`** 하나로 처리한다.
- `cartId`는 반드시 **`productId + variantId` 조합**으로 만든다.
- 같은 제품이라도 variant가 다르면 다른 아이템으로 저장한다.

## 8-4. 주문(Order)

```ts
interface Order {
    id: string; // ORD_${Date.now()}
    userId: string;
    items: CartItem[];

    shippingInfo: {
        receiver: string;
        phone: string;
        zipcode: string;
        address: string;
        detailAddress: string;
        memo: string;
    };

    giftInfo: {
        isGiftOrder: boolean;
        giftWrap: boolean;
        shoppingBag: boolean;
        message: string;
    };

    paymentMethod: 'card' | 'bank';
    selectedCard: string;

    subtotal: number;
    shippingFee: number;
    totalAmount: number;

    createdAt: string;
    status: '결제완료';
}
```

## 8-5. 문의 / Q&A / 공지 / FAQ

```ts
interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
    author: string;
    category: string;
}

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

interface Inquiry {
    id: number;
    userId: string;
    type: string; // 주문 / 배송 / 제품 / 선물 / 기타
    title: string;
    content: string;
    date: string;
}

interface Qna {
    id: number;
    userId: string;
    title: string;
    content: string;
    date: string;
}
```

## 8-6. 위시리스트

```ts
interface WishlistItem {
    userId: string;
    productId: string;
    addedAt: string;
}
```

---

## 9. Zustand 아키텍처

## 9-1. Root Store

`useStore.js` 에서 여러 Slice를 합친다.

- `createAuthSlice`
- `createProductSlice`
- `createCartSlice`
- `createSupportSlice`
- `createOrderSlice`
- `createWishlistSlice`

## 9-2. Persist 설정

```ts
name: 'ff-storage';
storage: createJSONStorage(() => localStorage);
```

## 9-3. 실제 partialize 대상

다음만 영속 저장한다.

- `users`
- `user`
- `isLoggedIn`
- `products`
- `cartItems`
- `inquiries`
- `qnas`
- `orders`
- `wishlist`

즉, `filteredProducts`, `currentProduct`, `notices`, `faqs`, `searchQuery`, `sortKey` 같은 값은 영속 대상이 아니다.

## 9-4. 최근 검색어 저장 방식

- 검색 최근어는 Store가 아니라 **`recentSearches`** 키로 직접 LocalStorage에 저장한다.
- 중복 제거 + 최신순 + 최대 5개 유지
- 개별 삭제 가능

---

## 10. Slice별 실제 역할

## 10-1. authSlice

역할:

- 로그인
- 회원가입
- 테스트 회원 생성/로그인
- 로그아웃
- 기본 배송지 / 연락처 수정
- 아이디 찾기
- 비밀번호 찾기 / 재설정

핵심 액션:

- `login(credentials)`
- `loginAsTestUser(onlyRegister?)`
- `signup(userData)`
- `logout()`
- `updateUserAddress(userId, shippingInfo)`
- `findEmail(name, phone)`
- `findPassword(email, name)`
- `resetPassword(email, newPassword)`

## 10-2. productSlice

역할:

- Seed Data 로드
- 상품 상세 조회
- 목록 필터링
- 검색어/정렬 상태 관리
- 리뷰 CRUD
- 내가 쓴 리뷰 조회
- 연관 상품 조회

핵심 액션:

- `fetchProducts()`
- `fetchProductById(id)`
- `fetchProductBySlug(slug)`
- `setFilters(newFilters)`
- `clearFilters()`
- `setSearchQuery(query)`
- `setSort(sortKey)`
- `addReview(productId, review)`
- `updateReview(productId, reviewId, content, rating)`
- `deleteReview(productId, reviewId)`
- `getUserReviews(userId)`
- `getRelatedProducts(productId)`

### 필터 구조 기준

```ts
interface ProductFilters {
    categorySlug?: string | null;
    subcategorySlug?: string | null;
    scentFamily?: string | null;
    concerns?: string[];
    giftTags?: string[];
    priceRange?: [number, number] | null;
    query?: string;
}
```

## 10-3. cartSlice

역할:

- 장바구니 담기
- variant 기준 unique cartId 생성
- 수량 수정
- 개별 삭제 / 선택 삭제 / 전체 비우기
- 예전 데이터 보정
- 총 수량 계산

핵심 액션:

- `getSanitizedCart()`
- `addToCart(product, selectedVariant, quantity?)`
- `updateCartQuantity(cartId, quantity)`
- `removeFromCart(cartId)`
- `removeMultipleFromCart(cartIds)`
- `clearCart()`
- `getTotalItems()`

## 10-4. orderSlice

역할:

- 결제 완료 주문 저장
- 주문번호 기반 조회
- 로그인 유저 주문 조회

핵심 액션:

- `addOrder(orderData)`
- `getOrderById(orderId)`
- `getUserOrders(userId)`

## 10-5. supportSlice

역할:

- 공지사항 로드
- FAQ 카테고리 필터 로드
- 1:1 문의 CRUD
- Q&A CRUD
- 사용자별 문의 조회

핵심 액션:

- `fetchNotices()`
- `fetchFAQs(category?)`
- `submitInquiry(data)`
- `updateInquiry(id, updateData)`
- `deleteInquiry(id)`
- `getUserInquiries(userId)`
- `submitQna(data)`
- `updateQna(id, updateData)`
- `deleteQna(id)`
- `getUserQnas(userId)`

## 10-6. wishlistSlice

역할:

- 관심상품 토글
- 유저별 리스트 조회
- 특정 상품 저장 여부 확인

핵심 액션:

- `toggleWishlist(userId, productId)`
- `getUserWishlist(userId)`
- `isProductWishlisted(userId, productId)`

---

## 11. 공통 레이아웃 구현 기준

## 11-1. App

- 앱 시작 시 `fetchProducts()` 1회 실행
- 고객지원 공통 데이터가 필요하면 `fetchNotices()`, `fetchFAQs()` 초기 로드 가능
- 글로벌 스타일 `styles/index.scss` 로드
- Home에서는 Hero와 Header 상태가 연동되어야 한다.

## 11-2. Layout

```tsx
<Header />
<main className="main">
  <Outlet />
</main>
<Footer />
```

단, Header는 단순 sticky 구조가 아니라  
**페이지/스크롤 위치에 따라 상태가 바뀌는 fixed Header**로 구현한다.

- Home Hero 구간: `transparent`
- Home Hero 이탈 이후: `solid`
- 내부 페이지: 기본 `solid`

## 11-3. Header

### 기본 구조

Header는 **좌측 GNB / 중앙 로고 / 우측 유틸**의 3영역 구조로 구성한다.

- 좌측 1차 GNB
  - `GIFT GUIDE`
  - `PRODUCTS`
  - `BENEFITS`
  - `OUR STORY`
- 중앙
  - `Aēsop.` 로고
- 우측 유틸
  - Search
  - Account / MyPage
  - Cart + 수량 배지

Desktop에서는 아래 구조를 기준으로 한다.

```scss
grid-template-columns: 1fr auto 1fr;
```

### Header 상태 정의

#### 1) Transparent Header

- Home 첫 화면 Hero 위에 겹쳐지는 상태
- 배경: `transparent`
- 텍스트/아이콘: `#fffbf3`
- 하단 보더: 없음
- 위치: `fixed`

#### 2) Solid Header

- Hero를 지나거나 내부 페이지에서 사용하는 기본 상태
- 배경: `$bg-primary`
- 텍스트/아이콘: `$yellow-500` 또는 `$yellow-700`
- 하단 보더: `1px solid $border-light`
- 위치: `fixed`

### 상태 전환 규칙

- Home에서 진입 직후 Hero 구간에서는 `transparent`
- Hero 하단을 지나면 `solid`
- Home이 아닌 모든 페이지는 처음부터 `solid`
- 상태 전환은 `background-color / color / border-color` 중심으로 짧게 transition 처리한다.

### Header 컬러 적용 메모

- Transparent 상태
  - 텍스트/아이콘: `$white`
- Solid 상태
  - 배경: `$bg-primary`
  - 로고/텍스트/아이콘: `$brand-key`
- Cart badge
  - 배경: `$badge-cart`
  - 텍스트: `$white` 또는 `$yellow-900`
- Benefits / 친환경 관련 포인트 태그
  - 포인트: `$badge-benefit`

### 메뉴트리 기준

#### 1차 메뉴

```txt
GIFT GUIDE
PRODUCTS
BENEFITS
OUR STORY
```

#### 실제 메뉴 구조

```txt
GIFT GUIDE
- 기프트 가이드
- 프래그런스 가이드

PRODUCTS
- 스킨 케어
  - 클렌저
  - 토너
  - 세럼&마스크
  - 크림/로션
  - 립&아이
  - 선 케어

- 핸드&바디
  - 핸드 워시&밤
  - 바디 클렌저
  - 바디 밤&오일
  - 바 솝
  - 데오도란트

- 향수
  - 플로럴
  - 프레쉬
  - 우디
  - 오퓰런트

- 홈&리빙
  - 룸 스프레이
  - 인센스&홀더
  - 오일&버너
  - 캔들
  - 반려동물&탈취제

- 헤어&쉐이빙
  - 샴푸&컨디셔너
  - 헤어 트리트먼트
  - 헤어 스타일링
  - 쉐이빙

- 세트 상품
  - 스킨 케어 키트
  - 핸드&바디 케어 키트
  - 트래블 키트

BENEFITS
- 공식몰 혜택
- 한국 한정 혜택 / K-콘텐츠

OUR STORY
- 브랜드 소개
```

### 메뉴 UX 원칙

- 1차 메뉴명은 **영문 uppercase**로 유지한다.
- 2차 / 3차 메뉴는 한글로 보여도 된다.
- `PRODUCTS`는 가장 깊은 정보 구조를 가지므로, **메가메뉴형 구조**가 적합하다.
- `GIFT GUIDE`, `BENEFITS`는 비교적 짧은 드롭다운 구조로 처리한다.
- `OUR STORY`는 단일 링크 또는 간단한 드롭다운으로 처리한다.

## 11-4. 모바일 메뉴

- 태블릿 이하에서 햄버거 메뉴 노출
- 전체 화면 고정 오버레이 메뉴
- 투명 Header 상태일 때도 모바일 메뉴를 열면 **solid 배경 패널**로 전환한다.
- 구조는 Desktop과 동일한 정보 구조를 유지하되, 세로 아코디언 형태로 풀어낸다.
- 메뉴 클릭 시 닫힘
- 메뉴 오픈 시 body scroll lock 적용

## 11-5. Search Modal

필수 동작:

- Search 아이콘 클릭 시 전체 화면 검색 레이어 오픈
- overlay 클릭 또는 X 버튼 클릭 시 닫힘
- 검색어 입력 후 submit 하면 `/search` 이동
- `setSearchQuery(query)` 및 `setFilters({ query })` 반영
- 최근 검색어는 `recentSearches` 키로 LocalStorage 저장
- 중복 제거 + 최신순 + 최대 5개 유지
- 최근 검색어 개별 삭제 가능

화면 무드:

- 아이보리 또는 웜 뉴트럴 오버레이
- blur 또는 soft overlay 적용
- 영문 타이틀 + 한글 검색 보조 문구 가능
- 최근 검색어는 pill 형태

## 11-6. Footer

구성:

- 브랜드 로고/설명
- SNS 아이콘
- Help / Company / Policies 3컬럼 링크
- 고객지원 / 매장 찾기 / 혜택 안내 보조 링크
- 하단 카피라이트

반응형:

- Desktop: 2fr / 3fr grid
- Tablet 이하: 세로 스택
- Mobile: 각 컬럼 1열

---

## 12. 홈 화면 구현 기준

## 12-1. Hero Visual

구성:

- full width 영상 Hero
- Header는 Hero 위에 겹쳐지는 transparent 상태
- 영상 위에는 필요한 최소 수준의 overlay만 허용
- 텍스트와 CTA는 영상의 핵심 피사체를 가리지 않는 위치에 배치

동작:

- 첫 진입 시 Header는 transparent
- Hero 구간을 지나면 Header가 solid 상태로 전환
- Hero와 Header는 하나의 비주얼 경험처럼 연결되어야 한다.

## 12-2. Quick Intent Entry

Hero 바로 아래에 아래 3개 진입점을 둔다.

- **나를 위한 루틴 찾기**
- **실패 없는 선물 고르기**
- **매장 경험 이어보기**

## 12-3. 공식몰 단독 혜택 섹션

표시해야 할 것:

- 선물 포장 가능 여부
- 샘플 / 한정 증정
- 공식몰 전용 세트
- 배송 / 도착일 핵심 정보

## 12-4. Gift Confidence Section

구성:

- 상황별 탭
  - 집들이
  - 생일
  - 연인
  - 회사 / 격식
- 가격대 필터
- “왜 이 선물이 안전한지” 한 줄 이유
- 포장 포함 여부 즉시 노출
- 베스트 / 스테디셀러 배지

## 12-5. Ritual Navigator

탐색 축:

- 아침 / 저녁
- 손 / 바디 / 얼굴 / 공간
- 상쾌한 / 우디한 / 차분한 / 깊은
- 보습 / 진정 / 클렌징 / 리프레시

## 12-6. Recommended Products

추천 영역은 단순 추천이 아니라 **추천 이유가 붙은 추천**이어야 한다.

예시:

- 처음 브랜드를 접한다면
- 선물 실패 확률이 낮은 선택
- 매장에서 많이 경험하는 시그니처
- 재구매 비중이 높은 제품

## 12-7. Brand Value Section

아래 내용을 담는다.

- 패키징 / 리사이클
- 브랜드 철학
- 제품 철학
- 왜 비싸지만 납득 가능한지

## 12-8. Story / Editorial Section

- 브랜드 콘텐츠, 문화적 무드, 리추얼 가이드 등을 보여주는 영역
- 제품과 직접 연결되지 않아도 브랜드의 깊이를 형성하는 역할을 한다.

## 12-9. Store Continuity Section

구성:

- 가까운 매장 찾기
- 매장에서 시작한 루틴 이어보기
- 상담 후 온라인 재구매
- 선물 픽업 / 서비스 안내

---

## 13. 상품 목록 페이지 구현 기준

## 13-1. 경로별 자동 필터

`useLocation()`의 pathname 기준으로 자동 필터를 건다.

- `/products`
  - 전체 상품 목록
- `/products/skin-care`
  - `categorySlug: 'skin-care'`
- `/products/skin-care/cleanser`
  - `categorySlug: 'skin-care'`
  - `subcategorySlug: 'cleanser'`
- `/products/hand-body/hand-wash-balm`
  - `categorySlug: 'hand-body'`
  - `subcategorySlug: 'hand-wash-balm'`
- `/products/fragrance/floral`
  - `categorySlug: 'fragrance'`
  - `scentFamily: 'floral'`
- `/gift-guide/general`
  - `merchandising.isGiftable === true`
- `/gift-guide/fragrance`
  - `categorySlug: 'fragrance'`
  - 또는 `giftMeta.giftTags` 기준 gift filter 적용
- `/search`
  - 검색어 기반 결과 페이지

## 13-2. 상단 정보 구조

상품 목록 상단에는 아래 정보가 들어가야 한다.

- Breadcrumb
- 페이지 타이틀
- 한 줄 설명
- 현재 결과 개수
- 정렬 드롭다운
- 모바일 필터 열기 버튼

## 13-3. 필터 그룹

### 1) 카테고리 탭

```txt
전체 / 스킨 케어 / 핸드&바디 / 향수 / 홈&리빙 / 헤어&쉐이빙 / 세트 상품
```

### 2) 서브카테고리 필터

예시:

- 스킨 케어
  - 클렌저
  - 토너
  - 세럼&마스크
  - 크림/로션
  - 립&아이
  - 선 케어
- 핸드&바디
  - 핸드 워시&밤
  - 바디 클렌저
  - 바디 밤&오일
  - 바 솝
  - 데오도란트
- 향수
  - 플로럴
  - 프레쉬
  - 우디
  - 오퓰런트

### 3) 고민 / 사용 목적 필터

```txt
보습 / 진정 / 클렌징 / 리프레시 / 공간 향 / 선물용 / 데일리 루틴
```

### 4) 향 / 무드 필터

```txt
시트러스 / 허브 / 우디 / 플로럴 / 스파이시 / 차분한 / 상쾌한
```

### 5) 선물 필터

```txt
선물하기 좋음 / 집들이 / 생일 / 연인 / 격식 있는 선물 / 온라인몰 혜택 포함
```

### 6) 가격대 필터

```txt
5만원 이하 / 5~10만원 / 10만원 이상
```

## 13-4. 정렬 기준

```txt
추천순 / 베스트순 / 신제품순 / 낮은 가격순 / 높은 가격순 / 선물 추천순
```

## 13-5. 리스트 상태

- 결과가 있으면 Grid 렌더링
- 결과가 없으면 Empty State
- 모바일에서는 필터 패널을 Bottom Sheet 또는 Fullscreen Filter로 연다.

Grid 기준:

- Desktop: 4열
- Tablet: 3열
- Mobile: 2열

## 13-6. 보조 탐색 영역

상품 목록 하단 또는 상단 보조 영역에는 아래 중 하나를 둘 수 있다.

- 관련 루틴 추천
- 같이 쓰기 좋은 제품
- 시그니처 제품
- 선물 가이드 바로가기

---

## 14. ProductItem 카드 기준

카드에서 반드시 살아 있어야 하는 포인트:

- 정제된 제품 중심 이미지
- 과한 패션 화보형 비율보다 **차분한 제품 중심 비율**
- hover 시 과격한 모션보다 **절제된 확대 / 정보 레이어 등장**
- 상품명 아래에 **향 / 사용감 / 추천 이유** 중 하나가 보이도록 구성
- 가격은 variant 최소가 기준으로 표시

## 14-1. 카드 기본 정보

카드에는 아래 정보가 우선적으로 보여야 한다.

1. 제품 이미지
2. 제품명
3. 짧은 설명 또는 사용감
4. 향 노트 또는 대표 효능
5. 가격
6. 태그 / 배지

## 14-2. 배지 시스템

- `NEW`
- `BEST`
- `SIGNATURE`
- `GIFTABLE`
- `ONLINE EXCLUSIVE`

## 14-3. 가격 표시 기준

- variant가 여러 개면 **최저가 기준**
  - 예: `39,000원부터`
- variant가 하나면 일반 가격만 표시
- 할인 판매를 핵심 전략으로 보지 않으므로,  
  기존 `원가 취소선 + 할인 가격` 구조는 우선순위를 낮춘다.

## 14-4. 메타 텍스트 기준

기존의 `category | gender` 대신 아래 조합을 쓴다.

- 향 노트
- 사용감
- 추천 이유
- 대표 효능
- 기프트 태그

## 14-5. 액션 버튼

1. `DETAILS`
   - 기본 CTA
   - 클릭 시 `/product/:id`

2. `QUICK ADD`
   - **단일 variant 제품일 때만** 바로 담기 허용
   - variant가 여러 개인 제품은 상세 또는 선택 레이어로 유도

3. `HEART`
   - 비로그인 시 로그인 유도 Alert
   - 로그인 시 찜 토글

## 14-6. 현재 기준 주의점

- **variant 1개만 존재** → Quick Add 허용
- **variant 2개 이상 존재** → Quick Add 금지, 상세 또는 선택 레이어로 유도

즉, 카드에서는 **옵션 없는 담기 금지**가 원칙이다.

---

## 15. 상품 상세 페이지 구현 기준

## 15-1. 상단 구조

- 상단 `BACK` 또는 Breadcrumb
- 좌측 큰 상품 이미지 / 갤러리
- 우측 상품 정보 박스
- Desktop에서 우측 정보는 sticky

## 15-2. 상품 정보 영역

포함 요소:

- 카테고리
- 상품명
- 가격 또는 최저가
- 제품 한 줄 설명
- 사용감
- 향
- 주요 성분
- variant 선택
- 수량 증감 버튼
- `ADD TO BASKET`
- 위시리스트 버튼
- SHARE 버튼
- 공식몰 혜택 / 선물 가능 여부 안내

## 15-3. 옵션 선택 규칙

- 제품 옵션은 `color / size`가 아니라 **variant**다.
- variant가 2개 이상이면 선택 전 장바구니 추가 불가
- variant가 1개뿐이면 기본값 자동 선택 가능
- 수량은 1 이상
- cartId는 `id-variantId` 조합

```ts
cartId = `${product.id}-${selectedVariant.id}`
```

## 15-4. 혜택 / 선물 정보 블록

상세 상단 CTA 주변에는 아래 정보가 빠르게 보여야 한다.

- 공식몰 혜택
- 선물 포장 가능 여부
- 쇼핑백 제공 여부
- 무료 샘플 / 배송 정보
- 온라인몰 한정 기프트 여부

## 15-5. Detail Tabs

탭은 아래 기준으로 구성한다.

- `DETAILS`
- `INGREDIENTS`
- `PACKAGING & RECYCLE`
- `ESSENTIAL INFO`
- `DELIVERY & RETURNS`
- `REVIEWS (n)`

## 15-6. DETAILS 탭

아래 내용을 보여준다.

- 제품 설명
- 사용감
- 향
- 주요 성분
- 추천 대상
- 기대 효능
- 사용 방법
- 루틴 단계

## 15-7. INGREDIENTS 탭

- 전성분 표시
- 성분 안내 문구
- 민감 사용자 주의 문구 등 Seed Data 기반 안내 가능

## 15-8. PACKAGING & RECYCLE 탭

아래 정보를 담는다.

- 패키징 요약
- 재활용 가능한 구성품
- 분리 배출 가이드
- 리필 옵션의 의미
- 지속가능성 관련 메모

## 15-9. ESSENTIAL INFO / DELIVERY 탭

`ESSENTIAL INFO`에는 아래를 보여준다.

- 제조국
- 용량
- 사용기한
- 보관 시 주의사항
- 상품 필수 표기 정보

`DELIVERY & RETURNS`에는 아래를 보여준다.

- 배송 기준
- 반품 정책 요약
- 무료 배송 조건
- 문의 채널 진입 버튼

## 15-10. REVIEWS 탭

구성:

- 평균 평점 숫자
- 별점 시각화
- 리뷰 개수
- 리뷰 작성 폼
- 리뷰 목록

리뷰 작성 규칙:

- 비로그인: “회원만 리뷰 작성 가능 / 로그인하러 가기” 문구 노출
- 로그인: 별점 + textarea + POST REVIEW 버튼
- 작성 후 SweetAlert 성공

리뷰 목록 규칙:

- 사용자명은 **앞 3글자 이후 마스킹**
- 로그인 유저가 본인 리뷰일 때만 Edit / Delete 노출
- 수정 시 inline edit mode
- 삭제 시 확인 Alert

## 15-11. 함께 쓰기 좋은 제품 섹션

단순히 같은 카테고리만 묶기보다, 아래 기준을 우선한다.

1. 같은 리추얼 안에서 함께 쓰기 좋은 제품
2. 같은 향 계열의 제품
3. 같은 고민 해결에 도움이 되는 제품
4. 선물 세트로 함께 구성하기 좋은 제품

노출 기준:

- 최대 10개
- Swiper 또는 가로 스크롤
- breakpoints
  - 320: 1.5개
  - 768: 2.5개
  - 1024+: 4개

---

## 16. 장바구니 페이지 구현 기준

## 16-1. 핵심 동작

- 최초 진입 시 `getSanitizedCart()` 실행
- 기존 cartId 없는 데이터가 있으면 보정
- 진입 즉시 전체 상품 선택 상태로 시작

## 16-2. UI 구성

- 좌측: 장바구니 리스트
- 우측: 주문 요약 사이드바 (sticky)

리스트 요소:

- 체크박스
- 상품 이미지
- 상품명
- category / subcategory
- 선택 variant
- 가격
- 수량 증감
- 개별 삭제 버튼

상단 선택 바:

- 전체 선택 체크박스
- `전체 선택 (선택수/전체수)` 표시

하단 액션:

- 선택 상품 삭제
- 장바구니 비우기

보조 정보:

- 선물 가능 제품 여부
- 공식몰 혜택 안내
- 무료 배송 기준
- 샘플 / 쇼핑백 / 선물 포장 안내 문구

## 16-3. 금액 계산 규칙

- 선택된 상품만 금액 계산
- 가격은 `selectedVariant.price`
- 상품 총액은 `unitPrice * quantity`
- 10만원 이상 무료배송
- 미만이면 3,000원

## 16-4. 주문 버튼

- `선택 상품 주문하기`
- `전체 상품 주문하기`

이동 방식:

```ts
navigate('/checkout', {
  state: {
    selectedIds: [...]
  }
})
```

## 16-5. 빈 장바구니 상태

구성:

- 아이콘 또는 일러스트
- `장바구니가 비어 있습니다.`
- `제품 둘러보기` 버튼
- `선물 가이드 보기` 버튼

이동 경로:

- 기본 CTA: `/products`
- 보조 CTA: `/gift-guide`

## 16-6. 현재 기준 주의점

기존 `옵션: Black / M` 형태의 표기는 제거한다.

이번 리뉴얼에서는 아래 형식을 사용한다.

- `Variant: 75mL`
- `Variant: 500mL`
- `Variant: 500mL 리필`
- `Variant: 핸드&바디 케어 키트`

---

## 17. 결제 페이지 구현 기준

## 17-1. 진입 규칙

- 결제 페이지는 로그인 사용자만 진입 가능하게 한다.
- 비로그인 상태에서 진입 시 SweetAlert로 로그인 필요 안내 후 `/login`으로 이동한다.
- `location.state?.selectedIds` 를 받는다.
- 값이 있으면 선택 상품만 주문 리스트로 노출
- 값이 없으면 전체 cartItems 사용
- 주문할 상품이 없으면 `/cart`로 돌려보낸다.

## 17-2. 배송지 정보 폼

필드:

- 수령인
- 연락처
- 우편번호
- 기본 주소
- 상세 주소
- 배송 메모

추가 옵션:

- 주문자 정보와 동일
- 기본 배송지로 저장

주소 검색:

- `react-daum-postcode` 모달 사용
- 선택 완료 시 우편번호 + 기본 주소 자동 반영

## 17-3. 선물 옵션

결제 페이지에는 별도의 Gift Info 블록을 둔다.

필드:

- 선물 포장 여부
- 쇼핑백 포함 여부
- 메시지 카드 입력
- 선물 주문 여부

```ts
giftInfo: {
  isGiftOrder: boolean;
  giftWrap: boolean;
  shoppingBag: boolean;
  message: string;
}
```

## 17-4. 결제 수단

- `신용카드`
- `무통장 입금`

신용카드 선택 시:

- 현대카드
- 삼성카드
- KB국민카드
- 신한카드

무통장 선택 시:

- 계좌번호 안내 문구
- 예금주 안내
- 24시간 내 입금 안내 노트

## 17-5. 주문 요약

오른쪽 사이드바에 표시:

- 주문 상품 썸네일 / 이름 / variant / 수량 / 가격
- 상품 금액
- 배송비
- 총 결제 금액
- 선물 옵션 요약
- 공식몰 혜택 요약
- `결제하기` 버튼

추가로 보여주면 좋은 정보:

- 무료 샘플 제공 여부
- 선물 포장 포함 여부
- 도착 예정일 안내
- 고객지원 바로가기

## 17-6. 결제 완료 처리

검증:

- 수령인 / 연락처 / 주소 필수
- 카드 결제면 카드 선택 필수
- 선택된 주문 상품 1개 이상 필수

결제 성공 시:

1. `newOrder` 생성
2. `addOrder(newOrder)`
3. 주문한 상품만 장바구니에서 삭제
4. 기본 배송지 저장 체크 시 `updateUserAddress()` 반영 가능
5. `/mypage?tab=orders` 또는 `/mypage` 이동

---

## 18. 인증 페이지 구현 기준

## 18-1. 로그인

구성:

- E-MAIL
- PASSWORD
- LOG IN 버튼
- `임시 회원 (테스트용)` 버튼
- `Find Account`
- `JOIN NOW`

동작:

- `login(credentials)` 호출
- 성공 시 이전 페이지 또는 홈 이동
- 실패 시 `error` 문구 표시

테스트 회원 버튼:

- 입력칸에 아래 값 자동 채움
  - `test@aesoprenewal.com`
  - `testpassword123`
- `loginAsTestUser(true)` 로 계정이 없으면 먼저 등록만 해둠

## 18-2. 회원가입

구성:

- NAME
- E-MAIL
- PASSWORD
- CONFIRM PASSWORD
- CREATE ACCOUNT

동작:

- 비밀번호 불일치 시 Alert
- 이메일 중복 시 store error 표시
- 성공 시 성공 Alert 후 `/login` 이동

## 18-3. 계정 찾기

탭 구조:

- FIND ID
- FIND PASSWORD

### ID 찾기

- 이름 + 전화번호 입력
- 일치하면 이메일을 SweetAlert로 표시

### PASSWORD 찾기

1. 이메일 + 이름 검증
2. 성공 시 새 비밀번호 입력 폼으로 전환
3. 새 비밀번호 / 확인 입력
4. 일치하면 `resetPassword`
5. 성공 후 로그인 페이지 이동

---

## 19. 마이페이지 구현 기준

## 19-1. 접근 가드

- 비로그인 시 SweetAlert 경고 후 `/login` 이동
- 로그인 전에는 빈 화면 반환

## 19-2. 기본 레이아웃

- 좌측 사이드바 메뉴
- 우측 콘텐츠 패널
- 상단 환영 배너

사이드바 메뉴 그룹:

- 쇼핑 관리
  - 주문내역
  - 저장한 제품
- 나의 활동
  - 리뷰 관리
  - 문의 / Q&A
- 계정 관리
  - 회원 정보
  - 배송지 관리
  - 로그아웃
- 고객지원 바로가기
  - FAQ
  - 공지사항

## 19-3. 주문내역 탭

- `getUserOrders(user.id)` 사용
- 최신 주문이 위로 오도록 reverse
- 카드 UI에 아래 정보 표시
  - 주문일
  - 주문번호
  - 대표 상품 썸네일
  - 상품명 (+ 외 n건)
  - 총 결제 금액
  - 상태
  - 선택한 variant
  - 선물 여부
- `재구매` CTA 제공 가능

## 19-4. 저장한 제품 탭

- `getUserWishlist(user.id)` 결과를 제품 카드 grid로 렌더링
- 없으면 empty state
- 타이틀은 “관심 상품”보다 **저장한 제품 / 다시 보고 싶은 제품**으로 노출 가능

## 19-5. 회원 정보 수정 탭

- 이름 / 이메일은 readOnly
- 연락처 수정 가능
- 비밀번호 수정 버튼은 별도 탭 또는 향후 확장 가능
- 현재 MVP에서는 기본 정보 확인 + 간단한 수정에 집중한다.

## 19-6. 배송지 관리 탭

상태:

- 조회 모드
- 수정/등록 모드

기능:

- 기본 배송지 카드 표시
- 수정 버튼 클릭 시 폼 전환
- 수령인, 연락처, 우편번호, 기본 주소, 상세 주소 입력
- 우편번호 찾기는 DaumPostcode 모달 사용
- 저장 시 `updateUserAddress(user.id, shippingInfo)` 호출

## 19-7. 리뷰 관리 탭

- `getUserReviews(user.id)` 사용
- 상품 썸네일 / 상품명 표시
- 상품 클릭 시 상세 페이지 이동
- 리뷰 수정 / 삭제 가능
- 수정 시 별점 + textarea inline edit

## 19-8. 문의 / Q&A 탭

- 리스트 / 작성 폼 2상태
- `react-quill-new` 사용
- 내 문의 목록: `getUserInquiries(user.id)`
- 내 Q&A 목록: `getUserQnas(user.id)`
- 작성 / 수정 / 삭제 모두 가능
- 삭제 시 SweetAlert confirm

## 19-9. FAQ 탭

- 마이페이지 내부 FAQ는 **간단한 텍스트 리스트 요약형**
- 전체 고객지원 페이지로 이동하는 CTA 제공 가능

## 19-10. 공지사항 탭

- 마이페이지 내부 공지사항도 **간단한 텍스트 리스트 요약형**
- 자세히 보기 클릭 시 `/support/notices` 이동 가능

---

## 20. 고객센터(Support) 페이지 구현 기준

## 20-1. Notice 페이지

- `fetchNotices()` 로 Seed Data 로드
- 테이블 형태
- 컬럼:
  - No.
  - Title
  - Date
- title 앞에 `[category]` 노출

## 20-2. FAQ 페이지

- `fetchFAQs(currentCat)` 사용
- 카테고리 버튼:
  - All
  - 주문
  - 배송
  - 제품
  - 선물
  - 회원정보
- 클릭 시 필터링
- 아코디언 열고 닫기 가능
- 열릴 때 부드러운 transition

## 20-3. Contact 페이지

- 고객지원용 문의 폼
- 필드:
  - TYPE select
  - TITLE input
  - CONTENT textarea 또는 ReactQuill
- 문의 유형 예시:
  - 주문
  - 배송
  - 제품
  - 선물
  - 기타
- 제출 성공/실패 Alert

## 20-4. Live Chat / Store Locator 보조 진입

- `실시간 상담`은 별도 지원 페이지 또는 외부 연결 placeholder로 구현 가능
- `매장 찾기`는 매장 리스트 또는 지도 placeholder 페이지로 구현 가능
- Support 영역 상단에 빠른 진입 버튼으로 함께 노출하면 좋다.

---

## 21. 폴더 구조 기준

```bash
src/
  assets/
    data/
      productData.js
      supportData.js
      giftGuideData.js
  common/
    footer/
      index.jsx
    header/
      index.jsx
      NavBar.jsx
      MegaMenu.jsx
      MobileMenu.jsx
      SearchModal.jsx
      SearchModal.scss
    Layout.jsx
  components/
    product/
      ProductItem.jsx
      ProductList.jsx
      ProductFilters.jsx
      VariantSelector.jsx
      ProductBadges.jsx
    ui/
      Button.jsx
      Badge.jsx
      EmptyState.jsx
      SectionHeader.jsx
      PriceDisplay.jsx
  pages/
    home/
      components/
        HeroVideo.jsx
        QuickIntentEntry.jsx
        BenefitsSection.jsx
        GiftConfidence.jsx
        RitualNavigator.jsx
        RecommendedSection.jsx
        BrandValueSection.jsx
        StoreContinuity.jsx
      index.jsx
      style.scss
    gift-guide/
      index.jsx
      GeneralGiftGuide.jsx
      FragranceGuide.jsx
      style.scss
    products/
      index.jsx
      ProductDetail.jsx
      style.scss
      detail.scss
    benefits/
      index.jsx
      OfficialBenefits.jsx
      KRExclusiveBenefits.jsx
      style.scss
    our-story/
      index.jsx
      style.scss
    support/
      Notice.jsx
      FAQ.jsx
      Contact.jsx
      LiveChat.jsx
      StoreLocator.jsx
      style.scss
    cart/
      index.jsx
      style.scss
    checkout/
      index.jsx
      style.scss
    login/
      index.jsx
      Signup.jsx
      FindAccount.jsx
      style.scss
    mypage/
      index.jsx
      style.scss
  store/
    slices/
      authSlice.js
      productSlice.js
      cartSlice.js
      orderSlice.js
      supportSlice.js
      wishlistSlice.js
    useStore.js
  styles/
    base/
      _reset.scss
      _default.scss
      _fonts.scss
    components/
      _product.scss
      _badge.scss
      _button.scss
      _form.scss
    layout/
      _header.scss
      _footer.scss
      _main.scss
    pages/
      _home.scss
      _products.scss
      _detail.scss
      _cart.scss
      _checkout.scss
      _support.scss
      _mypage.scss
    utils/
      _media.scss
      _palette.scss
      _typography.scss
      _spacing.scss
    _swal.scss
    index.scss
  main.jsx
```

---

## 22. 바이브 코딩 구현 순서 추천

### 1단계

- Vite + React + Router + Zustand + SCSS 세팅
- 전역 스타일, 색상 토큰, 폰트, 반응형 믹스인, `.inner`, Header/Footer/Layout 먼저 완성

### 2단계

- `productData.js`, `supportData.js`, `giftGuideData.js` Seed Data 만들기
- `useStore.js` + 각 Slice 생성
- LocalStorage persist 연동

### 3단계

- Home / Header transparent-solid 전환 / Search Modal / MegaMenu / Mobile Menu 구현
- `/`, `/gift-guide`, `/benefits`, `/our-story` 흐름 연결

### 4단계

- `/products`, `/products/:category`, `/products/:category/:subcategory` 목록 구현
- 필터 / 정렬 / 검색 결과 연결

### 5단계

- ProductDetail 구현
- variant 선택, 리뷰 CRUD, related products, wishlist 연동

### 6단계

- Cart / Checkout 구현
- 선택 주문 / 전체 주문 / giftInfo / 주문 저장 연결

### 7단계

- Login / Signup / FindAccount 구현
- 테스트 회원 플로우 연결

### 8단계

- MyPage 전체 탭 구현
- 주문 / 저장한 제품 / 배송지 / 리뷰 / 문의 연결

### 9단계

- Notice / FAQ / Contact / LiveChat / StoreLocator 마무리
- SweetAlert 커스텀 / 모바일 UI 보정

---

## 23. AI에 바로 넣기 좋은 바이브 코딩 프롬프트

## 23-1. 전체 프로젝트 시작 프롬프트

```txt
React 19 + Vite + react-router-dom + Zustand + SCSS로 Aesop 계열의 라이프스타일 이커머스 프론트엔드 프로젝트를 만들어줘.
백엔드는 붙이지 말고 모든 데이터는 seed data + Zustand + localStorage persist로 처리해.
localStorage persist key는 ff-storage로 하고, 검색 최근어는 recentSearches로 별도 저장해.
한글 폰트는 SUIT Variable, 영문 헤드라인은 Montage, 영문 보조 타이포는 Optima를 사용해.
컬러는 warm beige / brown / ivory 계열로 구성하고, hero 구간에서는 transparent header, 그 외 구간에서는 solid header로 전환되게 해줘.
라우트는 /, /gift-guide, /gift-guide/general, /gift-guide/fragrance, /products, /products/:category, /products/:category/:subcategory, /benefits, /benefits/official, /benefits/kr-exclusive, /our-story, /search, /login, /signup, /find-account, /mypage, /cart, /checkout, /product/:id, /support/notices, /support/faq, /support/contact, /support/live-chat, /support/store-locator 를 만들어줘.
먼저 전역 스타일 토큰, layout, header, footer, 라우터, store 뼈대부터 만들어줘.
```

## 23-2. Header / Home 프롬프트

```txt
Header와 Home 화면을 만들어줘.
Header는 좌측 GNB(GIFT GUIDE / PRODUCTS / BENEFITS / OUR STORY), 중앙 로고, 우측 Search / Account / Cart 구조야.
Home Hero는 영상 배경이고 Header가 처음에는 transparent 상태로 Hero 위에 겹쳐졌다가, Hero를 지나면 solid 상태로 전환돼야 해.
Products는 메가메뉴 구조, 모바일에서는 전체 화면 메뉴와 아코디언 구조로 구현해줘.
홈에는 Quick Intent Entry, 공식몰 혜택 섹션, Gift Confidence, Ritual Navigator, Recommended Products, Brand Value, Store Continuity 섹션까지 구현해줘.
```

## 23-3. 상품 목록 / 상세 프롬프트

```txt
상품 목록과 상품 상세를 만들어줘.
상품은 패션몰 구조가 아니라 variant, 향, 사용감, 주요 성분, 패키징 정보 중심 구조야.
목록 페이지는 /products, /products/:category, /products/:category/:subcategory 경로에 따라 필터가 자동 적용되게 하고,
필터는 카테고리, 서브카테고리, 고민, 향 계열, 선물 태그, 가격대 기준으로 구성해줘.
상품 카드는 BEST / SIGNATURE / GIFTABLE / ONLINE EXCLUSIVE 배지, variant 최저가, 향/사용감/추천 이유가 보여야 해.
상세 페이지는 좌측 갤러리, 우측 sticky 정보 영역, variant 선택, 수량 변경, add to basket, wishlist, share, details/ingredients/packaging/reviews 탭, 리뷰 CRUD, related products까지 구현해줘.
카드에서는 variant가 1개인 제품만 Quick Add를 허용하고, variant가 여러 개면 상세로 유도해줘.
```

## 23-4. 장바구니 / 결제 프롬프트

```txt
장바구니와 결제 페이지를 만들어줘.
장바구니는 product id + selectedVariant.id 조합으로 cartId를 만들고,
전체 선택, 개별 선택, 선택 삭제, 전체 비우기, 수량 변경, 선택 상품 주문하기, 전체 상품 주문하기가 가능해야 해.
결제 페이지는 로그인 사용자만 진입 가능하게 하고,
배송지 입력, react-daum-postcode 주소 검색, giftInfo(선물 포장 / 쇼핑백 / 메시지), 카드/무통장 결제 선택, 주문 요약 사이드바, 결제 완료 후 order 저장과 장바구니 삭제까지 연결해줘.
```

## 23-5. 로그인 / 마이페이지 / 고객지원 프롬프트

```txt
로그인, 회원가입, 계정찾기, 마이페이지, 고객지원 페이지를 만들어줘.
Zustand authSlice로 users, user, isLoggedIn, error를 관리하고,
로그인 실패 시 에러 문구를 보여줘.
임시 회원 시작 버튼을 만들어서 test@aesoprenewal.com / testpassword123 을 자동 입력하고,
계정이 없으면 먼저 스토어에 등록만 해두게 해줘.
마이페이지는 주문내역, 저장한 제품, 리뷰 관리, 문의/Q&A, 회원 정보, 배송지 관리 탭이 있어야 해.
문의/Q&A 작성/수정 폼은 react-quill-new로 만들고,
고객지원 페이지는 Notice / FAQ / Contact / LiveChat / StoreLocator 구조로 구현해줘.
```

## 23-6. 폴리싱 프롬프트

```txt
전체 프로젝트를 절제된 프리미엄 라이프스타일 브랜드 UI로 폴리싱해줘.
한글 폰트는 SUIT Variable, 영문 헤드라인은 Montage, 영문 보조 타이포는 Optima를 사용해.
컬러는 warm beige / brown / ivory 계열을 중심으로 구성하고,
기본 팔레트는 #f1efec, #d5cec5, #c0b6a9, #a49582, #928169, #776144, #6c583e, #544530, #413525, #32291d, #fffbf3,
배경 컬러는 #EEE5DA, 상품 영역 배경은 #DECBBC를 사용해.
추가 포인트 컬러로 #EFAE97, #A3B18A, #776144 을 사용하되 과하게 쓰지 말고,
cart badge, 혜택 태그, 상태 강조에만 제한적으로 사용해.
header는 hero 구간에서 transparent, 그 외 구간에서는 solid 상태로 전환되게 하고,
product grid는 desktop 4열 / tablet 3열 / mobile 2열,
cart summary와 product detail info는 desktop에서 sticky,
버튼과 카드, 폼은 과한 둥근 모서리 없이 정제된 반경과 얇은 보더를 사용해.
전체 무드는 조용하고 따뜻하며 감각적인 프리미엄 톤으로 맞춰줘.
```

---

## 24. 정의된 완료 기준 (Definition of Done)

### 24-1. 화면

- [ ] Home 첫 화면에서 Header가 투명하게 Hero 위에 겹친다.
- [ ] Hero를 지나면 Header가 배경 있는 상태로 전환된다.
- [ ] 내부 페이지에서는 Header가 기본적으로 배경 있는 상태다.
- [ ] Header가 좌측 GNB / 중앙 로고 / 우측 유틸 구조로 보인다.
- [ ] Desktop에서 1차 메뉴가 사진과 같은 균형 구조를 가진다.
- [ ] Products 메뉴는 2depth / 3depth 구조를 가진다.
- [ ] Home Hero가 영상 배경과 자연스럽게 연결된다.
- [ ] 상품 카드가 제품 중심 비율의 정제된 카드다.
- [ ] 상세 페이지가 좌우 2컬럼 + sticky info 구조다.
- [ ] 장바구니/결제 요약이 우측 sticky 사이드바다.
- [ ] 마이페이지가 좌측 메뉴 + 우측 패널 구조다.

### 24-2. 기능

- [ ] 앱 시작 시 상품 Seed Data가 스토어에 들어간다.
- [ ] 검색어로 상품 검색이 된다.
- [ ] 최근 검색어가 최대 5개 저장된다.
- [ ] 찜하기 토글이 된다.
- [ ] 리뷰 작성/수정/삭제가 된다.
- [ ] 문의/Q&A 작성/수정/삭제가 된다.
- [ ] 장바구니에 variant 조합 기준으로 담긴다.
- [ ] 선택 주문 / 전체 주문이 된다.
- [ ] 주문 후 장바구니에서 해당 상품만 제거된다.
- [ ] 결제 시 giftInfo를 저장할 수 있다.
- [ ] 마이페이지에서 내 주문 / 저장한 제품 / 리뷰 / 문의를 볼 수 있다.
- [ ] Home에서 Header 상태가 스크롤에 따라 전환된다.

### 24-3. 영속성

- [ ] 새로고침 후 로그인 상태가 유지된다.
- [ ] 새로고침 후 장바구니가 유지된다.
- [ ] 새로고침 후 위시리스트가 유지된다.
- [ ] 새로고침 후 주문 내역이 유지된다.
- [ ] 새로고침 후 내가 쓴 리뷰/Q&A/문의가 유지된다.

### 24-4. 반응형

- [ ] 모바일에서 Header 높이와 메뉴 구조가 달라진다.
- [ ] Product Grid가 2열로 줄어든다.
- [ ] 상세 페이지가 1열로 떨어진다.
- [ ] Footer가 세로 스택으로 바뀐다.
- [ ] 장바구니/결제 UI가 모바일에서도 읽기 쉬운 구조다.
- [ ] 모바일 메뉴가 전체 화면 오버레이로 동작한다.
- [ ] 모바일 검색 레이어가 별도 구조로 자연스럽게 열린다.

---

## 25. 약점과 보완 포인트

### 25-1. 메가메뉴 복잡도

- `PRODUCTS`는 2depth / 3depth 구조가 깊다.
- 선택지:
  - 전체를 한 번에 노출
  - 카테고리별 column 정리
  - 모바일에서는 단계형 아코디언으로 단순화

### 25-2. 카드 Quick Add의 variant 문제

- variant가 여러 개인 제품을 카드에서 바로 담기하면 잘못된 cart item이 생길 수 있다.
- 권장 보완:
  - 카드에서는 single variant만 Quick Add 허용
  - 나머지는 상세 또는 선택 레이어로 유도

### 25-3. 기프트 가이드 데이터 깊이

- gift guide는 단순 배너가 아니라 **상황 / 가격 / 상대 / 향 / 포장 여부** 기준 추천이 들어가야 설득력이 생긴다.
- 초반에는 Seed Data를 단순화하되, 추후 큐레이션 로직 확장 가능

### 25-4. 검색 UX의 품질

- 검색이 단순 제품명 매칭만 되면 부족할 수 있다.
- 추후 보완:
  - 향 노트 검색
  - 고민/효능 검색
  - 인기 검색어
  - 최근 본 제품 연동

### 25-5. Live Chat / Store Locator

- 현재는 placeholder 또는 내부 더미 구조로 구현 가능
- 실제 연동이 없다면 UI의 정교함보다 **정보 구조와 진입 UX**를 우선 구현

### 25-6. Share 버튼

- UI만 있고 실제 공유 액션이 없을 수 있다.
- `navigator.share` 또는 URL copy로 보완 가능

### 25-7. 회원 정보 수정 범위

- MVP에서는 회원 정보 수정이 제한적일 수 있다.
- 포트폴리오 완성도를 높이려면 추후 비밀번호 변경, 최근 배송지 관리까지 확장 가능

---

## 26. 최종 정리

이 프로젝트를 잘 재현하려면 아래 순서를 기억하면 된다.

1. **브랜드 무드**를 먼저 맞춘다.  
   웜 뉴트럴 컬러, 큰 여백, 얇은 선, 절제된 타이포가 먼저다.

2. **레이아웃과 탐색 구조**를 맞춘다.  
   Transparent Header → Hero → Quick Intent → Product List → Detail → Cart → Checkout → MyPage 흐름이 자연스럽게 이어져야 한다.

3. **상태와 영속성**을 맞춘다.  
   이 프로젝트의 강점은 예쁜 UI보다도, 상태가 새로고침 후에도 유지되는 실제 상호작용에 있다.

4. **선물 UX와 리추얼 UX**를 함께 구현한다.  
   자기 사용 고객과 선물 고객이 모두 빠르게 목적을 달성할 수 있어야 한다.

5. **반응형과 디테일**로 마무리한다.  
   모바일 메뉴, sticky 영역, 검색 레이어, variant 선택, toast, alert, review edit mode, giftInfo 같은 요소가 결과물의 완성도를 크게 올린다.
