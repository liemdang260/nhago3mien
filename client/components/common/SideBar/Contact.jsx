import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Contact() {
    return (
        <div className='text-primary-color'>
            <Title title={'Liên hệ'} size='xl' />
            <div className='w-[40px] mx-auto mt-2'>
                <FontAwesomeIcon
                    icon={faPhone}
                    size='lg'
                    className='border-primary-color border-2  p-2 rounded-[100%]'
                />
            </div>
            <p className='font-semibold text-center'>
                0932.112.365 - 1900.55.88.05 - 0909.377.365
            </p>
            <div className='w-[100px] mx-auto my-2 flex justify-between '>
                <div className='w-[25px] h-[25px] relative inline-block'>
                    <Image
                        loading='lazy'
                        src='/facebooks.png'
                        alt='facebook'
                        layout='fill'
                    ></Image>
                </div>
                <div className='w-[25px] h-[25px] relative inline-block'>
                    <Image
                        loading='lazy'
                        src='/youtube.png'
                        alt='facebook'
                        layout='fill'
                    ></Image>
                </div>
                <div className='w-[25px] h-[25px] relative inline-block'>
                    <Image
                        loading='lazy'
                        src='/zalo.png'
                        alt='facebook'
                        layout='fill'
                    ></Image>
                </div>
            </div>
        </div>
    );
}

export default Contact;

