import NewsWrapper from 'components/common/NewsWrapper';
import React from 'react';
import Image from 'next/image';

function Furniture() {
    return (
        <NewsWrapper
            pathname={{
                title: 'Thiết kế và thi công nội thất',
                link: 'thiet-ke-va-thi-cong-noi-that',
            }}
        >
            <p className='text-primary-color font-black text-2xl text-center py-8'>
                Thiết kế và thi công nội thất
            </p>
            <div className='mt-8 mb-16 after:clear-left after:table'>
                <div className='float-right ml-5'>
                    <Image
                        src={
                            '/images/services/thiet-ke-thi-cong-noi-that/pic1.jpg'
                        }
                        alt='Thiet ke thi cong noi that 1'
                        height={204}
                        width={272}
                    />
                </div>
                <p className='leading-8 text-justify'>
                    <span className='text-primary-color font-semibold italic'>
                        Thiết kế thi công nội thất
                    </span>{' '}
                    theo yêu cầu của khách hàng là một trong những dịch vụ cốt
                    lõi của Nhà Gỗ Ba Miền chúng tôi. Với kinh nghiệm và tay
                    nghề cao (đục, trạm, khắc…) của các thợ lành nghề được tuyển
                    chọn kỹ trong làng mộc truyền thống Hà Thái Chúng tôi đã
                    hoàn thành hàng trăm dự án mỗi năm và làm hài lòng tất cả
                    các khách hàng khi đến với Nhà Gỗ Ba Miền.
                </p>
                <div className='clear-right py-4'></div>
                <div className='float-left mr-5'>
                    <Image
                        src={
                            '/images/services/thiet-ke-thi-cong-noi-that/pic2.jpg'
                        }
                        alt='Thiet ke thi cong noi that 1'
                        height={272}
                        width={272}
                    />
                </div>
                <p className='leading-8 text-justify'>
                    Một vài sản phẩm điển hình trong thiết kế nội thất mà Nhà Gỗ
                    Ba Miền chúng tôi cung cấp như Cửa, Trần, Cầu Thang, Ốp
                    Tường… cho đến Bàn ghế, Giường , Tủ quần áo, Tủ trưng bày…
                </p>
            </div>
            <div className='w-full bg-gray-200 px-4 py-4 text-center my-8'>
                <h1
                    className='text-red-600'
                    style={{ fontSize: 24, fontWeight: 700 }}
                >
                    Nhà gỗ Ba Miền
                </h1>
                <address className='text-sm md:text-lg leading-loose font-normal'>
                    Địa chỉ: 72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận,
                    TP.HCM. <br />
                    Văn phòng chi nhánh: 305/35 TA28, Quận 12, TP.HCM <br />
                    Xưởng: Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa, Tỉnh
                    Thanh Hóa. <br />
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
                    <a href='mailto:info@nhagobamien.vn'>info@nhagobamien.vn</a>
                </address>
            </div>
        </NewsWrapper>
    );
}

export default Furniture;
