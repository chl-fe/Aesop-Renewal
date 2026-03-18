import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MoreWhBox from '../btn/MoreWhBox';
import bestGiftL1 from '../../../assets/BestGift_L1.png';
import bestGiftL2 from '../../../assets/BestGift_L2.png';
import bestGiftL3 from '../../../assets/BestGift_L3.png';
import bestGiftM1 from '../../../assets/BestGift_M1.png';
import bestGiftM2 from '../../../assets/BestGift_M2.png';
import bestGiftM3 from '../../../assets/BestGift_M3.png';
import bestGiftR1 from '../../../assets/BestGift_R1.png';
import bestGiftR2 from '../../../assets/BestGift_R2.png';
import bestGiftR3 from '../../../assets/BestGift_R3.png';
import './BestGiftSection.scss';

gsap.registerPlugin(ScrollTrigger);

const SLIDE_ITEMS = [
    {
        nameEng: 'Resurrection Duet',
        nameKr: '레저렉션 듀엣',
        desc: '지친 손을 깨끗하게 세정하고 영양을 공급해 부드럽게 가꿔주는 핸드 케어 세트',
        link: '/product/Resurrection%20Duet',
        images: {
            left: bestGiftL1,
            main: bestGiftM1,
            right: bestGiftR1,
        },
    },
    {
        nameEng: 'Party in the Greenhouse',
        nameKr: '파티 인 더 그린하우스',
        desc: '상쾌하고 생기 넘치는 그린 아로마를 담은 인기 아이템: 부드러운 바디 클렌저, 활력을 더하는 바디 스크럽, 영양 가득한 바디 밤',
        link: '/product/Party%20in%20the%20Greenhouse',
        images: {
            left: bestGiftL2,
            main: bestGiftM2,
            right: bestGiftR2,
        },
    },
    {
        nameEng: 'Shower Room Serenades',
        nameKr: '샤워 룸 세레나데',
        desc: '우디, 스파이시, 허브 향이 어우러진 아로마를 공유하는 부드러운 크림 타입의 바디 클렌저와 고보습 핸드 밤으로 구성된 듀오',
        link: '/product/Shower%20Room%20Serenades',
        images: {
            left: bestGiftL3,
            main: bestGiftM3,
            right: bestGiftR3,
        },
    },
];

const BestGiftSection = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (SLIDE_ITEMS.length <= 1) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SLIDE_ITEMS.length);
        }, 4200);

        return () => window.clearInterval(timer);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current.querySelectorAll(
                    '.best-gift__left, .best-gift__center, .best-gift__right'
                ),
                { opacity: 0, y: 36 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 72%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const currentItem = SLIDE_ITEMS[activeIndex];
    const currentNum = String(activeIndex + 1).padStart(2, '0');
    const totalNum = String(SLIDE_ITEMS.length).padStart(2, '0');

    return (
        <section className="best-gift" ref={sectionRef}>
            <div className="best-gift__inner">
                <div className="best-gift__left">
                    <div
                        className="best-gift__pagination"
                        aria-label={`Slide ${currentNum} of ${totalNum}`}
                    >
                        <span className="best-gift__current montage-48">{currentNum}</span>
                        <span className="best-gift__slash montage-24">/</span>
                        <span className="best-gift__total montage-24">{totalNum}</span>
                    </div>

                    <div className="best-gift__img-small">
                        {SLIDE_ITEMS.map((item, index) => (
                            <img
                                key={`left-${item.nameEng}`}
                                src={item.images.left}
                                alt={`${item.nameEng} left visual`}
                                className={`best-gift__image-layer ${activeIndex === index ? 'is-active' : ''}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="best-gift__center">
                    <div className="best-gift__img-arch">
                        {SLIDE_ITEMS.map((item, index) => (
                            <img
                                key={`main-${item.nameEng}`}
                                src={item.images.main}
                                alt={`${item.nameEng} main visual`}
                                className={`best-gift__image-layer ${activeIndex === index ? 'is-active' : ''}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="best-gift__right">
                    <div className="best-gift__img-point">
                        {SLIDE_ITEMS.map((item, index) => (
                            <img
                                key={`right-${item.nameEng}`}
                                src={item.images.right}
                                alt={`${item.nameEng} detail visual`}
                                className={`best-gift__image-layer ${activeIndex === index ? 'is-active' : ''}`}
                            />
                        ))}
                    </div>

                    <div className="best-gift__text-box" key={currentItem.nameEng}>
                        <h2 className="best-gift__title montage-48">Best Gift</h2>

                        <div className="best-gift__info">
                            <h3 className="best-gift__name-eng optima-40">{currentItem.nameEng}</h3>
                            <p className="best-gift__name-kr suit-20-r">{currentItem.nameKr}</p>
                        </div>

                        <p className="best-gift__desc suit-16-r">{currentItem.desc}</p>

                        <MoreWhBox to={currentItem.link} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestGiftSection;
