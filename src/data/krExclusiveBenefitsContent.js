import configurationBodyCleanser from '../assets/Configuration_bodycleanser.png';
import configurationGiftCard from '../assets/Configuration_GiftCard.png';
import configurationHandCream from '../assets/Configuration_HandCream.png';
import configurationPerfume from '../assets/Configuration_Perfume.png';
import configurationSoap from '../assets/Configuration_soap.png';
import configurationWovenLeft from '../assets/Configuration_WovenL.png';
import configurationWovenRight from '../assets/Configuration_WovenR.png';
import giftCardBackground from '../assets/Korea Exclusive_GiftCardBG.png';
import koreaExclusiveEndBackground from '../assets/KoreaExclusive_EndBG.png';
import koreaExclusiveHeroBackground from '../assets/KoreaExclusive_MainBG.png';
import packagingMainImage from '../assets/KoreaExclusive_PackagingMain.png';
import packagingUseImageOne from '../assets/KoreaExclusive_PackagingUse1.png';
import packagingUseImageTwo from '../assets/KoreaExclusive_PackagingUse2.png';
import overviewLeftImage from '../assets/KoreaExclusive_L.png';
import overviewRightTopImage from '../assets/KoreaExclusive_R1.png';
import overviewRightBottomImage from '../assets/KoreaExclusive_R2.png';
import packagingSideView from '../assets/Gemini_Generated_Image_265ghz265ghz265g 1.png';
import packagingTopView from '../assets/cc8c57de-8599-450d-9bfd-0677252d2955-2026-03-13 2 1.png';
import packagingFrontView from '../assets/product보자기-누끼 2.png';

