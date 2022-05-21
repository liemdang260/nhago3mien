import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { faListSquares, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';

const dummyData = [
    {
        id: 0,
        title: 'Chòi hóng mát',
        codeProduct: '12345A',
        linkImage: '/images/nha1.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 1,
        title: 'Chòi ngắm cảnh',
        codeProduct: '12345A',
        linkImage: '/images/nha2.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 2,
        title: 'Mẫu nhà lục giác',
        codeProduct: '12345A',
        linkImage: '/images/nha3.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 3,
        title: 'Nhà chòi kiểu cổ',
        codeProduct: '12345A',
        linkImage: '/images/nha4.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 4,
        title: 'Mẫu nhà gỗ 3 gian cổ truyền',
        codeProduct: '12345A',
        linkImage: '/images/nha5.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 5,
        title: 'Mẫu nhà gỗ 5 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/nha5.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 6,
        title: 'Mẫu nhà gỗ 3 gian 2 trái',
        codeProduct: '12345A',
        linkImage: '/images/nha6.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 7,
        title: 'Mẫu nhà gỗ 3 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/nha7.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 8,
        title: 'Mẫu nhà gỗ 5 gian mái thái',
        codeProduct: '12345A',
        linkImage: '/images/nha8.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 9,
        title: 'Mẫu nhà gỗ kiểu thái',
        codeProduct: '12345A',
        linkImage: '/images/nha9.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 10,
        title: 'Mẫu nhà gỗ Liêm',
        codeProduct: '12345A',
        linkImage: '/images/nha10.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 11,
        title: 'Mẫu nhà gỗ hiện đại',
        codeProduct: '12345A',
        linkImage: '/images/nha11.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 12,
        title: 'Mẫu nhà gỗ hiện đại 02',
        codeProduct: '12345A',
        linkImage: '/images/nha12.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 13,
        title: 'Mẫu nhà gỗ hiện đại 03',
        codeProduct: '12345A',
        linkImage: '/images/nha13.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 14,
        title: 'Mẫu nhà gỗ hiện đại 04',
        codeProduct: '12345A',
        linkImage: '/images/nha14.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 15,
        title: 'Mẫu nhà gỗ hiện đại 06',
        codeProduct: '12345A',
        linkImage: '/images/nha15.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 16,
        title: 'Mẫu nhà gỗ làm homestay',
        codeProduct: '12345A',
        linkImage: '/images/nha30.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 17,
        title: 'Mẫu nhà gỗ kiểu Huế',
        codeProduct: '12345A',
        linkImage: '/images/nha16.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 18,
        title: 'Mẫu nhà rường Huế',
        codeProduct: '12345A',
        linkImage: '/images/nha17.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 19,
        title: 'Mẫu nhà truyền thống đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha18.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 20,
        title: 'Nhà cổ truyền 5 gian',
        codeProduct: '12345A',
        linkImage: '/images/nha19.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 21,
        title: 'Nhà 3 gian gỗ Lim',
        codeProduct: '12345A',
        linkImage: '/images/nha20.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 22,
        title: 'Nhà gỗ 3 gian kiểu Bắc bộ',
        codeProduct: '12345A',
        linkImage: '/images/nha21.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 23,
        title: 'Nhà gỗ 5 gian đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha18.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 24,
        title: 'Mẫu nhà thờ cổ',
        codeProduct: '12345A',
        linkImage: '/images/nha27.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 25,
        title: 'Mẫu nhà thờ cổ hai mái',
        codeProduct: '12345A',
        linkImage: '/images/nha4.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 26,
        title: 'Mẫu nhà thờ',
        codeProduct: '12345A',
        linkImage: '/images/nha25.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 27,
        title: 'Mẫu nhà từ đường bằng gỗ đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha26.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 28,
        title: 'Mẫu nhà từ đường đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha27.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 29,
        title: 'Mẫu nhà từ đường mái cong',
        codeProduct: '12345A',
        linkImage: '/images/nha28.jpg',
        type: 'nhaTuDuong',
    },
    {
        id: 30,
        title: 'Mẫu nhà từ đường',
        codeProduct: '12345A',
        linkImage: '/images/nha29.jpg',
        type: 'nhaTuDuong',
    },
];

const Item = ({ params }) => {
    const router = useRouter();

    const handleClickItem = () => {
        // router.push()
        if (params.mode == 'service') {
            router.push(`/dich-vu`);
        } else {
            router.push(
                `/mau-nha/${params.type ? params.type : 'mac-dinh'}/${
                    params.title
                }`,
            );
        }
    };
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClickItem}
            className='h-full'
        >
            <div
                className='relative h-full bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)]
                flex flex-col items-center text-base cursor-pointer ease-in-out duration-700
              hover:shadow-primary-color hover:bg-slate-200 group
              '
            >
                <div
                    className='hidden w-[450px] h-[290px] sm:group-hover:first:block absolute -translate-y-full -m-2
          border-2 border-solid border-primary-color'
                >
                    <Image
                        className='z-50'
                        alt='Error while display image'
                        src={params.linkImage}
                        layout='fill'
                        loading='lazy'
                        // width={450}
                        // height={290}
                    />
                    <div className='absolute left-1/2 top-[100.5%] w-16 overflow-hidden'>
                        <div className=' h-2 w-2 bg-primary-color -rotate-45 transform origin-top-left'></div>
                    </div>
                </div>
                <figure
                    className='relative before:absolute before:top-0 before:-left-3/4
                before:z-[2] before:block before:w-1/2 before:h-full 
                before:bg-gradient-to-r before:from-[#fff] before:to[#fff] before:-skew-x-[25deg] before:opacity-30
                group-hover:before:duration-750 group-hover:before:animate-shineToLetf overflow-hidden'
                >
                    <Image
                        className='z-0 group-hover:brightness-90 transition ease-out duration-500'
                        // layout='intrinsic'
                        width={450}
                        height={300}
                        loading='lazy'
                        src={params.linkImage}
                        alt='Error while display image'
                    />
                </figure>

                <div
                    className={`font-medium text-white bg-primary-color py-2 px-3 self-stretch -translate-y-[7px] uppercase text-xs md:text-sm`}
                >
                    {params.title.substring(0, 35)}
                </div>
                {params.description && (
                    <div className='text-color text-sm leading-6 px-3 text-justify'>
                        {params.description}
                    </div>
                )}
                {/* mauNhaSan, nhaGoHienDai, nhaGoCoTruyen, nhaTuDuongn, mauNhaLucGiac */}
                {params.type && (
                    <div
                        className={`w-full h-2 my-2
          ${
              params.type == 'nhaTuDuong'
                  ? 'bg-[#05ed10]'
                  : params.type == 'nhaGoHienDai'
                  ? 'bg-[#f00]'
                  : params.type == 'mauNhaSan'
                  ? 'bg-[#0aa6a6]'
                  : params.type == 'nhaGoCoTruyen'
                  ? 'bg-[#000]'
                  : params.type == 'mauNhaLucGiac'
                  ? 'bg-[#42611e]'
                  : ''
          }`}
                    ></div>
                )}
                {/* <div className='uppercase text-gray-500 font-medium text-center py-2 h-10'></div> */}
            </div>
        </motion.div>
    );
};
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

