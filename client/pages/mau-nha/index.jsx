import { PageItem, PageWrapper } from 'components/common/PageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faListSquares,
    faBars,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Item } from 'components/common/gridLayoutMauNha';
import Image from 'next/image';

// import mauNhaGoCoTruyen from '/images/mau-nha-co-truyen.Mau-nha-go-kieu-Hue.jpg';
// import mauNhaGoCoTruyen2 from '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg';
// import mauNhaGoCoTruyen3 from '/images/mau-nha-co-truyen.Mau-nha-truyen-thong-dep.jpg';
// import mauNhaGoCoTruyen4 from '/images/mau-nha-co-truyen.Nha-co-truyen-5-gian.jpg';
// import mauNhaGoCoTruyen5 from '/images/mau-nha-co-truyen.Nha-go-3-gian-go-Lim.jpg';
// import mauNhaGoCoTruyen6 from '/images/mau-nha-co-truyen.Nha-go-3-gian-kieu-Bac-Bo.jpg';
// import mauNhaGoCoTruyen7 from '/images/mau-nha-co-truyen.Nha-go-5-gian-dep.png';

// import mauNhaTuDuong from '/images/nha_tu_duong.Mau-nha-tho-co.jpg';
// import mauNhaTuDuong2 from '/images/nha_tu_duong.Mau-nha-tho-ho-hai-mai.jpg';
// import mauNhaTuDuong3 from '/images/nha_tu_duong.Mau-nha-tho.png';
// import mauNhaTuDuong4 from '/images/nha_tu_duong.Mau-nha-tu-duong-bang-go-dep.png';
// import mauNhaTuDuong5 from '/images/nha_tu_duong.Mau-nha-tu-duong-dep.jpg';
// import mauNhaTuDuong6 from '/images/nha_tu_duong.Mau-nha-tu-duong-mai-cong.jpg';
// import mauNhaTuDuong7 from '/images/nha_tu_duong.Mau-nha-tu-duong.jpg';

// import mauNhaHienDai from '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-02.jpg';
// import mauNhaHienDai2 from '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-03.jpg';
// import mauNhaHienDai3 from '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-04.jpg';
// import mauNhaHienDai4 from '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai.jpg';
// import mauNhaHienDai5 from '/images/mau-nha-hien-dai.Mau-nha-go-lam-homestay.jpg';
// import mauNhaHienDai6 from '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-06.jpg';

// import mauNhaLucGiac from '/images/mau-nha-luc-giac.Choi-hong-mat.jpg';
// import mauNhaLucGiac2 from '/images/mau-nha-luc-giac.Choi-ngam-canh.jpg';
// import mauNhaLucGiac3 from '/images/mau-nha-luc-giac.Mau-nha-luc-giac.jpg';
// import mauNhaLucGiac4 from '/images/mau-nha-luc-giac.Nha-choi-kieu-co.jpg';

// import mauNhaSan from '/images/mau-nha-san.Mau-nha-go-3-gian-co-truyen.jpg';
// import mauNhaSan2 from '/images/mau-nha-san.Mau-nha-go-5-gian-truyen-thong.png';
// import mauNhaSan3 from '/images/mau-nha-san.Mau-nha-san-3-gian-2-trai.jpg';
// import mauNhaSan4 from '/images/mau-nha-san.Mau-nha-san-3-gian-truyen-thong.jpg';
// import mauNhaSan5 from '/images/mau-nha-san.Mau-nha-san-5-gian-mai-thai.jpg';
// import mauNhaSan6 from '/images/mau-nha-san.Mau-nha-san-go-kieu-thai.jpg';
// import mauNhaSan7 from '/images/mau-nha-san.Mau-nha-san-go-liem.jpeg';

import LandingPages from 'components/common/LandingPages';

