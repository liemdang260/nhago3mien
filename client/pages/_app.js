import '../styles/globals.css';
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { faLongArrowUp, faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
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
            <div className='fixed bg-[#3B5998] w-12 h-12 bottom-9 left-8 z-10'>
                <FontAwesomeIcon icon={faFaceAngry} />
            </div>
            <div className='fixed bg-[#bb0000] w-12 h-12 bottom-9 left-8  translate-x-full z-10'>
                <FontAwesomeIcon icon={faFaceAngry} />
            </div>
            <div
                className='fixed bg-[#00aff0] w-12 h-12 bottom-9 left-8 z-10'
                style={{ transform: 'translateX(200%)' }}
            >
                <FontAwesomeIcon icon={faFaceAngry} />
            </div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;