const AllHomeTemplate = () => {
    const [data, setData] = useState(dummyData);
    const [activeItem, setAciveItem] = useState(0);
    const [gridLayout, setGridLayout] = useState(true);
    const [landingVisionIndex, setLandingVisionIndex] = useState(0);

    // Select option when responsive
    const [selectedOption, setSelectedOption] = useState({
        label: 'Tất cả',
        value: 'tatca',
    });
    useEffect(() => {
        if (selectedOption.value == 'tatca') setData(dummyData);
        else
            setData(
                dummyData.filter((item) => {
                    return item.type == selectedOption.value;
                }),
            );
    }, [selectedOption]);

    const options = [
        { label: 'Tất cả', value: 'tatca' },
        {
            label: 'Nhà từ đường',
            value: 'nhaTuDuong',
        },
        {
            label: 'Nhà gỗ hiện đại',
            value: 'nhaGoHienDai',
        },
        {
            label: 'Nhà sàn gỗ',
            value: 'mauNhaSan',
        },
        {
            label: 'Nhà cỗ truyền',
            value: 'nhaGoCoTruyen',
        },
        {
            label: 'Nhà lục giác',
            value: 'mauNhaLucGiac',
        },
    ];

    const Label = ({ params }) => {
        return (
            <div
                className={`color-[#09357a] font-sans cursor-pointer inline-block mr-5 text-base py-2 px-1
                rounded text-center
                ${
                    params.keyValue === activeItem ? 'bg-[#ccc]' : ''
                } border-b-4 group`}
                onClick={() => {
                    setAciveItem(params.keyValue);
                    if (params.type == 'tatca') setData(dummyData);
                    else
                        setData(
                            dummyData.filter((item) => {
                                return item.type == params.type;
                            }),
                        );
                }}
            >
                {params.title}
                <span
                    style={{
                        backgroundColor: `${params.color} `,
                    }}
                    className={`inline-block h-2 ml-1 w-6 before:absolute before:left-0 before:w-full
                        before:bg-[#1f31ab] before:opacity-0 before:transition-all before:top-0 before:translate-x-3
                        after:absolute after:left-0 after:w-full
                        after:bg-[#1f31ab] after:opacity-0 after:transition-all after:bottom-0 after:-translate-y-1
                        group-hover:before:opacity-100 group-hover:before:translate-y-0 group-hover:after:opacity-100 group-hover:after:translate-y-0
                    `}
                ></span>
            </div>
        );
    };

    const GroupMauNha = ({ params }) => {
        return (
            <>
                <div className='h-[900] w-full border border-primary-color px-20 pt-5 rounded-md'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                    >
                        {params.dummyData.map((_item, _index) => (
                            <SwiperSlide>
                                <Image
                                    src={_item.linkImage}
                                    alt='Errow while display image'
                                    width={500}
                                    height={350}
                                />
                            </SwiperSlide>
                        ))}
                        <div className='w-full my-2 text-center text-2xl'>
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
            <div className='pl-4 pt-4 pr-4 container'>
                <div className='w-full flex justify-between'>
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
                </div>
                <motion.div
                    layout
                    initial={{ translateX: -100 }}
                    animate={{ translateX: 0 }}
                    transition={0.3}
                    className={`w-full ${
                        gridLayout
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6'
                            : ''
                    } mt-6`}
                >
                    <AnimatePresence>
                        <div className=' col-start-1 col-end-3'>
                            <GroupMauNha
                                params={{
                                    dummyData: dummyData.filter(
                                        (_item) => _item.type == 'mauNhaSan',
                                    ),
                                    title: 'Mẫu nhà sàn',
                                }}
                            />
                        </div>
                        <div className='col-start-3 col-end-5 '>
                            <GroupMauNha
                                params={{
                                    dummyData: dummyData.filter(
                                        (_item) => _item.type == 'nhaGoHienDai',
                                    ),
                                    title: 'Mẫu nhà gỗ hiện đại',
                                }}
                            />
                        </div>
                        <div className='col-start-1 col-end-3 '>
                            <GroupMauNha
                                params={{
                                    dummyData: dummyData.filter(
                                        (_item) =>
                                            _item.type == 'nhaGoCoTruyen',
                                    ),
                                    title: 'Mẫu nhà gỗ cổ truyền',
                                }}
                            />
                        </div>
                        <div className='col-start-3 col-end-5 '>
                            <GroupMauNha
                                params={{
                                    dummyData: dummyData.filter(
                                        (_item) => _item.type == 'nhaTuDuong',
                                    ),
                                    title: 'Mẫu nhà từ đường',
                                }}
                            />
                        </div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default AllHomeTemplate;
export { Item2, dummyData };
