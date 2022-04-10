import Image from 'next/image';
import styles from 'styles/Header.module.css';

export default function Header() {
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
                <ul className='flex justify-between container text-white px-16 text-'>
                    <li><a className={`p-4 inline-block font-semibold ${styles.active}`} href="#">TRANG CHỦ</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">GIỚI THIỆU</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">MẪU NHÀ GỖ ĐẸP</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">DỊCH VỤ</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">TIN TỨC</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">HƯỚNG DẪN</a></li>
                    <li><a className='p-4 inline-block font-semibold' href="#">LIÊN HỆ</a></li>
                </ul>
            </nav>
        </header>
    );
}