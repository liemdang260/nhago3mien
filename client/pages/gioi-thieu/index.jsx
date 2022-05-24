import Link from 'next/link';
import Image from 'next/image';
import NewsWrapper from 'components/common/NewsWrapper';
import ConstructionSteps from 'components/common/ConstructionSteps';

const Introduction = () => {
    return (
        <NewsWrapper pathname={{ title: 'Giới Thiệu', link: '/gioi-thieu' }}>
            <h2 className='font-bold text-xl text-primary-color'>
                Quy trình phát triển một dự án
            </h2>
            <br />
            <div className='border-2 p-3 text-sm'>
                <p className='text-base'>Các Công đoạn triển khai Công trình</p>
                <ConstructionSteps />
            </div>
        </NewsWrapper>
    );
};

export default Introduction;
