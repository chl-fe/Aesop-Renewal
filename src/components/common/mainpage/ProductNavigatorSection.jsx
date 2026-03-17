import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductNavigatorSection.scss';

gsap.registerPlugin(ScrollTrigger);

// 임의의 배경 이미지 데이터 배열
const CATEGORY_DATA = [
    {
        id: 'skincare',
        label: 'Skincare',
        link: '/products/skincare',
        bgImage: 'https://images.unsplash.com/photo-1615397323136-22e6c43c1b69?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 'body',
        label: 'Hand · Body',
        link: '/products/body',
        bgImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 'fragrance',
        label: 'Perfume',
        link: '/products/fragrance',
        bgImage: 'https://images.unsplash.com/photo-1595425970377-c9703d7408f9?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 'home',
        label: 'Home · Living',
        link: '/products/home',
        bgImage: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 'hair',
        label: 'Hair · Shaving',
        link: '/products/hair',
        bgImage: 'https://images.unsplash.com/photo-1512496015851-a1cbf890abfc?q=80&w=1920&auto=format&fit=crop',
    },
    {
        id: 'kits',
        label: 'Kits',
        link: '/products/kits',
        bgImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1920&auto=format&fit=crop',
    },
];

const ProductNavigatorSection = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    
    // 기본 활성화 카테고리 (맨 위의 Skincare)
    const [activeIndex, setActiveIndex] = useState(0);
    const activeData = CATEGORY_DATA[activeIndex];

    // 첫 마운트 시 간단한 섹션 등장 애니메이션
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.pnav__title, .pnav__desc',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    // 배경 이미지가 바뀔 때마다 부드러운 페이드 효과
    useEffect(() => {
        gsap.fromTo(
            bgRef.current,
            { opacity: 0.6 },
            { opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
    }, [activeIndex]);

    return (
        <section className="pnav" ref={sectionRef}>
            {/* 배경 이미지 */}
            <div 
                ref={bgRef}
                className="pnav__bg" 
                style={{ backgroundImage: `url(${activeData.bgImage})` }} 
            />
            {/* 어두운 오버레이 (불투명도 80%) */}
            <div className="pnav__overlay" />

            <div className="pnav__inner">
                {/* 상단 텍스트 영역 */}
                <div className="pnav__header">
                    <h2 className="pnav__title montage-220">Product</h2>
                    <p className="pnav__desc suit-20-r">
                        피부와 손길, 향과 공간에 이르기까지, 이솝의 다양한 제품군을 천천히 살펴보세요.
                    </p>
                </div>

                {/* 중앙 하단 카테고리 네비게이션 영역 */}
                <div className="pnav__cats">
                    {/* 좌측 리스트 (전체 카테고리) */}
                    <ul className="pnav__cat-list pnav__cat-list--left">
                        {CATEGORY_DATA.map((cat, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <li key={`left-${cat.id}`} className="pnav__cat-item">
                                    {isActive && <span className="pnav__diamond pnav__diamond--left"></span>}
                                    <button 
                                        className={`optima-40 ${isActive ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* 중앙 대형 텍스트 (현재 선택된 카테고리) - Link로 상세 이동 */}
                    <div className="pnav__center">
                        <Link to={activeData.link} className="pnav__center-cat montage-100">
                            {activeData.label.replace(' · ', '')}
                        </Link>
                    </div>

                    {/* 우측 리스트 (전체 카테고리) */}
                    <ul className="pnav__cat-list pnav__cat-list--right">
                        {CATEGORY_DATA.map((cat, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <li key={`right-${cat.id}`} className="pnav__cat-item">
                                    <button 
                                        className={`optima-40 ${isActive ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {cat.label}
                                    </button>
                                    {isActive && <span className="pnav__diamond pnav__diamond--right"></span>}
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default ProductNavigatorSection;
