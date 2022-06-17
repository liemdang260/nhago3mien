// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
// import { faListSquares, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';

const dummyData2 = [
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/1.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/2.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/3.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/4.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/5.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/6.jpg',
    },
    {
        type: 'duc-cham',
        linkImage: '/thu-vien-tu-lieu/duc-cham/7.jpg',
    },
    {
        type: 'hoan-thanh',
        linkImage: '/thu-vien-tu-lieu/hoan-thanh/1.jpg',
    },
    {
        type: 'hoan-thanh',
        linkImage: '/thu-vien-tu-lieu/hoan-thanh/2.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/1.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/2.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/3.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/4.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/5.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/6.jpg',
    },
    {
        type: 'lap-dung',
        linkImage: '/thu-vien-tu-lieu/lap-dung/7.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/1.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/2.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/3.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/4.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/5.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/6.jpg',
    },
    {
        type: 'nhap-go',
        linkImage: '/thu-vien-tu-lieu/nhap-go/7.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/1.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/2.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/3.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/4.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/5.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/6.jpg',
    },
    {
        type: 'sam-go',
        linkImage: '/thu-vien-tu-lieu/sam-go/7.jpg',
    },
    {
        type: 'van-chuyen-den-cong-trinh',
        linkImage: '/thu-vien-tu-lieu/van-chuyen-den-cong-trinh/1.jpg',
    },
    {
        type: 'van-chuyen-den-cong-trinh',
        linkImage: '/thu-vien-tu-lieu/van-chuyen-den-cong-trinh/2.jpg',
    },
];

const Item2 = ({ params }) => {
    const router = useRouter();
    const handleClickItem = () => {
        // router.push()
        router.push(
            `/mau-nha/${params.type ? params.type : ''}/${params.title}`,
        );
    };

    return (
        <div
            onClick={handleClickItem}
            className='border bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] border-[#ccc] mb-3 h-52
      flex flex-row hover:shadow-primary-color hover:bg-slate-200 duration-700
    '
        >
            <div className='grow-[6] sm:grow-[2] md:grow overflow-hidden px-4 border-r border-primary-color flex-1'>
                <Image
                    src={params.linkImage}
                    alt='mau san pham'
                    layout='fixed'
                    loading='lazy'
                    width={350}
                    height={200}
                />
            </div>
            <div className='grow-[2] flex-1 p-4'>
                <div className={`font-bold text-primary-color`}>
                    {params.title}
                    <div className='w-full border-2 bg-slate-300 mb-3 mt-2 bg-gradient-to-l'></div>
                    <br />
                </div>

                <div className='text-sm'>Mieu ta mau nha</div>

                <div className='uppercase text-gray-500 font-medium w-full bottom-5'></div>
            </div>
        </div>
    );
};

const References = () => {
    const [gridLayout, setGridLayout] = useState(true);

    const GroupReference = ({ params }) => {
        const router = useRouter();
        const handleClickItem = () => {
            // router.push()
            if (params.mode == 'service') {
                router.push(`/dich-vu`);
            } else {
                router.push(`/thu-vien-tu-lieu/${params.slug}`);
            }
        };
        return (
            <>
                <div
                    onClick={handleClickItem}
                    className='h-[900] w-full border border-primary-color px-20 pt-5 rounded-md'
                >
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                    >
                        {params.dummyData.map((_item, _index) => (
                            <SwiperSlide key={_index}>
                                <Image
                                    src={_item.linkImage}
                                    alt='Errow while display image'
                                    loading='lazy'
                                    width={500}
                                    height={350}
                                />
                            </SwiperSlide>
                        ))}
                        <div className='w-full my-2 text-center text-base sm:text-2xl'>
                            {params.title}
                        </div>
                    </Swiper>
                </div>
                <style>
                    {`
                    .swiper-slide {
                        filter: blur(4px);
                    }
                    .swiper-slide-active {
                        filter: blur(0px) !important;
                    }
                    `}
                </style>
            </>
        );
    };

    return (
        <div className='mb-6'>
            <div className='pl-4 pr-4 container'>
                <div className='col-span-12 border-b-[1px] border-gray-300 py-4'>
                    <Breadcrumb
                        location={[
                            { title: 'Trang chủ', link: '/' },
                            {
                                title: 'Thư viện tư liệu',
                                link: 'thu-vien-tu-lieu',
                            },
                        ]}
                    />
                </div>
                {/* <div className='w-full flex justify-between'>
                    <div className='mt-2'>
                        <span
                            onClick={() => setGridLayout(true)}
                            className={`border-solid border-primary-color py-1 md:py-2 px-1 md:px-3 rounded-l-md ${
                                gridLayout ? 'border-4' : 'border'
                            }`}
                        >
                            <FontAwesomeIcon icon={faListSquares} size='lg' />
                        </span>
                        <span
                            onClick={() => setGridLayout(false)}
                            className={`border-solid border-primary-color  py-1 md:py-2 px-1 md:px-3 rounded-r-md ${
                                !gridLayout ? 'border-4' : 'border'
                            }`}
                        >
                            <FontAwesomeIcon icon={faBars} size='lg' />
                        </span>
                    </div>
                </div> */}
                <h2 className='text-primary-color font-black text-2xl text-center py-8'>
                    Thư viện tư liệu
                </h2>
                <motion.div
                    layout
                    initial={{ translateX: -100 }}
                    animate={{ translateX: 0 }}
                    transition={0.3}
                    className={`w-full ${
                        gridLayout
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6'
                            : 'mx-2'
                    } mt-6`}
                >
                    <AnimatePresence>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) => _item.type == 'duc-cham',
                                    ),
                                    title: 'Đục chạm',
                                    slug: 'duc-cham',
                                }}
                            />
                        </div>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3 sm:col-start-3 sm:col-end-5`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) => _item.type == 'hoan-thanh',
                                    ),
                                    title: 'Hoàn thành',
                                    slug: 'duc-cham',
                                }}
                            />
                        </div>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) => _item.type == 'lap-dung',
                                    ),
                                    title: 'Lắp dựng',
                                    slug: 'lap-dung',
                                }}
                            />
                        </div>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3 sm:col-start-3 sm:col-end-5`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) => _item.type == 'nhap-go',
                                    ),
                                    title: 'Nhập gỗ',
                                    slug: 'nhap-go',
                                }}
                            />
                        </div>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) => _item.type == 'sam-go',
                                    ),
                                    title: 'Sàm gỗ',
                                    slug: 'sam-go',
                                }}
                            />
                        </div>
                        <div
                            className={`${
                                gridLayout ? '' : 'my-2'
                            } col-start-1 col-end-3 sm:col-start-3 sm:col-end-5`}
                        >
                            <GroupReference
                                params={{
                                    dummyData: dummyData2.filter(
                                        (_item) =>
                                            _item.type ==
                                            'van-chuyen-den-cong-trinh',
                                    ),
                                    title: 'Vận chuyển đến công trình',
                                    slug: 'van-chuyen-den-cong-trinh',
                                }}
                            />
                        </div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default References;
export { Item2 };
