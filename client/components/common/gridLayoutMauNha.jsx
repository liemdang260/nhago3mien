import Image from 'next/image';
import Title from 'components/common/Title';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useRouter } from 'next/router';
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
        <div onClick={handleClickItem} className='h-full'>
            <AnimationOnScroll
                animateOnce={true}
                animateIn='animate__backInUp'
                duration={1}
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
                        src={params.linkImage}
                        loading='lazy'
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
                {/* <div className='uppercase text-gray-500 font-medium text-center py-2 h-10'></div> */}
            </AnimationOnScroll>
        </div>
    );
};

// const ItemHover = (urlImage) => {
//     return (
//         <Image
//             className='z-20'
//             alt='Error while display image'
//             src={mauHinhAnh}
//             layout='fill'
//             // width={450}
//             // height={290}
//         />
//     );
// };

const GridLayoutMauNha = ({
    title,
    data,
    hasPagination = false,
    mode = 'default',
}) => {
    return (
        <div className='container flex flex-col justify-around p-4 sm:p-0'>
            <Title title={title} />
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={
                    hasPagination && {
                        clickable: true,
                        type: 'fraction',
                    }
                }
                // breakpoints={{
                //     576: {
                //         // width: 320,
                //         slidesPerView: 2,
                //     },
                //     // when window width is >= 768px
                //     768: {
                //         // width: 640,
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     992: {
                //         // width: 640,
                //         slidesPerView: 4,
                //     },
                // }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper w-full h-full'
            >
                {data &&
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            {' '}
                            <Item
                                params={{
                                    title: item.title,
                                    codeProduct: item.codeProduct || '',
                                    description: item.description || '',
                                    linkImage: item.linkImage,
                                    mode: mode,
                                }}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            {/* </div> */}
            <style>{`
                .swiper:hover .swiper-button-prev, .swiper:hover .swiper-button-next {                    
                    transform: translateX(0) translateY(-40%);
                }
                .swiper-slide {
                    height: initial !important;
                }
                
                .swiper-button-prev,
                .swiper-button-next {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 2rem 1.5rem;                            
                    transition: transform 0.3s;
                    will-change: transform;
                    transform-origin: top;                    
                }
                .swiper-button-prev:hover,
                .swiper-button-next:hover {                    
                    transform: scale(1.1) translateY(-45%) translateX(0) !important;
                }
                .swiper-button-prev {
                    left: 0;
                    transform: translateY(-40%) translateX(-100%);
                }
                .swiper-button-next {
                    right: 0;
                    transform: translateY(-40%) translateX(100%);
                }
                .mySwiper {                    
                    min-height: 300px;
                    margin-top: 40px;
                    padding-bottom: 10px;
                }      
                .mySwiper .swiper-pagination {
                    bottom: 0
                }
                @media screen and (max-width:576px){
                    .mySwiper {                                            
                        padding-bottom: 30px;
                    }
                }
            `}</style>
        </div>
    );
};

export default GridLayoutMauNha;
export { Item };
