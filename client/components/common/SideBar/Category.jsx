import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
const datas = [
    { title: 'MẪU NHÀ SÀN', link: '' },
    { title: 'MẪU NHÀ HIỆN ĐẠI', link: '' },
    { title: 'MẪU NHÀ CỔ TRUYỀN', link: '' },
    { title: 'MẪU NHÀ LỤC GIÁC', link: '' },
    { title: 'MẪU NHÀ TỪ ĐƯỜNG', link: '' },
];
function Category({ title = 'Danh mục sản phẩm', data = datas }) {
    return (
        <div>
            <Title title={title} size={'xl'} />
            <ul className='text-white'>
                {data.map((d, index) => (
                    <li
                        key={index}
                        className='p-2 my-2 text-[13px] bg-primary-color font-bold hover:text-red-600 rounded-md'
                    >
                        <FontAwesomeIcon icon={faCaretRight} className='mr-3' />
                        <a href={d.link}>{d.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
