import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const dummyData = [
    {
        id: 0,
        title: 'Chòi hóng mát',
        codeProduct: '12345A',
        linkImage: '/images/nha1.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 1,
        title: 'Chòi ngắm cảnh',
        codeProduct: '12345A',
        linkImage: '/images/nha2.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 2,
        title: 'Mẫu nhà lục giác',
        codeProduct: '12345A',
        linkImage: '/images/nha3.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 3,
        title: 'Nhà chòi kiểu cổ',
        codeProduct: '12345A',
        linkImage: '/images/nha4.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        id: 4,
        title: 'Mẫu nhà gỗ 3 gian cổ truyền',
        codeProduct: '12345A',
        linkImage: '/images/nha5.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 5,
        title: 'Mẫu nhà gỗ 5 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/nha5.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 6,
        title: 'Mẫu nhà gỗ 3 gian 2 trái',
        codeProduct: '12345A',
        linkImage: '/images/nha6.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 7,
        title: 'Mẫu nhà gỗ 3 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/nha7.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 8,
        title: 'Mẫu nhà gỗ 5 gian mái thái',
        codeProduct: '12345A',
        linkImage: '/images/nha8.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 9,
        title: 'Mẫu nhà gỗ kiểu thái',
        codeProduct: '12345A',
        linkImage: '/images/nha9.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 10,
        title: 'Mẫu nhà gỗ Liêm',
        codeProduct: '12345A',
        linkImage: '/images/nha10.jpg',
        type: 'mauNhaSan',
    },
    {
        id: 11,
        title: 'Mẫu nhà gỗ hiện đại',
        codeProduct: '12345A',
        linkImage: '/images/nha11.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 12,
        title: 'Mẫu nhà gỗ hiện đại 02',
        codeProduct: '12345A',
        linkImage: '/images/nha12.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 13,
        title: 'Mẫu nhà gỗ hiện đại 03',
        codeProduct: '12345A',
        linkImage: '/images/nha13.jpg',
        type: 'nhaGoHienDai',
    },
    {
        id: 14,
        title: 'Mẫu nhà gỗ hiện đại 04',
        codeProduct: '12345A',
        linkImage: '/images/nha14.jpg',
        type: 'nhaGoHienDai',
    },
];
// const Item = ({ params }) => (
//     <motion.div
//         layout
//         animate={{ opacity: 1 }}
//         initial={{ opacity: 0 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//     >
//         {/* <AnimationOnScroll
//             animateIn='animate__backInUp'
//             animateOnce={true}
//             duration={1}
//         > */}
//         <Image
//             src={params.linkImage}
//             alt={params.type}
//             width={288}
//             height={191}
//         />
//         <p>{params.title}</p>
//         {/* </AnimationOnScroll> */}
//     </motion.div>
// );
const Search = () => {
    const [data, setData] = useState(dummyData.sort(() => Math.random() - 0.5));
    const handleClickItem = (type) => (e) => {
        if (type === 'tatca') {
            setData(dummyData);
            return;
        }
        setData(dummyData.filter((item) => item.type === type));
    };
    return (
        <div>
            {/* <ul className='flex py-2'>
                <li onClick={handleClickItem('tatca')}>
                    <button>Tat ca</button>
                </li>
                <li onClick={handleClickItem('nhaGoHienDai')} className='ml-5'>
                    <button>Nha do</button>
                </li>
                <li onClick={handleClickItem('mauNhaSan')} className='ml-5'>
                    <button>Nha xanh</button>
                </li>
            </ul>

            <motion.div layout className='grid grid-cols-4 gap-4'>
                <AnimatePresence>
                    {data &&
                        data.map((item, index) => (
                            <Item
                                key={item.id}
                                params={{
                                    title: item.title,
                                    linkImage: item.linkImage,
                                    type: item.type,
                                }}
                            />
                        ))}
                </AnimatePresence>
            </motion.div> */}
        </div>
    );
};

export default Search;

