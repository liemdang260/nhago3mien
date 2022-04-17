import { PageItem, PageWrapper } from 'components/common/PageWrapper';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';
import Category from 'components/common/SideBar/Category';
import Support from 'components/common/SideBar/Support';
import Contact from 'components/common/SideBar/Contact';

const ContactPage = () => {
    return (
        <PageWrapper>
            <PageItem>
                {' '}
                <Breadcrumb
                    location={[
                        { title: 'Trang chủ', link: '/' },
                        {
                            title: 'Liên hệ với chúng tôi',
                            link: '/lien-he',
                        },
                    ]}
                />
            </PageItem>
            <PageItem>
                <Category />
                <Support />
                <Contact />
            </PageItem>
            <PageItem>
                <div
                    className='pl-4 pt-4 pr-4 w-full  flex flex-col text-center 
                    justify-center items-center '
                >
                    <div className='w-full bg-gray-200 px-4 py-4'>
                        <h1
                            className='text-red-600'
                            style={{ fontSize: 24, fontWeight: 700 }}
                        >
                            Nhà gỗ An Phú
                        </h1>
                        <address className='text-lg leading-loose font-normal'>
                            Địa chỉ: 410 đường 3/2 phường 12, quận 10, TP.HCM{' '}
                            <br />
                            Xưởng: Ấp 2, Nhị Bình 15, Nhị Bình, Hóc Môn, TP. Hồ
                            Chí Minh. <br />
                            Mobile:{' '}
                            <a className='text-red-500' href='tel:0932112365'>
                                0932112365
                            </a>
                            ,{' '}
                            <a className='text-red-500' href='tel:1900558805'>
                                1900558805
                            </a>
                            ,{' '}
                            <a className='text-red-500' href='tel:0909377365'>
                                0909377365
                            </a>{' '}
                            <br />
                            Email:{' '}
                            <a href='mailto:someone@example.com'>
                                someone@example.com
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
                        <div className='grid grid-cols-4 grid-rows-4 gap-x-2 gap-y-5'>
                            <div className='col-span-2'>
                                <input
                                    placeholder='Họ và tên (*)'
                                    className='border-solid border border-slate-400
                                    px-5 py-1 w-full'
                                />
                            </div>
                            <div className='row-span-3 col-span-2'>
                                <textarea
                                    placeholder='Email (*)'
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

                    <div className='w-full px-3'>
                        <p className='text-lg text-[#EBC804] font-medium mb-2'>
                            VĂN PHÒNG
                        </p>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.97203729174618!2d106.66893369473243!3d10.768923021706454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeeb053f527%3A0x6e3c75a92c836343!2zTuG7mWkgVGjhuqV0IEFucGh1Y28!5e0!3m2!1svi!2s!4v1633224607454!5m2!1svi!2s'
                            width='100%'
                            height='200'
                            className='border-none'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>

                        <p className='text-lg text-[#EBC804] font-medium mt-6 mb-2'>
                            XƯỞNG
                        </p>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d291.1908339905687!2d106.67389955711685!3d10.904252836231274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f32a9425d0ef026!2zTmjDoCBn4buXIEFuIFBow7o!5e0!3m2!1svi!2sus!4v1632554411471!5m2!1svi!2sus'
                            width='100%'
                            height='200'
                            className='border-none'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>
            </PageItem>
        </PageWrapper>
    );
};

export default ContactPage;
