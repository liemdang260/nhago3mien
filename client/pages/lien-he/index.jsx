import { PageItem, PageWrapper } from 'components/common/PageWrapper';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';
import Category from 'components/common/SideBar/Category';
import Support from 'components/common/SideBar/Support';
import Contact from 'components/common/SideBar/Contact';
import NewsWrapper from 'components/common/NewsWrapper';

const ContactPage = () => {
    return (
        <NewsWrapper
            pathname={{ title: 'Liên hệ với chúng tôi', link: '/lien-he' }}
        >
            <div
                className='pl-4 pt-4 pr-4 w-full  flex flex-col text-center 
                    justify-center items-center '
            >
                <div className='w-full bg-gray-200 px-4 py-4'>
                    <h1
                        className='text-red-600'
                        style={{ fontSize: 24, fontWeight: 700 }}
                    >
                        Nhà gỗ Ba Miền
                    </h1>
                    <address className='text-sm md:text-lg leading-loose font-normal'>
                        Địa chỉ: 72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận,
                        TP.HCM. <br />
                        Văn phòng chi nhánh: 72 Lê Thị Riêng, Quận 12, TP.HCM.{' '}
                        <br />
                        Xưởng: Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa, Tỉnh
                        Thanh Hóa. <br />
                        Điện thoại:{' '}
                        <a className='text-red-500' href='tel:0932112365'>
                            096.211.6789
                        </a>
                        ,{' '}
                        <a className='text-red-500' href='tel:0909377365'>
                            0977.325.561
                        </a>{' '}
                        <br />
                        Email:{' '}
                        <a href='mailto:info@nhagobamien.vn'>
                            info@nhagobamien.vn
                        </a>
                    </address>
                </div>
                <div className='w-full'>
                    <h1
                        className='uppercase text-blue-800 my-4'
                        style={{ fontWeight: 700, fontSize: 24 }}
                    >
                        Thông tin liên hệ
                    </h1>
                    <div className='flex flex-col md:grid grid-cols-4 grid-rows-4 gap-x-2 gap-y-5 text-sm md:text-base'>
                        <div className='col-span-2'>
                            <input
                                placeholder='Họ và tên (*)'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                            />
                        </div>
                        <div className='row-span-3 col-span-2'>
                            <textarea
                                placeholder='Nội dung (*)'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full h-full'
                            />
                        </div>
                        <div className='col-span-2'>
                            <input
                                placeholder='Email (*)'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                            />
                        </div>
                        <div className='col-span-2'>
                            <input
                                placeholder='Địa chỉ'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                            />
                        </div>
                        <div className='col-span-2'>
                            <input
                                placeholder='Số điện thoại (*)'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                            />
                        </div>
                        <div className='col-span-1'>
                            <input
                                placeholder='Nhập mã Capcha (*)'
                                className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                            />
                        </div>
                        <div
                            className='col-span-1 border border-[#000] border-solid font-bold 
                            flex justify-center items-center'
                        >
                            a125636
                        </div>
                        <div className='bg-lime-500 col-start-4 px-5 py-2 rounded-lg'>
                            <button className='font-bold w-10/12'>
                                Gửi đi
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full p-3'>
                    <p className='text-lg text-[#EBC804] font-medium mb-2'>
                        VĂN PHÒNG CHÍNH
                    </p>
                    <div className='flex flex-col md:flex-row -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.94332500712235!2d106.68565172082386!3d10.804173565120054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929eef7c3af%3A0x7d895e1a0f2e8da7!2sBIM%20Solutions%20Viet%20Nam%20JSC!5e0!3m2!1svi!2s!4v1651141887804!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            style={{ width: '100%' }}
                        ></iframe>
                        <div className='w-full md:w-1/2 border-2 border-primary-color text-center px-3'>
                            Hình ảnh văn phòng
                        </div>
                    </div>

                    <p className='text-lg text-[#EBC804] font-medium mb-2 mt-6'>
                        VĂN PHÒNG CHI NHÁNH
                    </p>
                    <div className='flex flex-col md:flex-row -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89156011577015!2d106.65459986360327!3d10.86744069802732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c2c8baf797%3A0x2ea5e9a981a6dd0d!2zNzIgxJAuIEzDqiBUaOG7iyBSacOqbmcsIFTDom4gVGjhu5tpIEFuLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1651142129818!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            style={{ width: '100%' }}
                        ></iframe>
                        <div className='w-full md:w-1/2 border-2 border-primary-color text-center px-3'>
                            Hình ảnh văn phòng chi nhánh
                        </div>
                    </div>

                    <p className='text-lg text-[#EBC804] font-medium mt-6 mb-2'>
                        XƯỞNG
                    </p>
                    <div className='flex flex-col md:flex-row -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.126006595658!2d105.89125381488554!3d19.876900486633485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31365beef9b42659%3A0x195eef7d0bad20cb!2zSMOgIFRow6FpLCBYw6MgSG_hurFuZyBIw6AsIEhv4bqxbmcgSG_DoSwgVGhhbmggSG_DoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1651142489906!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            style={{ width: '100%' }}
                        ></iframe>
                        <div className='w-full md:w-1/2 border-2 border-primary-color text-center px-3'>
                            Hình ảnh xưởng
                        </div>
                    </div>
                </div>
            </div>
        </NewsWrapper>
    );
};

export default ContactPage;
