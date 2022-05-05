import '../styles/globals.css';
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Script from 'next/script';

// Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

//Animation on scrolling
import 'animate.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
    // Set toggle for button scroll to top
    console.log(router);
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
            <button
                className={`bg-primary-color w-14 h-14 rounded-full flex justify-center 
          items-center fixed bottom-9 right-8 z-10 ${
              isVisible ? 'opacity-100' : 'opacity-0'
          }`}
                onClick={() => scrollToTop()}
            >
                <FontAwesomeIcon icon={faLongArrowUp} color='white' size='2x' />
            </button>
            {/* Social media button */}
            <div className='fixed w-9 h-w-9 bottom-9 left-8 z-10'>
                <Image
                    src={'/youtube.png'}
                    alt='zalo icon'
                    width={32}
                    height={32}
                />
            </div>
            <div className='fixed w-9 h-w-9 bottom-9 left-8  translate-x-full z-10'>
                <Image
                    src={'/facebooks.png'}
                    alt='zalo icon'
                    width={32}
                    height={32}
                />
            </div>
            <div
                className='fixed w-9 h-w-9 bottom-9 left-8 z-10'
                style={{ transform: 'translateX(200%)' }}
            >
                <Image
                    src={'/zalo.png'}
                    alt='zalo icon'
                    width={32}
                    height={32}
                />
            </div>
            <div
                className='zalo-chat-widget'
                data-oaid='579745863508352884'
                data-welcome-message='Rất vui khi được hỗ trợ bạn!'
                data-autopopup='0'
                data-width=''
                data-height=''
            ></div>
            <div
                className='zalo-chat-widget'
                data-oaid='579745863508352884'
                data-welcome-message='Rất vui khi được hỗ trợ bạn!'
                data-autopopup='0'
                // data-width=''
                // data-height=''
            ></div>
            <Header />
            <Component {...pageProps} />
            <Script defer src='https://sp.zalo.me/plugins/sdk.js'></Script>
            <Footer />
        </>
    );
}

export default MyApp;

