import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faQuoteLeft,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
export const Services = [
    {
        title: 'THIẾT KẾ VÀ THI CÔNG NHÀ GỖ',
        link: '/dich-vu/thiet-ke-va-thi-cong-nha-go',
    },
    {
        title: 'THIẾT KẾ, THI CÔNG NỘI THẤT',
        link: '/dich-vu/thiet-ke-va-thi-cong-noi-that',
    },
    {
        title: 'THIẾT KẾ, THI CÔNG KHÔNG GIAN THỜ',
        link: '/dich-vu/thiet-ke-va-thi-cong-khong-gian-tho',
    },
    {
        title: 'CUNG CẤP ĐỒ GỖ THÀNH PHẨM',
        link: '/dich-vu/cung-cap-do-go-thanh-pham',
    },
];
const navTitle = [
    { link: '/', title: 'TRANG CHỦ', isDropdown: false },
    { link: '/gioi-thieu', title: 'GIỚI THIỆU', isDropdown: false },
    {
        link: '/mau-nha',
        title: 'MẪU NHÀ GỖ ĐẸP',
        isDropdown: true,
        dropDownContent: [
            { title: 'NHÀ TỪ ĐƯỜNG', link: '/mau-nha/mau-nha-tu-duong' },
            { title: 'NHÀ GỖ HIỆN ĐẠI', link: '/mau-nha/mau-nha-hien-dai' },
            { title: 'NHÀ SÀN GỖ (DÂN TỘC)', link: '/mau-nha/mau-nha-san' },
            { title: 'NHÀ CỔ TRUYỀN', link: '/mau-nha/mau-nha-co-truyen' },
            { title: 'NHÀ LỤC GIÁC', link: '/mau-nha/mau-nha-luc-giac' },
        ],
    },
    {
        link: '/dich-vu',
        title: 'DỊCH VỤ',
        isDropdown: true,
        dropDownContent: Services,
    },
    { link: '/tin-tuc', title: 'TIN TỨC', isDropdown: false },
    { link: '/lien-he', title: 'LIÊN HỆ', isDropdown: false },
];

export default function Header() {
    const { pathname } = useRouter();
    const { text } = useTypewriter({
        words: ['Không gian sống đậm nét truyền thống'],
        loop: 1,
        typeSpeed: 100,
        deleteSpeed: 90,
    });
    return (
        <header>
            <div className='bg-[#6D594C] text-white py-2'>
                <div className='container overflow-hidden'>
                    <span className='text-[13px] inline-block font-semibold animate-textScrolling'>
                        CHÀO&nbsp; MỪNG&nbsp; QUÝ&nbsp; KHÁCH&nbsp; ĐẾN&nbsp;
                        VỚI&nbsp; NHÀ&nbsp; GỖ&nbsp; BA MIỀN!
                    </span>
                </div>
            </div>
            <div className='container px-8 py-6 flex justify-between items-center'>
                <div className=''>
                    <Image
                        src='https://nhagoanphu.com/image/catalog/logo/Nha-go-An-Phu_03.png'
                        alt='logo'
                        width={189}
                        height={107}
                    />
                </div>
                <div className='px-3 text-[1.625rem]'>
                    <blockquote className='font-nunito text-color'>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <span className='font-semibold ml-2 align-sub'>
                            {text}
                        </span>
                    </blockquote>
                </div>
                <div className='flex flex-col basis-[250px]'>
                    <div className='mb-2'>
                        <ul>
                            <li>
                                <a href='tel:0962116789'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        color='#003F5C'
                                    />
                                    <span className='font-normal ml-2 text-lg text-color'>
                                        096.211.6789
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='tel:0977325561'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        color='#003F5C'
                                    />
                                    <span className='font-normal ml-2 text-lg text-color'>
                                        0977.325.561
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='mailto:info@nhagobamien.vn'>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        color='#003F5C'
                                    />
                                    <span className='font-normal ml-2 text-lg text-color'>
                                        info@nhagobamien.vn
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex bg-primary-color px-4 py-2 rounded-md w-full'>
                        <input
                            className='bg-primary-color text-white outline-0 text-sm grow'
                            type='text'
                            placeholder='Tìm kiếm'
                        />
                        <button className='bg-primary-color text-white rounded-r-md'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
            <nav className='bg-primary-color'>
                <ul className='flex container text-white px-28'>
                    {navTitle &&
                        navTitle.map((title, i) => (
                            <li
                                key={i}
                                className={`group grow relative hover:border-b-[5px] hover:border-white hover:bg-[#3B2414] transition ease-in-out duration-200 ${
                                    title.link === pathname ||
                                    (title.link !== '/' &&
                                        pathname.startsWith(title.link))
                                        ? styles.active
                                        : ''
                                } `}
                            >
                                <Link href={title.link}>
                                    <a
                                        className={`py-4 w-full text-center inline-block font-semibold`}
                                    >
                                        {title.title}
                                        {title.isDropdown && (
                                            <p className='inline-block ml-3 text-xs -rotate-90'>
                                                &#10094;
                                            </p>
                                        )}
                                    </a>
                                </Link>
                                {title.isDropdown && (
                                    <ul className='absolute z-10 w-auto whitespace-nowrap bg-primary-color mt-1 hidden group-hover:block'>
                                        {title.dropDownContent &&
                                            title.dropDownContent.map(
                                                (item, index) => (
                                                    <li key={index}>
                                                        <Link href={item.link}>
                                                            <a className='block px-6 py-2 hover:bg-[#3B2414]'>
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        <li>
                                            <Link href={title.link}>
                                                <a className='block px-6 py-3 hover:bg-[#3B2414] text-[0.8rem] border-t-2 border-slate-100 font-medium'>
                                                    XEM TẤT CẢ {title.title}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}