const dummyData = [
    {
        title: 'Chòi hóng mát',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-luc-giac.Choi-hong-mat.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        title: 'Chòi ngắm cảnh',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-luc-giac.Choi-ngam-canh.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        title: 'Mẫu nhà lục giác',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-luc-giac.Mau-nha-luc-giac.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        title: 'Nhà chòi kiểu cổ',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-luc-giac.Nha-choi-kieu-co.jpg',
        type: 'mauNhaLucGiac',
    },
    {
        title: 'Mẫu nhà gỗ 3 gian cổ truyền',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-go-3-gian-co-truyen.jpg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ 5 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-go-5-gian-truyen-thong.png',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ 3 gian 2 trái',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-san-3-gian-2-trai.jpg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ 3 gian truyền thống',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-san-3-gian-truyen-thong.jpg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ 5 gian mái thái',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-san-5-gian-mai-thai.jpg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ kiểu thái',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-san-go-kieu-thai.jpg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ Liêm',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-san.Mau-nha-san-go-liem.jpeg',
        type: 'mauNhaSan',
    },
    {
        title: 'Mẫu nhà gỗ hiện đại',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-02.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ hiện đại 02',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-03.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ hiện đại 03',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-04.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ hiện đại 04',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ hiện đại 06',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-lam-homestay.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ làm homestay',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-hien-dai.Mau-nha-go-hien-dai-06.jpg',
        type: 'nhaGoHienDai',
    },
    {
        title: 'Mẫu nhà gỗ kiểu Huế',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-go-kieu-Hue.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Mẫu nhà rường Huế',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Mẫu nhà truyền thống đẹp',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-truyen-thong-dep.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Nhà cổ truyền 5 gian',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-co-truyen-5-gian.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Nhà 3 gian gỗ Lim',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-3-gian-go-Lim.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Nhà gỗ 3 gian kiểu Bắc bộ',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-3-gian-kieu-Bac-Bo.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Nhà gỗ 5 gian đẹp',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-5-gian-dep.png',
        type: 'nhaGoCoTruyen',
    },
    {
        title: 'Mẫu nhà thờ cổ',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tho-co.jpg',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà thờ cổ hai mái',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tho-ho-hai-mai.jpg',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà thờ',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tho.png',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà từ đường bằng gỗ đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tu-duong-bang-go-dep.png',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà từ đường đẹp',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tu-duong-dep.jpg',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà từ đường mái cong',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tu-duong-mai-cong.jpg',
        type: 'nhaTuDuong',
    },
    {
        title: 'Mẫu nhà từ đường',
        codeProduct: '12345A',
        linkImage: '/images/nha_tu_duong.Mau-nha-tu-duong.jpg',
        type: 'nhaTuDuong',
    },
];

const Item2 = ({ params }) => {
    return (
        <div
            className='border bg-slate-50 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] border-[#ccc] mb-3 h-52
      flex flex-row hover:shadow-primary-color hover:bg-slate-200 duration-700
    '
        >
            <div className='grow overflow-hidden px-4 border-r border-primary-color flex-1'>
                <Image
                    src={params.linkImage}
                    alt='mau san pham'
                    priority
                    layout='fixed'
                    width={350}
                    height={200}
                />
            </div>
            <div className='grow-[2] flex-1 p-4'>
                <div className={`font-bold text-primary-color`}>
                    {params.title}
                    <div className='w-full border-2 bg-slate-300 mb-3 mt-2 bg-gradient-to-l'></div>
                    <br />
                    Mã SP: {params.codeProduct}
                </div>

                <div className='text-sm'>Mieu ta mau nha</div>

                <div className='uppercase text-gray-500 font-medium w-full bottom-5'>
                    Liên hệ: 0333619358{' '}
                    <FontAwesomeIcon icon={faPhoneFlip} className='ml-2' />
                </div>
            </div>
        </div>
    );
};

