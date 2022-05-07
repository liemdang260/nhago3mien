import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, fa1, fa2 } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// import {} from '@fortawesome/free-brands-svg-icons'
const data = [
    { name: 'Mr. Cuong', phone: '096.211.6789', icon: fa1 },
    { name: 'Mr. Manh', phone: '0977.325.561', icon: fa2 },
];
function Support() {
    return (
        <div>
            <Title title={'Hỗ trợ'} size={'xl'} />
            <div className='text-primary-color border-primary-color border-4 rounded-xl border-double p-1 md:p-4 mt-3'>
                {data.map((d, index) => (
                    <div key={index} className='flex items-center my-2'>
                        <a href='tel:0962116789'>
                            <FontAwesomeIcon
                                icon={faPhone}
                                color='#003F5C'
                                size='xs'
                            />
                            <FontAwesomeIcon
                                icon={d.icon}
                                color='#003F5C'
                                size='xs'
                                className='translate-y-2 translate-x-[1px] inline-block'
                            />
                            <span className='font-normal ml-2 text-sm hidden md:inline-block lg:text-lg text-color'>
                                {d.phone}
                            </span>
                            <span className='ml-0 lg:ml-4 md:ml-2 text-xs md:text-lg text-color font-semibold'>
                                {d.name}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Support;