export const krExclusiveBenefitsContent = {
    hero: {
        eyebrow: '결: 한국의 유산',
        englishLabel: 'Woven Heritage',
        titleLines: ['Korea', 'Exclusive'],
        backgroundSrc: koreaExclusiveEndBackground,
    },
    configuration: {
        title: 'Configuration',
        description: [
            '한국의 미감과 이솝의 무드를 하나의 구성 안에 담아낸 한국 온라인몰 단독 기획으로,',
            '한국의 정서를 담은 쑥과 흑임자의 향, 그리고 정성그럽게 구성된 패키지 경험을 만나볼 수 있습니다.',
        ],
        items: [
            {
                key: 'body-wash',
                label: '바디워시',
                nodeId: '746:2061',
                frames: [
                    {
                        key: 'product',
                        src: configurationBodyCleanser,
                        alt: '바디워시 제품 이미지',
                    },
                ],
            },
            {
                key: 'fragrance',
                label: '향수',
                nodeId: '746:2060',
                frames: [
                    {
                        key: 'product',
                        src: configurationPerfume,
                        alt: '향수 제품 이미지',
                    },
                ],
            },
            {
                key: 'body-soap',
                label: '바디솝',
                nodeId: '746:2057',
                frames: [
                    {
                        key: 'product',
                        src: configurationSoap,
                        alt: '바디솝 제품 이미지',
                    },
                ],
            },
            {
                key: 'hand-balm',
                label: '핸드밤',
                nodeId: '746:2062',
                frames: [
                    {
                        key: 'product',
                        src: configurationHandCream,
                        alt: '핸드밤 제품 이미지',
                    },
                ],
            },
            {
                key: 'gift-card',
                label: '기프트카드 (선택)',
                nodeId: '746:2063',
                frames: [
                    {
                        key: 'product',
                        src: configurationGiftCard,
                        alt: '기프트카드 이미지',
                    },
                ],
            },
        ],
    },
    heritage: {
        title: 'Woven Heritage',
        description: [
            '이른 새벽 안개 낀 숲을 거니는 듯한 쑥의 쌉싸름하고 청량한 흙내음이 흩어진 감각을 맑게 깨우고,',
            '그 사이에서 피어오르는 흑임자의 짙고 고요한 잔향이 피부 위를 따뜻하게 감싸 안으며 깊은 안도감을 부여합니다.',
            '바쁘게 흘러가는 시간 속에서, 자연이 일궈낸 고유한 향취를 통해 온전한 나를 마주하는 고요한 의식(Ritual)으로 여러분을 초대합니다.',
        ],
        leftImage: {
            src: configurationWovenLeft,
            alt: '웅장한 향수 병 이미지',
        },
        rightImage: {
            src: configurationWovenRight,
            alt: '쑥과 흑임자 원료 이미지',
            quoteLines: [
                '오랜 세월 한국의 땅과 바람을 묵묵히 견뎌낸 쑥의 푸른 생명력,',
                '그리고 대지의 기운을 온전히 응축한 흑임자의 묵직한 지혜',
            ],
        },
    },
    giftCard: {
        title: 'Gift Card',
        description: [
            '섬세한 선으로 그려낸 전통 궁궐의 위엄 있는 자태,',
            '그리고 그 가장자리에 새겨진 단청의 아름다움.',
            '이번 기프트 카드는 여백의 미를 살린 고요한 배경 위 한국 고유 색채를 얹어, 절제되면서도 한국적인 기품 있는 미학을 완성했습니다.',
        ],
        tipTitle: '[Gifting Tip]',
        tips: [
            '명절이나 특별한 기념일, 혹은 한국의 아름다움과 쉼을 전하고 싶은 소중한 분께 이 특별한 카드를 함께 건네어 보세요.',
            '뒷면의 여백 위 정성스레 남긴 한 줄의 메시지는 선물에 깊은 여운을 더해줍니다.',
        ],
        backgroundSrc: giftCardBackground,
    },
    packaging: {
        title: 'Packaging',
        description: [
            '한 번 사용하고 버려지는 것 대신 간직되는 것을 택했습니다.',
            '보자기의 유연한 재사용성은 이솝이 추구하는 지속 가능성과 맞닿아 있습니다.',
        ],
        views: [
            {
                key: 'side',
                label: '옆모습',
                src: packagingSideView,
                alt: '패키지 옆모습 이미지',
                nodeId: '746:2098',
            },
            {
                key: 'front',
                label: '정면',
                src: packagingFrontView,
                alt: '패키지 정면 이미지',
                nodeId: '746:2097',
            },
            {
                key: 'top',
                label: '윗모습',
                src: packagingTopView,
                alt: '패키지 윗모습 이미지',
                nodeId: '746:2099',
            },
        ],
        gallery: {
            featured: {
                src: packagingMainImage,
                alt: '보자기 패키지 메인 이미지',
                nodeId: '746:2110',
            },
            detailTop: {
                src: packagingUseImageOne,
                alt: '꽃병으로 재사용한 보자기 패키지 이미지',
                nodeId: '746:2104',
            },
            detailBottom: {
                src: packagingUseImageTwo,
                alt: '장바구니처럼 활용한 보자기 패키지 이미지',
                nodeId: '746:2107',
            },
        },
    },
    overview: {
        eyebrow: '결: 한국의 유산',
        englishLabel: 'Woven Heritage',
        title: 'Korea Exclusive',
        description:
            '시대를 초월하는 전통의 미학과 식물학적 지혜가 만나 고요한 감각의 여정을 선사합니다. 정성스레 묶어낸 보자기의 질감, 단청의 위엄을 담은 카드에 적힌 다정한 문장, 그리고 쑥과 흑임자가 빚어내는 대지의 향취까지. 이 세심한 컬렉션은 소중한 이의 지친 일상에 자연의 평온과 깊은 안도감을 선물합니다.',
        collage: [
            {
                key: 'top-right',
                src: overviewRightTopImage,
                alt: '기프트카드 이미지',
                nodeId: '746:2085',
            },
            {
                key: 'bottom-right',
                src: overviewRightBottomImage,
                alt: '디지털 화면 속 제품 이미지',
                nodeId: '746:2083',
            },
            {
                key: 'bottom-left',
                src: overviewLeftImage,
                alt: '패키지와 제품 구성 이미지',
                nodeId: '746:2088',
            },
        ],
    },
    outro: {
        backgroundSrc: koreaExclusiveHeroBackground,
        alt: '한국 익스클루시브 세트 이미지',
        nodeId: '754:2138',
    },
};
