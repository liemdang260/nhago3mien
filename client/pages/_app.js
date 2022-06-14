import '../styles/globals.css';
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { faLongArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
// Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cards';
import 'react-image-gallery/styles/css/image-gallery.css';

//Animation on scrolling
import 'animate.css';
import {
    faFacebookSquare,
    faYoutube,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
    // Set toggle for button scroll to top

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <>
            {/* begin::ScrollToTop */}
            <button
                className={`bg-primary-color w-12 h-12 rounded-full flex justify-center 
          items-center fixed bottom-14 right-1 z-10 ${
              isVisible ? 'opacity-100' : 'opacity-0'
          }`}
                onClick={() => scrollToTop()}
            >
                <FontAwesomeIcon icon={faLongArrowUp} color='white' size='2x' />
            </button>
            {/* end::ScrollToTop */}
            {/* begin::SocialMediaButton */}
            <Link
                href='https://m.facebook.com/110707611644240/'
                target='_blank'
            >
                <a className='fixed z-10 bottom-10 left-5  bg-white'>
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        color='#4267B2'
                        size='3x'
                    />
                </a>
            </Link>
            <Link
                href='https://youtube.com/channel/UCXw1ZjGS13Rgjoc2wNlBrrA'
                target='_blank'
            >
                <a className='fixed z-10 bottom-10 left-8 translate-x-full bg-white'>
                    <FontAwesomeIcon
                        icon={faYoutubeSquare}
                        color='#FF0000'
                        size='3x'
                    />
                </a>
            </Link>
            {/*  begin::phone button */}
            <Link href='tel:0962116789' passHref>
                <div className='phone-wrapper fixed top-28 left-16 z-50'>
                    <div className='flex justify-center items-center'>
                        <div className='z-50 absolute  bg-[#9BF080] p-3 rounded-full animate-pulse'>
                            <FontAwesomeIcon
                                icon={faPhone}
                                color='#fff'
                                size='2x'
                            />
                        </div>
                        <div className='h-12 w-12 rounded-full absolute animate-scaling'></div>
                        <div className='h-12 w-12 rounded-full absolute animate-[scaling_2s_linear_infinite_1s]'></div>
                    </div>
                </div>
            </Link>
            {/*  end::phone button */}
            {/* begin::ZaloButton */}
            <div
                className='zalo-chat-widget'
                data-oaid='3764014308364109214'
                data-welcome-message='Rất vui khi được hỗ trợ bạn!'
                data-autopopup='3s'
                data-width=''
                data-height=''
            ></div>
            {/* end::ZaloButton */}
            <Head>
                <title>
                    Nhà gỗ Truyền thống & Nguyên | Nhà thờ - Nhagobamien.vn
                </title>
                <meta
                    name='description'
                    content='Tìm mua nhà gỗ Truyền Thống & Gốc Miền Bắc chất lượng nhất tại nhagobamien.vn, chúng tôi tự tin mang đến cho bạn sự hài lòng với những sản phẩm chất lượng.'
                />

                <meta
                    name='google-site-verification'
                    content='hvoDIBRAQruUINXPei-BHlj6ptJ8GyKBuWj2rj8Xhm0'
                />
                <link
                    rel='icon'
                    type='image/jpg'
                    sizes='64x64'
                    href='/logo_ng3m.jpg'
                />
            </Head>
            <Header />
            <Component {...pageProps} router={router} />
            <Script defer src='https://sp.zalo.me/plugins/sdk.js'></Script>

            <script
                async
                src='https://www.googletagmanager.com/gtag/js?id=AW-10932546613'
            ></script>
            <script
                id='gtag-analytic'
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10932546613}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Footer />
        </>
    );
}

export default MyApp;

