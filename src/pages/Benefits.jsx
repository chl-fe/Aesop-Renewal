import React from 'react';
import { useParams } from 'react-router-dom';
import BenefitsPageHeader from '../components/common/benefits/BenefitsPageHeader';
import './Benefits.scss';

const Benefits = ({ sub: propSub }) => {
    const { tab } = useParams();
    const sub = propSub || tab;

    return (
        <div className="benefits-page">
            <div className="benefits-page__header-space" />
            <BenefitsPageHeader activeKey={sub} />

            <div className="benefits-page__inner">
                <div className="benefits-page__content">
                    {sub === 'official' && (
                        <div className="benefits-page__section">
                            <h2 className="optima-40">공식몰 단독 혜택</h2>
                            <ul className="suit-18-r benefits-page__list">
                                <li>쨌 공식몰 전용 샘플 증정</li>
                                <li>쨌 선물 포장 및 쇼핑백 서비스</li>
                                <li>쨌 5만원 이상 무료배송</li>
                                <li>쨌 온라인 전용 기프트 구성</li>
                                <li>쨌 신제품 사전 알림</li>
                            </ul>
                        </div>
                    )}

                    {sub === 'kr-exclusive' && (
                        <div className="benefits-page__section">
                            <h2 className="optima-40">한국 단독 구성</h2>
                            <p className="suit-18-r">
                                한국 시장을 위해 특별히 기획한 이솝의 시즌 한정 구성을 만나보세요.
                                <br />
                                지속 가능성과 브랜드 철학을 담아낸 세심한 혜택 구성을 소개합니다.
                            </p>
                        </div>
                    )}

                    {!sub && (
                        <div className="benefits-page__section">
                            <p className="suit-18-r">상단 탭에서 원하는 혜택 항목을 선택해주세요.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
