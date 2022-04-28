import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// import {} from '@fortawesome/free-brands-svg-icons'
const data = [
    { name: 'Mr Long', phone: '0932 112 365' },
    { name: 'Mr Cường', phone: '0901 379 365' },
];
function Support() {
    return (
        <div>
            <Title title={'Hỗ trợ trực tuyến'} size={'xl'} />
            <div className='text-primary-color border-primary-color border-4 rounded-xl border-double py-5 px-3 mt-3'>
                {data.map((d, index) => (
                    <div key={index} className='flex items-center my-1'>
                        <FontAwesomeIcon
                            icon={faPhone}
                            className='border-primary-color border-2 p-1 rounded-[100%] ml-1'
                        />
                        <span className='ml-1 font-semibold'>{d.phone}</span>
                        <div className='w-[16px] h-[16px] relative inline-block ml-1'>
                            <Image
                                src='/skype-logo-icon.png'
                                alt='skype-logo'
                                layout='fill'
                            />
                        </div>
                        <span className='ml-1 font-semibold'>{d.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Support;

