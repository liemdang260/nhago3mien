import Image from 'next/image';
import Title from 'components/common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Item = ({ params }) => {
    return (
        <AnimationOnScroll
            animateOnce={true}
            animateIn='animate__backInUp'
            duration={1}
            className='relative bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] 
        flex flex-col items-center text-base cursor-pointer ease-in-out duration-700
      hover:shadow-primary-color hover:bg-slate-200 group
      '
        >
            <div
                className='hidden w-[450px] h-[290px] group-hover:first:block absolute -translate-y-full -m-2
          border-2 border-solid border-primary-color'
            >
                <Image
                    className='z-50'
                    alt='Error while display image'
                    src={params.linkImage}
                    layout='fill'

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
                    className='z-0  group-hover:brightness-90 transition ease-out duration-500'
                    layout='intrinsic'
                    width={450}
                    height={290}
                    priority
                    src={params.linkImage}
                    alt='Error while display image'
                />
            </figure>

            <div
                className={`font-semibold text-primary-color text-center ${
                    params.title.split(' ').length > 7
                        ? 'text-sm mt-2'
                        : 'text-lg'
                }`}
            >
                {params.title.substring(0, 35)}
            </div>
             {/*mauNhaSan, nhaGoHienDai, nhaGoCoTruyen, nhaTuDuongn, mauNhaLucGiac */}
            <div
                className={`w-full h-1  mt-4
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
            <div className='uppercase text-gray-500 font-medium text-center py-2 h-10'></div>
        </AnimationOnScroll>
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

const GridLayoutMauNha = ({ title, data, hasPagination = false }) => {
    // Swiper

    return (
        <div className='container flex flex-col justify-around'>
            <Title title={title} />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={
                    hasPagination && {
                        clickable: true,
                        type: 'fraction',
                    }
                }
                navigation={true}
                modules={[Pagination, Navigation]}
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
                    min-height: 350px;
                    margin-top: 40px;
                }      
                .mySwiper .swiper-pagination {
                    bottom: 0
                }
            `}</style>
        </div>
    );
};

export default GridLayoutMauNha;
export { Item };
