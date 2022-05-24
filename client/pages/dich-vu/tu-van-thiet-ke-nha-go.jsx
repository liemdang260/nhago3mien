import React from 'react';
import NewsWrapper from 'components/common/NewsWrapper';
import Image from 'next/image';

function TuVanThietKeNhaGo() {
    return (
        <NewsWrapper
            pathname={{
                title: 'Tư vấn thiết kế nhà gỗ',
                link: '/dich-vu/tu-van-thiet-ke-nha-go',
            }}
        >
            <div className='p-5'>
                <h2 className='font-bold text-xl text-primary-color text-center'>
                    Tư vấn thiết kế nhà gỗ
                </h2>
                <br />
                <div>
                    <p>
                        Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến khách
                        hàng, các bước trong dịch vụ thiết kế của chúng tôi gồm:
                    </p>
                    <br />
                    <p>1) Gặp gỡ trao đổi với khách hàng</p>
                    <div className='flex justify-center flex-col'>
                        <div className='w-full xl:h-[500px] h-[200px]  relative overflow-hidden'>
                            <Image
                                src='/gap-go-khach-hang.png'
                                alt='gap go khach hang'
                                layout='fill'
                                objectFit={'contain'}
                                // className='hover:scale-105 ease-linear duration-150'
                            ></Image>
                        </div>
                        <span className='text-center text-xs italic'>
                            Gặp gỡ trao đổi với khách hàng
                        </span>
                    </div>
                    <br />
                    <p>2) Khảo sát địa hình thực tế</p>
                    <div className='flex justify-center flex-col'>
                        <div className='w-full xl:h-[480px] h-[200px]  relative overflow-hidden'>
                            <Image
                                src='/khao-sat-dia-hinh-thuc-te.png'
                                alt='khao-sat-dia-hinh-thuc-te'
                                layout='fill'
                                objectFit={'contain'}
                                // className='hover:scale-105 ease-linear duration-150'
                            ></Image>
                        </div>
                        <span className='text-center text-xs italic'>
                            Khảo sát địa hình thực tế
                        </span>
                    </div>
                    <br />
                    <p>3) Lên ý tưởng (Diễn họa bằng mô hình, hình ảnh 3D)</p>

                    <div className='flex justify-center flex-col'>
                        <div className='w-full xl:h-[780px] h-[350px]  relative overflow-hidden'>
                            <Image
                                src='/len-y-tuong.png'
                                alt='len-y-tuong'
                                layout='fill'
                                objectFit={'contain'}
                                // className='hover:scale-105 ease-linear duration-150'
                            ></Image>
                        </div>
                        <span className='text-center text-xs italic'>
                            Lên ý tưởng (Diễn họa bằng mô hình, hình ảnh 3D)
                        </span>
                    </div>
                    <br />
                    <div className='flex justify-center flex-col'>
                        <div className='w-full xl:h-[430px] h-[200px]  relative overflow-hidden'>
                            <Image
                                src='/y-tuong-3d.png'
                                alt='y-tuong-3d'
                                layout='fill'
                                objectFit={'contain'}
                                // className='hover:scale-105 ease-linear duration-150'
                            ></Image>
                        </div>
                        <span className='text-center text-xs italic'>
                            Diễn họa bằng mô hình, hình ảnh 3D
                        </span>
                    </div>
                    <p>4) Chốt ý tưởng với khách hàng</p>

                    <div className='flex justify-center flex-col'>
                        <div className='w-full xl:h-[380px] h-[200px]  relative overflow-hidden'>
                            <Image
                                src='/chot-y-tuong.png'
                                alt='chot-y-tuong'
                                layout='fill'
                                objectFit={'contain'}
                                // className='hover:scale-105 ease-linear duration-150'
                            ></Image>
                        </div>
                        <span className='text-center text-xs italic'>
                            Chốt ý tưởng với khách hàng
                        </span>
                    </div>
                </div>
            </div>
        </NewsWrapper>
    );
}

export default TuVanThietKeNhaGo;
