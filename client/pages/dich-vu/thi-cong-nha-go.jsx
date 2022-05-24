import React from 'react';
import NewsWrapper from 'components/common/NewsWrapper';
import ConstructionSteps from 'components/common/ConstructionSteps';

function ThiCongNhaGo() {
    return (
        <NewsWrapper
            pathname={{
                title: 'Thi công nhà gỗ',
                link: '/dich-vu/thi-cong-nha-go',
            }}
        >
            <div className='p-5'>
                <h2 className='font-bold text-xl text-primary-color text-center'>
                    Thi công nhà gỗ
                </h2>
                <br />
                <div>
                    <p>
                        Sau khi chốt ý tưởng, thống nhất với khách hàng về thiết
                        kế, chúng tôi tiến hành các bước trong thi công bao gồm:
                    </p>
                    <ConstructionSteps />
                </div>
            </div>
        </NewsWrapper>
    );
}

export default ThiCongNhaGo;
