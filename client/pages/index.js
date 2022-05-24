// import { useState, useEffect } from 'react';
import GridLayoutMauNha, { Item } from 'components/common/gridLayoutMauNha';
// import Posts from 'components/home/Posts';
// import Services from 'components/home/Services';
import Head from 'next/head';
import Image from 'next/image';
import About from 'components/home/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Commit from 'components/home/Commit';
import Trait from 'components/home/Trait';
import Title from 'components/common/Title';
// import mauNhaGoCoTruyen from '/images/mau-nha-co-truyen.Mau-nha-go-kieu-Hue.jpg';
// import mauNhaGoCoTruyen2 from '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg';
// import mauNhaGoCoTruyen3 from '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg';
// import mauNhaGoCoTruyen4 from '/images/mau-nha-co-truyen.Nha-co-truyen-5-gian.jpg';
// import mauNhaGoCoTruyen5 from '/images/mau-nha-co-truyen.Nha-go-3-gian-go-Lim.jpg';
// import mauNhaGoCoTruyen6 from '/images/mau-nha-co-truyen.Nha-go-3-gian-kieu-Bac-Bo.jpg';
// import mauNhaGoCoTruyen7 from '/images/mau-nha-co-truyen.Nha-go-5-gian-dep.png';

// import mauNhaTuDuong from '/images/nha_tu_duong.Mau-nha-tho-co.jpg';
// import mauNhaTuDuong2 from '/images/nha_tu_duong.Mau-nha-tho-ho-hai-mai.jpg';
// import mauNhaTuDuong3 from '/images/nha_tu_duong.Mau-nha-tho.png';
// import mauNhaTuDuong4 from '/images/nha_tu_duong.Mau-nha-tu-duong-bang-go-dep.png';
// import mauNhaTuDuong5 from '/images/nha_tu_duong.Mau-nha-tu-duong-dep.jpg';

const images = ['/main-banner1.jpg', '/main-banner2.jpg', '/main-banner3.jpg'];

const LibraryData = [
    {
        id: 1,
        title: 'Đúc chạm',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_thu_vien_tu_lieu/1.jpg',
    },
    {
        id: 2,
        title: 'Hoàn thành',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_thu_vien_tu_lieu/2.jpg',
    },
    {
        id: 3,
        title: 'Lắp dựng',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_thu_vien_tu_lieu/3.jpg',
    },
    {
        id: 4,
        title: 'Nhập gỗ',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_thu_vien_tu_lieu/4.jpg',
    },
    {
        id: 5,
        title: 'Sàm gỗ',
        codeProduct: '12345A',
        linkImage: '/images/Avata_thu_vien_tu_lieu/5.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 6,
        title: 'Vận chuyển đến công trình',
        codeProduct: '12345A',
        linkImage: '/images/Avata_thu_vien_tu_lieu/6.jpg',
        type: 'nhaGoCoTruyen',
    },
];

const MauNhaData = [
    {
        id: 1,
        title: 'Cổng gỗ',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_du_an_da_lam/1.jpg',
    },
    {
        id: 2,
        title: 'Đồ thờ',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_du_an_da_lam/2.jpg',
    },
    {
        id: 3,
        title: 'Nhà 5 gian',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_du_an_da_lam/3.jpg',
    },
    {
        id: 4,
        title: 'Nhà 3 gian',
        codeProduct: '1245D5',
        linkImage: '/images/Avata_du_an_da_lam/4.jpg',
    },
    {
        id: 5,
        title: 'Nhà cầu',
        codeProduct: '12345A',
        linkImage: '/images/Avata_du_an_da_lam/5.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 6,
        title: 'Nhà có 8 mái',
        codeProduct: '12345A',
        linkImage: '/images/Avata_du_an_da_lam/6.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 7,
        title: 'Nhà lục giác',
        codeProduct: '12345A',
        linkImage: '/images/Avata_du_an_da_lam/7.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 8,
        title: 'Nội thất',
        codeProduct: '12345A',
        linkImage: '/images/Avata_du_an_da_lam/8.jpg',
        type: 'nhaGoCoTruyen',
    },
];

const ServicesData = [
    {
        id: 1,
        title: 'Tư vấn và thiết kế nhà gỗ',
        description:
            'Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến khách hàng. Với quy trình phát triển dự án rõ ràng chúng tôi mong muốn mang lại chất lượng tốt nhất ...',
        linkImage: '/images/Avata_dich_vu/1.jpg',
    },
    {
        id: 2,
        title: 'Thi công',
        description:
            'Sau khi chốt ý tưởng, thống nhất với khách hàng về thiết kế, chúng tôi tiến hành các bước trong thi công ...',
        linkImage: '/images/Avata_dich_vu/2.jpg',
    },
    {
        id: 3,
        title: 'Thiết kế và thi công nội thất',
        description:
            'Thiết kế thi công nội thất theo yêu cầu của khách hàng là một trong những dịch vụ cốt lõi của Nhà Gỗ Ba Miền chúng tôi ...',
        linkImage: '/images/Avata_dich_vu/3.jpg',
    },
];
export default function Home() {
    return (
        <div className='relative'>
            <div className='relative md:absolute mb-2 md:mb-0 w-1/2 z-10 left-1/2 -translate-x-1/2 md:w-5/6 h-[400px]  md:flex md:justify-center lg:h-[calc(100vh_-_280px)]'>
                <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    className='relative h-full w-full md:w-full object-cover'
                    id='videoPlay'
                    // style={{
                    //     height: 'calc(100vh - 285px)',
                    // }}
                >
                    <source src='/video.mp4' />
                </video>
            </div>
            {/* begin::Banner */}
            <div className='md:brightness-50'>
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
                                    codeProduct: _item.codeProduct || '',
                                    description: _item.description || '',
                                    linkImage: _item.linkImage,
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
                />
            </div>

            <div className='py-10'>
                <GridLayoutMauNha
                    title='Thư viện tư liệu'
                    data={LibraryData}
                    hasPagination
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

