import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const datas = [
    { title: 'MẪU NHÀ SÀN', link: '' },
    { title: 'MẪU NHÀ HIỆN ĐẠI', link: '' },
    { title: 'MẪU NHÀ CỔ TRUYỀN', link: '' },
    { title: 'MẪU NHÀ LỤC GIÁC', link: '' },
    { title: 'MẪU NHÀ TỪ ĐƯỜNG', link: '' },
];
function Category({ title = '', data = datas, activePath }) {
    return (
        <div>
            <Title title={title} size={'xl'} />
            <ul className='mt-3'>
                {data.map((d, index) => (
                    <li
                        key={index}
                        className={`my-2 text-[8px] md:text-[12px] lg:text-[16px] border-[1px] border-primary-color rounded-md font-bold ${
                            activePath !== d.link ? 'hover:text-red-600' : ''
                        } text-primary-color duration-200 ${
                            activePath === d.link
                                ? 'bg-primary-color text-white'
                                : ''
                        }`}
                    >
                        <Link href={d.link} passHref>
                            <div className='p-2 cursor-pointer'>
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className='mr-3'
                                />
                                <span className=''>{d.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;

