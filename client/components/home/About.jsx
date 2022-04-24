import React from 'react';
// import Banner from 'components/home/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCube } from 'swiper';
import Image from 'next/image';
import Title from 'components/common/Title';

const images = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg'];

function About() {
    return (
        <div className='container'>
            <Title title='Về chúng tôi' />
            <div className='flex justify-end relative mt-8'>
                <div className='z-10 w-[533.3333px] absolute top-1/2 -translate-y-1/2 left-0 after:absolute after:w-full after:h-6 after:bg-[#f7f5f3] before:absolute before:w-full before:h-3 before:bg-[#f7f5f3] before:bottom-full'>
                    <Swiper
                        modules={[Pagination, Autoplay, EffectCube]}
                        effect='cube'
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        pagination={{ clickable: true }}
                        // onSlideChange={() => console.log('slide change')}
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
                <div className='w-3/4 pl-[17rem] py-10 pr-8 font-nunito border-2 border-primary-color relative'>
                    <p className='text-primary-color font-bold text-lg mb-4'>
                        Nhà gỗ Ba miền xin kính chào Quý khách hàng!
                    </p>
                    <p className='mb-2 leading-7 text-justify'>
                        <span className='text-primary-color font-medium'>
                            Nhà gỗ Ba miền
                        </span>{' '}
                        là những người con của quê hương Làng mộc Đạt Tài, trải
                        qua nhiều thế hệ cha chuyền con nối, chúng tôi tự hào
                        với đội ngũ thợ kinh nghiệm có tay nghề và trình độ cao
                        cùng với nhóm thiết kế tận tâm, chuyên nghiệp, áp dụng
                        các công nghệ mô phỏng, diễn họa 3D mới nhất trên máy
                        tính, chúng tôi có thể thể hiện chính xác bằng hình ảnh
                        3D, video ngôi nhà mà khách hàng mong muốn trên máy tính
                        trước khi được thi công. Công ty nhà gỗ Ba Miền chúng
                        tôi chuyên thiết kế, thi công, lắp đặt nhà gỗ và cung
                        cấp các sản phẩm từ gỗ trên toàn quốc. Chúng tôi tự tin
                        mang đến cho bạn sự hài lòng về sản phẩm chất lượng với
                        giá hợp lý nhất!
                    </p>
                    <h5 className='text-color mb-2 italic'>
                        Quy trình làm việc:
                    </h5>
                    <ol className='list-decimal ml-4 leading-7 text-justify'>
                        <li>
                            Lấy ý tưởng của khách hàng (nếu khách hàng chưa có ý
                            tưởng, chúng tôi sẽ tư vấn).
                        </li>
                        <li>
                            Thiết kế và diễn họa 3D cho khách hàng xem để xác
                            nhận trước khi làm.
                        </li>
                        <li>Gia công và láp giáp.</li>
                    </ol>
                    <p className='bg-[#f7f5f3] px-4 absolute bottom-0 translate-y-1/2 text-2xl italic font-semibold text-primary-color right-10'>
                        Nhà gỗ Ba miền
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
