import '../styles/globals.css';
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { faLongArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
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
                className={`bg-primary-color w-11 h-11 rounded-full flex justify-center 
          items-center fixed bottom-4 right-6 z-10 ${
              isVisible ? 'opacity-100' : 'opacity-0'
          }`}
                onClick={() => scrollToTop()}
            >
                <FontAwesomeIcon icon={faLongArrowUp} color='white' size='lg' />
            </button>
            {/* end::ScrollToTop */}
            {/* begin::SocialMediaButton */}
            <Link href='https://facebook.com/110707611644240/'>
                <a
                    className='fixed z-10 bottom-[122px] right-6 bg-white'
                    target='_blank'
                >
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        color='#4267B2'
                        size='3x'
                    />
                </a>
            </Link>
            <Link href='https://youtube.com/channel/UCXw1ZjGS13Rgjoc2wNlBrrA'>
                <a
                    className='fixed z-10 bottom-44 right-6 bg-white'
                    target='_blank'
                >
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
            <Head>
                <title>
                    Nh?? g??? Truy???n th???ng & Nguy??n | Nh?? th??? - Nhagobamien.vn
                </title>
                <meta
                    name='description'
                    content='T??m mua nh?? g??? Truy???n Th???ng & G???c Mi???n B???c ch???t l?????ng nh???t t???i nhagobamien.vn, ch??ng t??i t??? tin mang ?????n cho b???n s??? h??i l??ng v???i nh???ng s???n ph???m ch???t l?????ng.'
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
            {/* begin::ZaloButton */}
            <div
                className='zalo-chat-widget'
                data-oaid='3764014308364109214'
                data-welcome-message='R???t vui khi ???????c h??? tr??? b???n!'
                data-autopopup='3'
                data-width=''
                data-height=''
            ></div>
            <style>
                {`
                    .zalo-chat-widget {
                        bottom: 65px !important;
                        right: 16px !important;
                    }
                `}
            </style>
            {/* end::ZaloButton */}
            <Script defer src='https://sp.zalo.me/plugins/sdk.js'></Script>

            <Script
                async
                src='https://www.googletagmanager.com/gtag/js?id=AW-10932546613'
            ></Script>
            <Script
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

