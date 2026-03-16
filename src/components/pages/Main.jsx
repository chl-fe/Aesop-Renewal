import React, { useState, useEffect } from 'react';
import BestboxSm from '../common/mainpage/BestboxSm';
import BestpdLg from '../common/mainpage/BestpdLg';
import More from '../common/btn/More';
import productsData from '../../data/products.json';
import './Main.scss';

const Main = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        // 컴포넌트 마운트 시 랜덤한 세 개의 제품 선택
        if (productsData && productsData.length > 0) {
            const shuffled = [...productsData].sort(() => 0.5 - Math.random());
            setRandomProducts(shuffled.slice(0, 3));
        }
    }, []);

    return (
        <main className="main">
            {/* BEST PRODUCTS Section */}
            <section className="best-products-section">
                <div className="section-header">
                    <h2>BEST PRODUCTS</h2>
                    <div className="more-btn-wrapper">
                        <More />
                    </div>
                </div>

                <div className="product-gallery">
                    {randomProducts.length === 3 && (
                        <>
                            <div className="product-box">
                                <BestboxSm product={randomProducts[0]} />
                            </div>
                            <div className="product-box lg-box">
                                <BestpdLg product={randomProducts[1]} />
                            </div>
                            <div className="product-box">
                                <BestboxSm product={randomProducts[2]} />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Main;
