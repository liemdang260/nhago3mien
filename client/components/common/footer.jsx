import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const footerContent = [
    'GIỚI THIỆU',
    'LIÊN HỆ',
    'HƯỚNG DẪN THANH TOÁN',
    'QUY TRÌNH THI CÔNG',
    'CHÍNH SÁCH BẢO MẬT',
    'CHÍNH SÁCH VÀ QUI ĐỊNH CHUNG',
    'THÔNG TIN CHUYỂN KHOẢN',
];

const additionalData = [
    {
        title: 'Địa chỉ',
        data: '410 đường 3/2 phường 12, quận 10, TP.HCM.',
        icon: faLocationDot,
    },
    {
        title: 'Điện thoại',
        data: '096.211.6789 - 0977.325.561',
        icon: faPhone,
    },
    {
        title: 'Email',
        data: 'info@nhagobamien.vn',
        icon: faEnvelope,
    },
    {
        title: 'Xưởng',
        data: 'Ấp 2, Nhị Bình 15, Nhị Bình, Hóc Môn, TP. Hồ Chí Minh.',
        icon: faLocationDot,
    },
];

function Footer() {
    return (
        <footer className='min-h-screen bg-[#6D594C] text-white relative'>
            <div className='container flex pt-24 pb-4'>
                <div className='w-4/12 px-3'>
                    <p className='mb-2 text-lg font-semibold border-b-2 border-b-white inline-block'>
                        Nhà Gỗ Ba Miền
                    </p>
                    <ul>
                        {additionalData &&
                            additionalData.map((value, index) => (
                                <li key={index}>
                                    <a href='#' className='inline-block py-2'>
                                        <FontAwesomeIcon
                                            icon={value.icon}
                                            size='sm'
                                        />
                                        <span className='font-bold ml-1'>{`${value.title}:`}</span>
                                        &nbsp;&nbsp;
                                        <span className='italic'>{`${value.data}`}</span>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className='w-8/12 px-3'>
                    <p className='text-lg text-[#EBC804] font-medium mb-2'>
                        VĂN PHÒNG
                    </p>
                    <div className='flex -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.97203729174618!2d106.66893369473243!3d10.768923021706454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeeb053f527%3A0x6e3c75a92c836343!2zTuG7mWkgVGjhuqV0IEFucGh1Y28!5e0!3m2!1svi!2s!4v1633224607454!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                        <div className='w-1/2 border-2 border-white text-center px-3'>
                            Hình ảnh văn phòng
                        </div>
                    </div>

                    <p className='text-lg text-[#EBC804] font-medium mt-6 mb-2'>
                        XƯỞNG
                    </p>
                    <div className='flex -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d291.1908339905687!2d106.67389955711685!3d10.904252836231274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f32a9425d0ef026!2zTmjDoCBn4buXIEFuIFBow7o!5e0!3m2!1svi!2sus!4v1632554411471!5m2!1svi!2sus'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                        <div className='w-1/2 border-2 border-white text-center px-3'>
                            Hình ảnh xưởng
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#603814] h-20 flex flex-col justify-center items-center absolute bottom-0 w-full'>
                <p className='text-xs'>
                    <span className='text-red-600 font-bold text-lg'>(*)</span>{' '}
                    Có sử dụng 1 số hình ảnh trên Google để khách hàng tham khảo
                </p>
                <p className='font-bold text-lg'>
                    Copyright © 2022 nhagobamien.vn
                </p>
            </div>
        </footer>
    );
}

export default Footer;
