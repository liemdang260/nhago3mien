import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';

// const footerContent = [
//     'GIỚI THIỆU',
//     'LIÊN HỆ',
//     'HƯỚNG DẪN THANH TOÁN',
//     'QUY TRÌNH THI CÔNG',
//     'CHÍNH SÁCH BẢO MẬT',
//     'CHÍNH SÁCH VÀ QUI ĐỊNH CHUNG',
//     'THÔNG TIN CHUYỂN KHOẢN',
// ];

const additionalData = [
    {
        title: 'Địa chỉ',
        data: '72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận, TP.HCM.',
        icon: faLocationDot,
        linkImage: '/images/hinh-anh-van-phong.jpg',
    },
    {
        title: 'Văn phòng chi nhánh',
        data: '305/24 Đường TA28, KP5, Quận 12, TP.HCM',
        icon: faLocationDot,
        linkImage: '/images/hinh-anh-chi-nhanh.jpg',
    },
    {
        title: 'Xưởng',
        data: 'Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa, Tỉnh Thanh Hóa.',
        icon: faLocationDot,
        linkImage: '/images/hinh-anh-xuong.jpg',
    },
    {
        title: 'Điện thoại',
        data: '096.211.6789 - 0977.325.651',
        icon: faPhone,
    },
    {
        title: 'Email',
        data: 'info@nhagobamien.vn',
        icon: faEnvelope,
    },
];

function Footer() {
    return (
        <footer className='min-h-screen bg-[#6D594C] text-white relative'>
            <div className='container flex flex-col md:flex-row pt-24 pb-4 px-4 sm:px-0'>
                <div className='w-full md:w-4/12 px-3'>
                    <div className='w-full'>
                        <p className='w-full md:w-auto text-center md:text-left mb-2 m-auto text-xl md:text-lg font-semibold border-b-2 border-b-[#EBC804] inline-block text-[#EBC804]'>
                            Nhà Gỗ Ba Miền
                        </p>
                    </div>
                    <ul>
                        {additionalData &&
                            additionalData.map((value, index) => (
                                <React.Fragment key={index}>
                                    <li key={index}>
                                        <p className='inline-block py-2'>
                                            <FontAwesomeIcon
                                                icon={value.icon}
                                                size='sm'
                                            />
                                            <span className='font-bold ml-1'>{`${value.title}:`}</span>
                                            &nbsp;&nbsp;
                                            <span className='italic'>{`${value.data}`}</span>
                                        </p>
                                    </li>
                                </React.Fragment>
                            ))}
                    </ul>
                </div>
                <div className='md:w-8/12 px-3 '>
                    <p className='text-center md:text-left text-lg text-[#EBC804] font-medium mb-2'>
                        XƯỞNG
                    </p>
                    <div className='relative '>
                        <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            className=''
                            id='videoPlay'
                        >
                            <source src='/video.mp4' />
                        </video>
                    </div>
                </div>
            </div>
            <div className='bg-[#603814] h-14 absolute bottom-0 w-full'>
                <p className='font-bold text-lg text-center leading-[56px]'>
                    Copyright © 2022 nhagobamien.vn
                </p>
            </div>
        </footer>
    );
}

export default Footer;
