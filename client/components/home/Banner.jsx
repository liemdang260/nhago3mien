import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from 'styles/Home.module.css';


function Banner({ images, height = "475px", isControl = false, duration = 5000 }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const handleSlide = i => _ => {
        const handleSelectedImage = (currentIndex) => {
            const tempIndex = currentIndex + i;
            if (tempIndex < 0) tempIndex = images.length - 1;
            else if (tempIndex === images.length) tempIndex = 0;
            return tempIndex;
        }
        setSelectedImage(preSelectedImage => handleSelectedImage(preSelectedImage));
    }
    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleSlide(1)();
        }, duration)
        return () => {
            clearInterval(autoSlide);
        }
    }, [])
    return (
        <div className='relative'>
            {
                images && images.map((img, index) => (
                    <div key={index} className={`${selectedImage === index ? styles.bannerImageVisible : styles.bannerImageHide}`}>
                        <img key={index} src={img} alt='img' className={`w-full h-[${height}]`} />
                    </div>
                ))
            }
            {
                isControl && <>
                    <span className='absolute text-[2.5rem] top-1/2 -translate-y-1/2 cursor-pointer select-none text-slate-100 px-2'
                        onClick={handleSlide(-1)}
                    >
                        &#10094;
                    </span>
                    <span className='absolute text-[2.5rem] top-1/2 -translate-y-1/2 right-0 cursor-pointer select-none text-slate-100 px-2' onClick={handleSlide(1)}>&#10095;</span>
                </>
            }
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
                {
                    images && images.map((_, index) => (
                        <span key={index} className={`w-4 h-4 bg-gray-800 opacity-50 inline-block rounded-full mx-2 ${index === selectedImage ? 'bg-slate-50 opacity-100' : ''}`} onClick={setSelectedImage.bind(null, index)}></span>
                    ))
                }
            </div>
        </div>
    )
}


export default Banner
