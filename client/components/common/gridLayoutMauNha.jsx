import { useState } from 'react';
import Image from 'next/image';
import mauHinhAnh from '../../public/nhago.jpg';
import Title from 'components/common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

const Item = ({ params }) => {
    return (
        <div
            className='relative bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] 
        flex flex-col items-center text-base cursor-pointer ease-in-out duration-300
      hover:shadow-primary-color hover:bg-slate-200 group
      '
        >
            <figure
                className='relative before:absolute before:top-0 before:-left-3/4
                before:z-[2] before:block before:w-1/2 before:h-full 
                before:bg-gradient-to-r before:from-[#fff] before:to[#fff] before:-skew-x-[25deg] before:opacity-30
                group-hover:before:duration-750 group-hover:before:animate-shineToLetf overflow-hidden'
            >
                <Image
                    className='z-0 group-hover:scale-110 group-hover:brightness-90 transition ease-out duration-500'
                    src={params.imgLink}
                    width={280}
                    height={210}
                    priority
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
            {params.codeProduct && (
                <div className='text-base font-semibold text-primary-color'>
                    Mã SP: {params.codeProduct}
                </div>
            )}
            {params.description && (
                <div className='py-2 px-3 text-sm text-color text-justify'>
                    {params.description}
                </div>
            )}
            <div className='w-full border-2 bg-slate-300  mt-2 bg-gradient-to-l'></div>
            {params.codeProduct && (
                <div className='uppercase text-gray-500 font-medium text-center py-2'>
                    Liên hệ: 0333619358{' '}
                    <FontAwesomeIcon icon={faPhoneFlip} className='mr-4' />
                </div>
            )}
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
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            {' '}
                            <Item
                                params={{
                                    title: item.title,
                                    codeProduct: item.codeProduct || '',
                                    description: item.description || '',
                                    imgLink: item.imgLink,
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
