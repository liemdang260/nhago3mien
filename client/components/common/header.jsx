import Image from 'next/image';
import styles from 'styles/Header.module.css';
import { useState } from 'react';

const navTitle = [
    { title: 'TRANG CHỦ', isDropdown: false },
    { title: 'GIỚI THIỆU', isDropdown: false },
    { title: 'MẪU NHÀ GỖ ĐẸP', isDropdown: true, dropDownContent: ['NHÀ TỪ ĐƯỜNG', 'NHÀ GỖ HIỆN ĐẠI', 'NHÀ SÀN GỖ (DÂN TỘC)', 'NHÀ CỔ TRUYỀN', 'NHÀ LỤC GIÁC'] },
    { title: 'DỊCH VỤ', isDropdown: true, dropDownContent: ['THIẾT KẾ VÀ THI CÔNG NHÀ GỖ', 'THIẾT KẾ, THI CÔNG NỘI THẤT', 'THIẾT KẾ, THI CÔNG KHÔNG GIAN THỜ', 'CUNG CẤP ĐỒ GỖ THÀNH PHẨM'] },
    { title: 'TIN TỨC', isDropdown: false },
    { title: 'HƯỚNG DẪN', isDropdown: true, dropDownContent: ['HƯỚNG DẪN THANH TOÁN', 'HƯỚNG DẪN ĐẶT HÀNG'] },
    { title: 'LIÊN HỆ', isDropdown: false },
]
export default function Header() {
    const [index, setIndex] = useState(0);
    return (
        <header>
            <div className="bg-[#6D594C] text-white py-2">
                <div className="container flex justify-between px-16 font-medium">
                    <p className="text-[13px]">CHÀO MỪNG QUÝ KHÁCH ĐẾN VỚI: NHAGO3MIEN.VN</p>
                    <p>
                        <a href="tel:0932.112.365">0932.112.365</a> -&nbsp;
                        <a href="tel:1900.55.88.05">1900.55.88.05</a> -&nbsp;
                        <a href="tel:0909.377.365">0909.377.365</a>
                    </p>
                </div>
            </div>
            <div className='container px-8 py-6 grid grid-cols-12 gap-4'>
                <div className='col-span-5'>
                    <Image src="https://nhagoanphu.com/image/catalog/logo/Nha-go-An-Phu_03.png" alt="logo" width={189} height={107} />
                </div>
                <div className='col-span-2 px-3'>
                    <div className='border-[3px] border-primary-color rounded-3xl p-[5px]'>
                        <ul className='bg-primary-color text-white rounded-3xl flex flex-col items-center p-3'>
                            <li>icon</li>
                            <li><a href='tel:0932.112.365'>0932.112.365</a></li>
                            <li><a href='tel:1900.55.88.05'>1900.55.88.05</a></li>
                            <li><a href='tel:0909.377.365'>0909.377.365</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-5 flex flex-col ml-auto'>
                    <div className='mb-2'>
                        <Image src="https://nhagoanphu.com/image/slogan_anphu.png" alt="slogan" width={381} height={66} />
                    </div>
                    <div className="flex">
                        <input className='bg-primary-color text-white outline-0 text-sm grow py-2 px-3 rounded-l-md' type="text" placeholder='Tìm kiếm' />
                        <button className='bg-primary-color text-white py-[6px] px-3 rounded-r-md'>Tìm</button>
                    </div>
                </div>
            </div>
            <nav className='bg-primary-color'>
                <ul className='flex container text-white px-16'>
                    {
                        navTitle && navTitle.map((title, i) => (
                            <li key={i} className={`group grow relative hover:border-b-[5px] hover:border-white hover:bg-[#3B2414] transition ease-in-out duration-200 ${index === i ? styles.active : ''} `}>
                                <a className={`py-4 w-full text-center inline-block font-semibold`} href="#">{title.title}
                                    {
                                        title.isDropdown &&
                                        <p className='inline-block ml-3 text-xs -rotate-90'>&#10094;</p>
                                    }
                                </a>
                                {
                                    title.isDropdown && <ul className='absolute z-10 w-auto whitespace-nowrap bg-primary-color mt-1 hidden group-hover:block'>
                                        {
                                            title.dropDownContent && title.dropDownContent.map((item, index) => (
                                                <li key={index}><a href="#" className='block px-6 py-2 hover:bg-[#3B2414]'>{item}</a></li>
                                            ))
                                        }
                                        <li><a href="#" className='block px-6 py-3 hover:bg-[#3B2414] text-[0.8rem] border-t-2 border-slate-100 font-medium'>XEM TẤT CẢ {title.title}</a></li>
                                    </ul>
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
