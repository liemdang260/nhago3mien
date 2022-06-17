// import { useState, useEffect } from 'react';
import GridLayoutMauNha, { Item } from 'components/common/gridLayoutMauNha';
import Head from 'next/head';
import Image from 'next/image';
import About from 'components/home/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Commit from 'components/home/Commit';
import Trait from 'components/home/Trait';
import Title from 'components/common/Title';

const images = ['/main-banner1.jpg', '/main-banner2.jpg', '/main-banner3.jpg'];

const LibraryData = [
    {
        id: 1,
        title: 'Đúc chạm',
        linkImage: '/images/Avata_thu_vien_tu_lieu/1.jpg',
        link: 'duc-cham',
    },
    {
        id: 2,
        title: 'Hoàn thành',
        linkImage: '/images/Avata_thu_vien_tu_lieu/2.jpg',
        link: 'hoan-thanh',
    },
    {
        id: 3,
        title: 'Lắp dựng',
        linkImage: '/images/Avata_thu_vien_tu_lieu/3.jpg',
        link: 'lap-dung',
    },
    {
        id: 4,
        title: 'Nhập gỗ',
        linkImage: '/images/Avata_thu_vien_tu_lieu/4.jpg',
        link: 'nhap-go',
    },
    {
        id: 5,
        title: 'Sàm gỗ',
        linkImage: '/images/Avata_thu_vien_tu_lieu/5.jpg',
        link: 'sam-go',
    },
    {
        id: 6,
        title: 'Vận chuyển đến công trình',
        linkImage: '/images/Avata_thu_vien_tu_lieu/6.jpg',
        link: 'van-chuyen-den-cong-trinh',
    },
];

const MauNhaData = [
    {
        id: 1,
        title: 'Cổng gỗ',
        linkImage: '/images/Avata_du_an_da_lam/1.jpg',
        link: 'cong-go',
    },
    {
        id: 2,
        title: 'Đồ thờ',
        linkImage: '/images/Avata_du_an_da_lam/2.jpg',
        link: 'do-tho',
    },
    {
        id: 3,
        title: 'Nhà 5 gian',
        linkImage: '/images/Avata_du_an_da_lam/3.jpg',
        link: 'nha-5-gian',
    },
    {
        id: 4,
        title: 'Nhà 3 gian',
        linkImage: '/images/Avata_du_an_da_lam/4.jpg',
        link: 'nha-3-gian',
    },
    {
        id: 5,
        title: 'Nhà cầu',
        linkImage: '/images/Avata_du_an_da_lam/5.jpg',
        link: 'nha-cau',
    },
    {
        id: 6,
        title: 'Nhà có 8 mái',
        linkImage: '/images/Avata_du_an_da_lam/6.jpg',
        link: 'nha-co-8-mai',
    },
    {
        id: 7,
        title: 'Nhà lục giác',
        linkImage: '/images/Avata_du_an_da_lam/7.jpg',
        link: 'nha-luc-giac',
    },
    {
        id: 8,
        title: 'Nội thất',
        linkImage: '/images/Avata_du_an_da_lam/8.jpg',
        link: 'noi-that',
    },
];

const ServicesData = [
    {
        id: 1,
        title: 'Tư vấn và thiết kế nhà gỗ',
        description:
            'Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến khách hàng. Với quy trình phát triển dự án rõ ràng chúng tôi mong muốn mang lại chất lượng tốt nhất ...',
        linkImage: '/images/Avata_dich_vu/3.jpg',
        link: 'tu-van-thiet-ke-nha-go',
    },
    {
        id: 2,
        title: 'Thi công nhà gỗ',
        description:
            'Sau khi chốt ý tưởng, thống nhất với khách hàng về thiết kế, chúng tôi tiến hành các bước trong thi công ...',
        linkImage: '/images/Avata_dich_vu/2.jpg',
        link: 'thi-cong-nha-go',
    },
    {
        id: 3,
        title: 'Thiết kế và thi công nội thất',
        description:
            'Thiết kế thi công nội thất theo yêu cầu của khách hàng là một trong những dịch vụ cốt lõi của Nhà Gỗ Ba Miền chúng tôi ...',
        linkImage: '/images/Avata_dich_vu/1.jpg',
        link: 'thiet-ke-va-thi-cong-noi-that',
    },
];
export default function Home() {
    return (
        <div className='relative'>
            {/* begin::Banner */}
            <div className='hidden sm:block'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    speed={1000}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    {images &&
                        images.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full min-h-[300px] md:min-h-[400px] lg:min-h-[calc(100vh_-_280px)]'>
                                    <Image
                                        src={value}
                                        alt='banner 1'
                                        layout='fill'
                                        loading='lazy'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <style>
                {` .swiper-wrapper > .swiper-slide-active ~ .swiper-slide-active {
                        filter: blur(0) !important;
                    }
                    .swiper-wrapper > .swiper-slide-active {
                        // filter: blur(4px);
                    }
                   
                `}
            </style>
            {/* end::Banner */}

            {/* begin::Vechungtoi */}
            <div className='py-10 bg-sub-background-color'>
                <About />
            </div>
            {/* end::Vechungtoi */}

            {/* begin::Dacdiem */}
            <div className='py-10'>
                <Trait />
            </div>
            {/* end::Dacdiem */}

            {/* begin:Dichvucungcap */}
            <div className='bg-sub-background-color py-10'>
                <Title title='Dịch vụ cung cấp' />
                <div className='flex flex-col sm:flex-row justify-between items-center h-[300] w-full lg:w-3/4 m-auto'>
                    {ServicesData.map((_item, _index) => (
                        <div
                            key={_index}
                            className='h-[350px] w-full sm:w-[500px] mx-[15px] mt-[50px] '
                        >
                            <Item
                                params={{
                                    title: _item.title,
                                    description: _item.description || '',
                                    link: '',
                                    linkImage: _item.linkImage,
                                    mode: 'dich-vu',
                                    link: _item.link,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* end::Dichvucungcap */}
            {/* Begin::Motsomaunha */}
            <div className='py-10'>
                <GridLayoutMauNha
                    title='Dự án đã làm'
                    data={MauNhaData}
                    hasPagination
                    mode='du-an-da-lam'
                />
            </div>

            <div className='py-10'>
                <GridLayoutMauNha
                    title='Thư viện tư liệu'
                    data={LibraryData}
                    hasPagination
                    mode='thu-vien-tu-lieu'
                />
            </div>
            {/* end::Motsomaunha */}
            {/* begin::5camketvang */}
            <div>
                <Commit />
            </div>
            {/* end::5camketvang */}

            <style>{`
           
            `}</style>
        </div>
    );
}

