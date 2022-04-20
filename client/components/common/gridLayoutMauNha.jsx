import Image from 'next/image';
import mauHinhAnh from '../../public/nhago.jpg';
import Title from 'components/common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const Item = ({ params }) => {
    return (
        <div
            className='relative bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] 
        flex flex-col items-center text-base cursor-pointer ease-in-out duration-300
      hover:shadow-primary-color hover:bg-slate-200 group
      '
        >
            <div
                className='hidden w-[450px] h-[290px] group-hover:first:block absolute -translate-y-full -m-2
          border-2 border-solid border-primary-color'
            >
                <Image
                    className='z-20'
                    alt='Error while display image'
                    src={mauHinhAnh}
                    layout='fill'
                    // width={450}
                    // height={290}
                />
                <div className='absolute left-1/2 top-[100.5%] w-16 overflow-hidden'>
                    <div className=' h-2 w-2 bg-primary-color -rotate-45 transform origin-top-left'></div>
                </div>
            </div>
            <div className=''>
                <Image
                    className='z-0 group-hover:scale-110 group-hover:brightness-75 transition ease-out duration-500'
                    layout='intrinsic'
                    height={900}
                    priority
                    src={mauHinhAnh}
                    alt='Error while display image'
                />
            </div>

            <div
                className={`font-semibold text-primary-color text-center ${
                    params.title.split(' ').length > 7
                        ? 'text-sm mt-2'
                        : 'text-lg'
                }`}
            >
                {params.title.substring(0, 35)}
            </div>
            <div className='text-base font-semibold text-primary-color'>
                Mã SP: {params.codeProduct}
            </div>
            <div className='w-full border-2 bg-slate-300  mt-2 bg-gradient-to-l'></div>
            <div className='uppercase text-gray-500 font-medium text-center py-2'>
                Liên hệ: 0333619358{' '}
                <FontAwesomeIcon icon={faPhoneFlip} className='mr-4' />
            </div>
        </div>
    );
};

const ItemHover = (urlImage) => {
    return (
        <Image
            className='z-20'
            alt='Error while display image'
            src={mauHinhAnh}
            layout='fill'
            // width={450}
            // height={290}
        />
    );
};

const GridLayoutMauNha = () => {
    return (
        <div className='container flex flex-col justify-around mt-6'>
            <Title title='Mẫu nhà gỗ đẹp' />
            <div className='grid grid-cols-4 gap-7 w-full'>
                <Item params={{ title: 'Nhà 1', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 2', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 3', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 4', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 5', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 6', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 7', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 8', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 9', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 9', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 9', codeProduct: '1245D5' }} />
                <Item params={{ title: 'Nhà 9', codeProduct: '1245D5' }} />
            </div>
        </div>
    );
};

export default GridLayoutMauNha;
export { Item };
