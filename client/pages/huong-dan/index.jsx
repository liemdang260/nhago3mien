import { useState, useEffect } from 'react';
import NewsWrapper from 'components/common/NewsWrapper';
import NewsCard from 'components/common/NewsCard';
import { useRouter } from 'next/router';

const data = [
    {
        id: 1,
        title: 'Hướng dẫn đặt hàng',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Hướng dẫn',
        description:
            'Bạn đang ấp ủ ước mơ về một ngôi nhà đẹp, bạn đang loay hoay tìm một đơn vị có thể giúp bạn hiện thực hóa những giấc mơ? Hãy liên hệ nhà gỗ Ba Miền ( Hệ thống nội thất Anphuco ),..',
    },
    {
        id: 2,
        title: 'Hướng dẫn thanh toán',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/huongdanthanhtoan/thanh-toan-bang-tien-mat-350x250.jpg',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Hướng dẫn',
        description:
            'Trong văn hóa tín ngưỡng của người Việt, thờ cúng tổ tiên có vai trò đặt biệt quan trọng. Chúng ta khi hiểu được rằng mình từ đâu mà ra, mình nhờ ai mà có, mình sống vì mục đích gì thì khả năng sống và làm việc càng trở nên mạnh mẽ!..',
    },
];
const AllGuides = () => {
    const { pathname } = useRouter();
    const [landingIndex, setLandingIndex] = useState(0);
    const [landingVisionIndex, setLandingVisionIndex] = useState(0);
    const handleLandingIndex = (index) => {
        setLandingIndex(index);
    };
    const handleLandingVision = (action) => {
        setLandingVisionIndex(landingVisionIndex + action);
    };
    useEffect(() => {
        setLandingIndex(landingVisionIndex * 10);
    }, [landingVisionIndex]);
    return (
        <NewsWrapper pathname={{ title: 'Hướng dẫn', link: pathname }}>
            <p className='text-primary-color font-bold text-xl text-center p-4 '>
                HƯỚNG DẪN
            </p>
            <div className='flex flex-wrap'>
                {data &&
                    data.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
            </div>
        </NewsWrapper>
    );
};

export default AllGuides;

