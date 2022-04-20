import { useState } from 'react';
import Image from 'next/image';
import mauHinhAnh from '../../public/nhago.jpg';
import Title from 'components/common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const Item = ({ params }) => {
    return (
        <div
            className='relative bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] 
        flex flex-col items-center text-base cursor-pointer ease-in-out duration-300
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
                    src={mauHinhAnh}
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
                    className='z-0 group-hover:scale-110 group-hover:brightness-90 transition ease-out duration-500'
                    layout='intrinsic'
                    height={900}
                    priority
                    src={mauHinhAnh}
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
            <div className='text-base font-semibold text-primary-color'>
                Mã SP: {params.codeProduct}
            </div>
            <div className='w-full border-2 bg-slate-300  mt-2 bg-gradient-to-l'></div>
            <div className='uppercase text-gray-500 font-medium text-center py-2'>
                Liên hệ: 0333619358{' '}
                <FontAwesomeIcon icon={faPhoneFlip} className='mr-4' />
            </div>
        </div>
    );
};

const ItemHover = (urlImage) => {
    return (
        <Image
            className='z-20'
            alt='Error while display image'
            src={mauHinhAnh}
            layout='fill'
            // width={450}
            // height={290}
        />
    );
};

const GridLayoutMauNha = () => {
    // Swiper

    return (
        <div className='container flex flex-col justify-around mt-6'>
            <Title title='Mẫu nhà gỗ đẹp' />
            <div className='h-[320px]'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper w-full h-full'
                >
                    <SwiperSlide>
                        {' '}
                        <Item
                            params={{ title: 'Nhà 1', codeProduct: '1245D5' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <Item
                            params={{ title: 'Nhà 12', codeProduct: '1245D5' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <Item
                            params={{ title: 'Nhà 13', codeProduct: '1245D5' }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <style>{`
                .swiper-button-prev,
                .swiper-button-next {
                    background-color: rgba(0, 0, 0, 0.7);
                }
            `}</style>
        </div>
    );
};

export default GridLayoutMauNha;
export { Item };