const AllHomeTemplate = () => {
    const [data, setData] = useState(dummyData);
    const [activeItem, setAciveItem] = useState(0);
    const [gridLayout, setGridLayout] = useState(true);
    const [landingIndex, setLandingIndex] = useState(0);
    const [landingVisionIndex, setLandingVisionIndex] = useState(0);

    const [selectedOption2, setSelectedOption2] = useState({
        value: '15',
        label: '15 mục',
    });
    const options2 = [
        { value: '15', label: '15 mục' },
        { value: '30', label: '30 mục' },
        { value: '45', label: '45 mục' },
        { value: '60', label: '60 mục' },
    ];

    const handleLandingIndex = (index) => {
        setLandingIndex(index);
    };
    const handleLandingVision = (action) => {
        setLandingVisionIndex(landingVisionIndex + action);
    };
    useEffect(() => {
        setLandingIndex(landingVisionIndex * 10);
    }, [landingVisionIndex]);

    const Label = ({ params }) => {
        return (
            <div
                className={`color-[#09357a] font-sans cursor-pointer inline-block mr-5 text-base py-2 px-1
                rounded text-center
                ${
                    params.keyValue === activeItem ? 'bg-[#ccc]' : ''
                } border-b-4 group`}
                onClick={() => {
                    setAciveItem(params.keyValue);
                    if (params.type == 'tatca') setData(dummyData);
                    else
                        setData(
                            dummyData.filter((item) => {
                                return item.type == params.type;
                            }),
                        );
                }}
            >
                {params.title}
                <span
                    style={{
                        backgroundColor: `${params.color} `,
                    }}
                    className={`inline-block h-2 ml-1 w-6 before:absolute before:left-0 before:w-full
                        before:bg-[#1f31ab] before:opacity-0 before:transition-all before:top-0 before:translate-x-3
                        after:absolute after:left-0 after:w-full
                        after:bg-[#1f31ab] after:opacity-0 after:transition-all after:bottom-0 after:-translate-y-1
                        group-hover:before:opacity-100 group-hover:before:translate-y-0 group-hover:after:opacity-100 group-hover:after:translate-y-0
                    `}
                ></span>
            </div>
        );
    };

    return (
        <div className='mb-6'>
            <div className='pl-4 pt-4 pr-4 container'>
                <div className='w-full flex justify-between'>
                    <div className='mt-2'>
                        <span
                            onClick={() => setGridLayout(true)}
                            className={`border-solid border-primary-color py-2 px-3 rounded-l-md ${
                                gridLayout ? 'border-4' : 'border'
                            }`}
                        >
                            <FontAwesomeIcon icon={faListSquares} size='lg' />
                        </span>
                        <span
                            onClick={() => setGridLayout(false)}
                            className={`border-solid border-primary-color py-2 px-3 rounded-r-md ${
                                !gridLayout ? 'border-4' : 'border'
                            }`}
                        >
                            <FontAwesomeIcon icon={faBars} size='lg' />
                        </span>
                        {/* Sub label filter header */}
                        <ul className='inline ml-8'>
                            {[
                                { title: 'Tất cả', type: 'tatca' },
                                {
                                    title: 'Nhà từ đường',
                                    color: '#05ed10',
                                    type: 'nhaTuDuong',
                                },
                                {
                                    title: 'Nhà gỗ hiện đại',
                                    color: '#f00',
                                    type: 'nhaGoHienDai',
                                },
                                {
                                    title: 'Nhà sàn gỗ',
                                    color: '#0aa6a6',
                                    type: 'mauNhaSan',
                                },
                                {
                                    title: 'Nhà cỗ truyền',
                                    color: '#000',
                                    type: 'nhaGoCoTruyen',
                                },
                                {
                                    title: 'Nhà lục giác',
                                    color: '#42611e',
                                    type: 'mauNhaLucGiac',
                                },
                            ].map((_item, _index) => (
                                // mauNhaSan, nhaGoHienDai, nhaGoCoTruyen, nhaTuDuongn, mauNhaLucGiac
                                <Label
                                    key={_index}
                                    params={{
                                        title: _item.title,
                                        color: _item.color,
                                        keyValue: _index,
                                        type: _item.type,
                                    }}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Select
                            className='w-32 inline-block'
                            value={selectedOption2}
                            onChange={(change) => {
                                setSelectedOption2(change);
                            }}
                            options={options2}
                        />
                    </div>
                </div>
                <div
                    className={`w-full ${
                        gridLayout ? 'grid grid-cols-4 gap-7' : ''
                    } mt-6`}
                >
                    {gridLayout
                        ? data
                              .slice(
                                  landingIndex * Number(selectedOption2.value),
                                  landingIndex * Number(selectedOption2.value) +
                                      Number(selectedOption2.value),
                              )
                              .map((_item, _index) => (
                                  <Item
                                      key={_index}
                                      params={{
                                          title: _item.title,
                                          codeProduct: _item.codeProduct,
                                          linkImage: _item.linkImage,
                                      }}
                                  />
                              ))
                        : data
                              .slice(
                                  landingIndex * Number(selectedOption2.value),
                                  landingIndex * Number(selectedOption2.value) +
                                      Number(selectedOption2.value),
                              )
                              .map((_item, _index) => (
                                  <Item2
                                      key={_index}
                                      params={{
                                          title: _item.title,
                                          codeProduct: _item.codeProduct,
                                          linkImage: _item.linkImage,
                                      }}
                                  />
                              ))}
                </div>
            </div>
            <div className='mb-5'>
                <LandingPages
                    handleLandingIndex={handleLandingIndex}
                    itemsPerPage={Number(selectedOption2.value)}
                    landingVisionIndex={landingVisionIndex}
                    landingIndex={landingIndex}
                    length={data.length}
                    handleLandingVision={handleLandingVision}
                />
            </div>
        </div>
    );
};

export default AllHomeTemplate;
export { Item2 };
