import React from 'react';
// import Banner from 'components/home/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCube } from 'swiper';
import Image from 'next/image';

const images = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg'];

function AboutTitle({ title }) {
    return (
        <div className='relative text-center my-8'>
            <div className='absolute bg-primary-color w-full h-[1.5px] top-1/2'></div>
            <h3 className='bg-white text-primary-color inline-block relative px-8 text-5xl font-bold font-edwardianKT'>
                {title}
            </h3>
        </div>
    );
}

function AboutStrength({ strengthTitle, strengthSubTitle }) {
    return (
        <div className='w-full border-primary-color border-[3px] p-1 m-4'>
            <div className='border-primary-color border-2 p-2'>
                <a
                    href='#'
                    className='text-primary-color text-center hover:underline'
                >
                    <p className='font-bold text-lg'>{strengthTitle}</p>
                    <p className='font-medium text-md'>{strengthSubTitle}</p>
                </a>
            </div>
        </div>
    );
}
function About() {
    return (
        <div className='container'>
            <div>
                <AboutTitle title='Về chúng tôi' />
                <div className='flex flex-col lg:flex-row px-10'>
                    <div className='w-1/2 p-4 '>
                        <p className='text-primary-color font-bold text-sm mb-4'>
                            Nhà gỗ Ba miền xin kính chào Quý khách hàng!
                        </p>
                        <p className='text-sm mb-6 leading-6'>
                            &emsp;&emsp;&emsp;Lời đầu tiên Nhà gỗ Ba miền xin
                            gửi tới Quý khách hàng lới chào trân trọng, lời cảm
                            ơn chân thành nhất đến Quý khách hàng đã và đang sử
                            dụng sản phẩm, cũng như quan tâm và gắn bó với Nhà
                            gỗ Ba miền trong suốt thời gian qua!
                        </p>
                        <p className='text-sm mb-6 leading-6'>
                            &emsp;&emsp;&emsp;
                            <span className='text-primary-color font-medium'>
                                Nhà gỗ Ba miền
                            </span>{' '}
                            là một thương hiệu uy tín trong lĩnh vực thiết kế,
                            thi công và cung cấp nhà gỗ tại TPHCM cũng như ở
                            nhiều tỉnh thành khác trên toàn quốc. Với kinh
                            nghiệm đã tích lũy được trong thời gian dài hoạt
                            động cùng đội ngũ nhân viên chuyên nghiệp, có tay
                            nghề và trình độ cao, nhà gỗ Ba miền tự hào mang đến
                            cho Quý khách hàng những sản phẩm và dịch vụ t...
                        </p>
                        <p className='text-right text-primary-color underline'>
                            <a href='#' className='hover:font-semibold'>
                                Xem chi tiết
                            </a>
                        </p>
                    </div>
                    <div className='w-1/2 p-4'>
                        <Swiper
                            modules={[Pagination, Autoplay, EffectCube]}
                            effect='cube'
                            slidesPerView={1}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                        >
                            {images &&
                                images.map((value, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full h-[300px]'>
                                            <Image
                                                src={value}
                                                alt='banner 1'
                                                layout='fill'
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div>
                <AboutTitle title='Nhà gỗ Ba miền' />
                <div className='flex flex-col md:flex-row justify-between mx-10'>
                    <AboutStrength
                        strengthTitle='CHUYÊN NGHIỆP'
                        strengthSubTitle='TRONG THIẾT KẾ VÀ THI CÔNG'
                    />
                    <AboutStrength
                        strengthTitle='CHẤT LƯỢNG'
                        strengthSubTitle='SẢN PHẨM CAO'
                    />
                    <AboutStrength
                        strengthTitle='DỊCH VỤ'
                        strengthSubTitle='KHÁCH HÀNG TẬN TÂM'
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
