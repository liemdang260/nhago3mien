import { useRouter } from 'next/router';
import { Navigation, Thumbs } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import AllHomeTemplate, { dummyData } from '..';
import Image from 'next/image';
import { useState } from 'react';
import Title from 'components/common/Title';

const DetailHomeTemplate = () => {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { loaiNhaID, mauNhaID } = router.query;
    const ProductImagesSlider = (props) => {
        return (
            <div>
                <div className='flex flex-col sm:flex-row my-10'>
                    <div className='w-full sm:w-3/5 overflow-hidden p-2 inline-block'>
                        <Swiper
                            loop={true}
                            spaceBetween={8}
                            navigation={true}
                            modules={[Navigation, Thumbs]}
                            gradCursor={true}
                            thumbs={{
                                swiper: thumbsSwiper,
                            }}
                            className='product-image-sliders'
                        >
                            {props.images.map((_item, _index) => (
                                <SwiperSlide key={_index}>
                                    <Image
                                        layout='responsive'
                                        src={_item.linkImage}
                                        alt='Slider Images'
                                        height={150}
                                        width={250}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            // onSwiper={setThumbsSwiper}
                            watchSlidesProgress={true}
                            loop={true}
                            spaceBetween={5}
                            slidesPerView={5}
                            modules={[Thumbs]}
                            className='product-image-thumbnails p-2'
                        >
                            {props.images.map((_item, _index) => (
                                <SwiperSlide key={_index}>
                                    <div className='product-images-thumbs-wrapper'>
                                        <Image
                                            layout='responsive'
                                            src={_item.linkImage}
                                            alt='Slider Images'
                                            height={150}
                                            width={250}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='inline-block p-7 h-full w-11/12 mx-4 sm:w-2/5 sm:ml-10 border border-black'>
                        <p className='text-primary-color text-lg font-bold inline-block my-2'>
                            Loại nhà:
                        </p>{' '}
                        {mauNhaID}
                        <br />
                        <p className='text-primary-color text-lg font-bold inline-block my-2'>
                            Miêu tả:
                        </p>{' '}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                        <p className='text-primary-color text-lg font-bold inline-block my-2'>
                            Thông tin khác:
                        </p>{' '}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </div>
                </div>

                {/* hr */}
                <Title title='Những mẫu nhà đẹp khác' />
                <AllHomeTemplate />
            </div>
        );
    };

    return (
        <>
            <div className='container'>
                {/* Carosel image */}
                <ProductImagesSlider images={dummyData.slice(0, 10)} />
            </div>
            <style>{`
                .product-image-sliders .swiper:hover .swiper-button-prev, .swiper:hover .swiper-button-next {                    
                    transform: translateX(0) translateY(-40%);
                }
                .product-image-sliders .swiper-button-prev,
                .product-image-sliders .swiper-button-next {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 2rem 1.5rem;                            
                    transition: transform 0.3s;
                    will-change: transform;
                    transform-origin: top;                    
                }
                .product-image-sliders .swiper-button-prev:hover,
                .product-image-sliders .swiper-button-next:hover {                    
                    transform: scale(1.1) translateY(-45%) translateX(0) !important;
                }
                .product-image-sliders .swiper-button-prev {
                    left: 0;
                    transform: translateY(-40%) translateX(-100%);
                }
                .product-image-sliders .swiper-button-next {
                    right: 0;
                    transform: translateY(-40%) translateX(100%);
                }
                .product-image-sliders .mySwiper {                    
                    min-height: 350px;
                    margin-top: 40px;
                }      
                .product-image-slidersv .mySwiper .swiper-pagination {
                    bottom: 0
                }

                .product-image-thumbnails .swiper-slider {
                    cursor: pointer;
                    border: 1px solid #dddbdb;
                }
                .swiper-slider-thumb-active {
                    border-color: #ff02f2;
                }

                .product-images-thumbs-wrapper{
                    width: 100%;
                    padding-top: 30%;
                    overflow: hidden;
                    position:  relative
                }


            `}</style>
        </>
    );
};

export default DetailHomeTemplate;
