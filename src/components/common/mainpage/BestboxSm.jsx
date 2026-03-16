import React from 'react';
import Best from '../badge/Best';
import New from '../badge/New';
import Exclusive from '../badge/Exclusive';
import './BestboxSm.scss';

const BestboxSm = () => {
    // products.json의 루센트 페이셜 나이트 마스크 이미지 링크 참고
    const imageUrl = "https://kr.aesop.com/dw/image/v2/AARM_PRD/on/demandware.static/-/Sites-aesop-master-catalog/default/dwd34d3c3d/images/products/SK67/4936968889721/4936968889721_1.png";

    return (
        <div className="bestboxSm">
            <div className="badges">
                <Best />
                <New />
                <Exclusive />
            </div>
            <div className="imgs">
                <img src={imageUrl} alt="Product" />
            </div>
            <p>제품명 들어가는 공간입니다.</p>
        </div>
    );
};

export default BestboxSm;
