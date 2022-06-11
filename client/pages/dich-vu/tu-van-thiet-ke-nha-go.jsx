import React from 'react';
import NewsWrapper from 'components/common/NewsWrapper';
import Image from 'next/image';
import Head from 'next/head';

function TuVanThietKeNhaGo() {
    return (
        <>
            <Head>
                <title>
                    Tư vấn | Thiết kế | Thi công nhà gỗ - Nhagobamien.vn
                </title>
                <meta
                    name='keywords'
                    content='Tư vấn, thiết kế, thi công nhà gỗ'
                />
                <meta
                    name='description'
                    content='Nhà Gỗ Ba Miền là công ty thiết kế nội thất và xây dựng đáng tin cậy cung cấp dịch vụ thiết kế nội thất gia đình và kiến trúc nhà ở. Gọi cho chúng tôi ngay.'
                />
            </Head>
            <NewsWrapper
                pathname={{
                    title: 'Tư vấn thiết kế nhà gỗ',
                    link: '/dich-vu/tu-van-thiet-ke-nha-go',
                }}
            >
                <div className=''>
                    <h2 className='text-primary-color font-black text-2xl text-center py-8'>
                        Tư vấn thiết kế nhà gỗ
                    </h2>
                    <br />
                    <div>
                        <p>
                            Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến
                            khách hàng, các bước trong dịch vụ thiết kế của
                            chúng tôi gồm:
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
                        <p>
                            3) Lên ý tưởng (Diễn họa bằng mô hình, hình ảnh 3D)
                        </p>

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
                    <div className='w-full bg-gray-200 px-4 py-4 text-center my-8'>
                        <h1
                            className='text-red-600'
                            style={{ fontSize: 24, fontWeight: 700 }}
                        >
                            Nhà gỗ Ba Miền
                        </h1>
                        <address className='text-sm md:text-lg leading-loose font-normal'>
                            Địa chỉ: 72/24 Phan Đăng Lưu, Phường 5, Quận Phú
                            Nhuận, TP.HCM. <br />
                            Văn phòng chi nhánh: 305/35 TA28, Quận 12, TP.HCM{' '}
                            <br />
                            Xưởng: Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa,
                            Tỉnh Thanh Hóa. <br />
                            Điện thoại:{' '}
                            <a className='text-red-500' href='tel:0932112365'>
                                096.211.6789
                            </a>
                            ,{' '}
                            <a className='text-red-500' href='tel:0909377365'>
                                0977.325.651
                            </a>{' '}
                            <br />
                            Email:{' '}
                            <a href='mailto:info@nhagobamien.vn'>
                                info@nhagobamien.vn
                            </a>
                        </address>
                    </div>
                </div>
            </NewsWrapper>
        </>
    );
}

export default TuVanThietKeNhaGo;

