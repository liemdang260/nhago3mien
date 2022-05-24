import Link from 'next/link';
import Image from 'next/image';
import NewsWrapper from 'components/common/NewsWrapper';
const data = [
    {
        step: 1,
        title: 'Khảo sát mặt bằng, lấy ý tưởng khách hàng',
        imgLink: '/khao-sat-mat-bang.png',
        alt: 'khao-sat-mat-bang.png',
    },
    {
        step: 2,
        title: 'Tư vấn, thiết kế',
        imgLink: '/tu-van-thiet-ke.png',
        alt: 'tu-van-thiet-ke.png',
    },
    {
        step: 3,
        title: 'Chọn gỗ ( chủng loại )',
        imgLink: '/chongo.png',
        alt: 'chongo',
    },
    {
        step: 4,
        title: 'Cắt đầu gỗ ( lễ phạt mộc)',
        imgLink: '/phatmoc.png',
        alt: 'phatmoc',
    },
    {
        step: 5,
        title: 'Sàm Đóng',
        imgLink: '/samdong.png',
        alt: 'samdong',
    },
    {
        step: 6,
        title: 'Đục Trạm',
        imgLink: '/duccham.png',
        alt: 'duccham',
    },
    {
        step: 7,
        title: 'Làm lót',
        imgLink: '/lamlot.png',
        alt: 'lamlot',
    },
    {
        step: 8,
        title: 'Vận chuyển đến công trình',
        imgLink: '/vanchuyen.png',
        alt: 'vanchuyen',
    },
    {
        step: 9,
        title: 'Lắp dựng',
        imgLink: '/lapdung.png',
        alt: 'lapdung',
    },
    {
        step: 10,
        title: 'Sơn hoàn thiện',
        imgLink: '/sonhoanthien.png',
        alt: 'sonhoanthien',
    },
];
const Step = ({ step, title, imgLink, alt }) => {
    return (
        <div className='inline-block w-[230px] h-[275px] mt-5 border-2 rounded-md overflow-hidden'>
            <div className='w-full h-[220px] relative overflow-hidden'>
                <Image
                    src={imgLink}
                    alt={alt}
                    layout='fill'
                    className='hover:scale-105 ease-linear duration-150'
                ></Image>
            </div>
            <div className='bg-primary-color p-1 h-[55px] flex justify-center flex-col'>
                <p className='text-white align-middle text-center text-base'>
                    <span className='underline'>Bước {step}</span>: {title}
                </p>
            </div>
        </div>
    );
};
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
                <p className='text-lg'>Các công đoạn triển khai Công trình</p>
                <div className='flex justify-around flex-wrap'>
                    {data.map((d, index) => {
                        return (
                            <Step
                                key={index}
                                step={d.step}
                                title={d.title}
                                imgLink={d.imgLink}
                                alt={d.alt}
                            ></Step>
                        );
                    })}
                </div>
            </div>
        </NewsWrapper>
    );
};

export default Introduction;

