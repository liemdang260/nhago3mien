import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const footerContent = [
    'GIỚI THIỆU',
    'LIÊN HỆ',
    'HƯỚNG DẪN THANH TOÁN',
    'QUY TRÌNH THI CÔNG',
    'CHÍNH SÁCH BẢO MẬT',
    'CHÍNH SÁCH VÀ QUI ĐỊNH CHUNG',
    'THÔNG TIN CHUYỂN KHOẢN',
]

const additionalData = [
    { title: 'Địa chỉ', data: '410 đường 3/2 phường 12, quận 10, TP.HCM.', icon: faLocationDot },
    { title: 'Điện thoại', data: '0932.112.365 - 1900.55.88.05 - 0909.377.365 - anphu365@gmail.com.', icon: faPhone },
    { title: 'Xưởng', data: 'Ấp 2, Nhị Bình 15, Nhị Bình, Hóc Môn, TP. Hồ Chí Minh.', icon: faLocationDot },
]

function Footer() {
    return (
        <footer className='min-h-screen bg-[#6D594C] text-white'>
            <div className="container flex pt-24 pb-4">
                <div className='w-full px-3'>
                    <p className='text-lg text-[#EBC804] font-semibold mb-2'>THÔNG TIN</p>
                    <ul className='mb-5'>
                        {
                            footerContent && footerContent.map((value, index) => (
                                <li key={index} className='border-b-[1px] border-b-slate-700'><a href="#" className='text-xs font-medium block py-3 hover:text-slate-900'>{value}</a></li>
                            ))
                        }
                    </ul>
                    <p className='mb-2 text-lg'>NHAGO3MIEN.VN</p>
                    <ul>
                        {
                            additionalData && additionalData.map((value, index) => (
                                <li key={index}>
                                    <a href="#" className='inline-block py-2'>
                                        <FontAwesomeIcon icon={value.icon} size="sm" />
                                        <span className='font-bold ml-1'>{`${value.title}:`}</span>
                                        &nbsp;&nbsp;
                                        <span className='italic'>{`${value.data}`}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='w-full px-3'>
                    <iframe width="340px" height="315" src="https://www.youtube.com/embed/U4zXjF7BERE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='mb-2 mx-auto'></iframe>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/nhagoanphu/" width="340px" className='mx-auto' scrolling="no" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className='w-full px-3'>
                    <p className='text-lg text-[#EBC804] font-medium mb-2'>VĂN PHÒNG</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.97203729174618!2d106.66893369473243!3d10.768923021706454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeeb053f527%3A0x6e3c75a92c836343!2zTuG7mWkgVGjhuqV0IEFucGh1Y28!5e0!3m2!1svi!2s!4v1633224607454!5m2!1svi!2s" width="100%" height="200" className='border-none' allowFullScreen loading="lazy"></iframe>

                    <p className='text-lg text-[#EBC804] font-medium mt-6 mb-2'>XƯỞNG</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d291.1908339905687!2d106.67389955711685!3d10.904252836231274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f32a9425d0ef026!2zTmjDoCBn4buXIEFuIFBow7o!5e0!3m2!1svi!2sus!4v1632554411471!5m2!1svi!2sus" width="100%" height="200" className='border-none' allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
            <div className='bg-[#603814] h-20 flex flex-col justify-center items-center'>
                <p className='text-xs'><span className='text-red-600 font-bold text-lg'>(*)</span> Có sử dụng 1 số hình ảnh trên Google để khách hàng tham khảo</p>
                <p className='font-bold text-lg'>Copyright © 2021 Nhago3mien.vn</p>
            </div>
        </footer>
    )
}

export default Footer