import Link from 'next/link';
import Image from 'next/image';
import NewsWrapper from 'components/common/NewsWrapper';
import ConstructionSteps from 'components/common/ConstructionSteps';

const Introduction = () => {
    return (
        <NewsWrapper
            pathname={{
                title: 'Quy trình phát triển dự án',
                link: '/quy-trinh-phat-trien-du-an',
            }}
        >
            <h2 className='font-black py-4 text-xl text-center text-primary-color'>
                Quy trình phát triển một dự án
            </h2>
            <div className='border-2 p-3 text-sm'>
                <p className='text-lg'>Các Công đoạn triển khai Công trình</p>
                <ConstructionSteps />
            </div>
        </NewsWrapper>
    );
};

export default Introduction;

