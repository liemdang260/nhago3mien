import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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
        dropDownContent: [
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
        ],
    },
    { link: '/tin-tuc', title: 'TIN TỨC', isDropdown: false },
    {
        link: '/huong-dan',
        title: 'HƯỚNG DẪN',
        isDropdown: true,
        dropDownContent: [
            {
                title: 'HƯỚNG DẪN THANH TOÁN',
                link: '/huong-dan/huong-dan-thanh-toan',
            },
            {
                title: 'HƯỚNG DẪN ĐẶT HÀNG',
                link: '/huong-dan/huong-dan-dat-hang',
            },
        ],
    },
    { link: '/lien-he', title: 'LIÊN HỆ', isDropdown: false },
];
export default function Header() {
    const [index, setIndex] = useState(0);
    return (
        <header>
            <div className='bg-[#6D594C] text-white py-2'>
                <div className='container flex justify-between px-16 font-medium'>
                    <p className='text-[13px]'>
                        CHÀO MỪNG QUÝ KHÁCH ĐẾN VỚI: NHAGO3MIEN.VN
                    </p>
                    <p>
                        <a href='tel:0932.112.365'>0932.112.365</a> -&nbsp;
                        <a href='tel:1900.55.88.05'>1900.55.88.05</a> -&nbsp;
                        <a href='tel:0909.377.365'>0909.377.365</a>
                    </p>
                </div>
            </div>
            <div className='container px-8 py-6 grid grid-cols-12 gap-4'>
                <div className='col-span-5'>
                    <Image
                        src='https://nhagoanphu.com/image/catalog/logo/Nha-go-An-Phu_03.png'
                        alt='logo'
                        width={189}
                        height={107}
                    />
                </div>
                <div className='col-span-2 px-3'>
                    <div className='border-[3px] border-primary-color rounded-3xl p-[5px]'>
                        <ul className='bg-primary-color text-white rounded-3xl flex flex-col items-center p-3'>
                            <li className='h-9 w-9 border-2 border-white rounded-full text-center leading-8'>
                                <FontAwesomeIcon icon={faPhone} />
                            </li>
                            <li className='font-semibold'>
                                <a href='tel:0932.112.365'>0932.112.365</a>
                            </li>
                            <li className='font-semibold'>
                                <a href='tel:1900.55.88.05'>1900.55.88.05</a>
                            </li>
                            <li className='font-semibold'>
                                <a href='tel:0909.377.365'>0909.377.365</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-5 flex flex-col ml-auto'>
                    <div className='mb-2'>
                        <Image
                            src='https://nhagoanphu.com/image/slogan_anphu.png'
                            alt='slogan'
                            width={381}
                            height={66}
                        />
                    </div>
                    <div className='flex bg-primary-color px-4 py-2 rounded-md'>
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
                <ul className='flex container text-white px-16'>
                    {navTitle &&
                        navTitle.map((title, i) => (
                            <li
                                key={i}
                                className={`group grow relative hover:border-b-[5px] hover:border-white hover:bg-[#3B2414] transition ease-in-out duration-200 ${
                                    index === i ? styles.active : ''
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
                                            <a
                                                href='#'
                                                className='block px-6 py-3 hover:bg-[#3B2414] text-[0.8rem] border-t-2 border-slate-100 font-medium'
                                            >
                                                XEM TẤT CẢ {title.title}
                                            </a>
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
