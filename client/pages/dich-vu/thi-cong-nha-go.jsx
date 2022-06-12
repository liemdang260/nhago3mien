import React from 'react';
import NewsWrapper from 'components/common/NewsWrapper';
import ConstructionSteps from 'components/common/ConstructionSteps';
import Head from 'next/head';

function ThiCongNhaGo() {
    return (
        <>
            <Head>
                <title>Thiết kế, thi công nhà gỗ - Nhagobamien.vn</title>
                <meta name='keywords' content='Thiết kế, thi công nhà gỗ ' />
                <meta
                    name='description'
                    content='Nhà Gỗ Ba Miền là Công Ty Cổ Phần Tư Vấn Thiết Kế Xây Dựng được tín nhiệm nhất tại Việt Nam, cung cấp dịch vụ đóng nhà gỗ trọn gói với giá cả phải chăng.'
                />
            </Head>
            <NewsWrapper
                pathname={{
                    title: 'Thi công nhà gỗ',
                    link: '/dich-vu/thi-cong-nha-go',
                }}
            >
                <div>
                    <h1 className='text-primary-color font-black text-2xl text-center py-8'>
                        Thiết kế, thi công nhà gỗ 
                    </h1>
                    <br />
                    <div>
                        <p>
                            Sau khi chốt ý tưởng, thống nhất với khách hàng về
                            thiết kế, chúng tôi tiến hành các bước trong thi
                            công bao gồm:
                        </p>
                        <ConstructionSteps />
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
                            Văn phòng chi nhánh: 305/35 Đường TA28, KP5, Quận
                            12, TP.HCM <br />
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

export default ThiCongNhaGo;

