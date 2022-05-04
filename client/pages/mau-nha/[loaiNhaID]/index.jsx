import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListSquares, faBars } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { dummyData } from '..';
import { Item } from 'components/common/gridLayoutMauNha';
import LandingPages from 'components/common/LandingPages';
import { Item2 } from '..';

const filterFunction = (query) => {
    switch (query) {
        case 'mau-nha-tu-duong':
            return dummyData.filter((item) => item.type == 'nhaTuDuong');
        case 'mau-nha-hien-dai':
            return dummyData.filter((item) => item.type == 'nhaGoHienDai');
        case 'mau-nha-san':
            return dummyData.filter((item) => item.type == 'mauNhaSan');
        case 'mau-nha-co-truyen':
            return dummyData.filter((item) => item.type == 'nhaGoCoTruyen');
        case 'mau-nha-luc-giac':
            return dummyData.filter((item) => item.type == 'mauNhaLucGiac');
        default:
            return [];
    }
};

const HomeTemplate = () => {
    const router = useRouter();
    const { loaiNhaID } = router.query;
    const [data, setData] = useState(() => {
        return filterFunction(loaiNhaID);
    });
    const [gridLayout, setGridLayout] = useState(true);
    const [landingIndex, setLandingIndex] = useState(0);
    const [landingVisionIndex, setLandingVisionIndex] = useState(0);

    const [selectedOption2, setSelectedOption2] = useState({
        value: '16',
        label: '16 mục',
    });
    const options2 = [
        { value: '16', label: '16 mục' },
        { value: '32', label: '32 mục' },
        { value: '48', label: '48 mục' },
        { value: '64', label: '64 mục' },
    ];

    const handleLandingIndex = (index) => {
        setLandingIndex(index);
    };
    const handleLandingVision = (action) => {
        setLandingVisionIndex(landingVisionIndex + action);
    };
    useEffect(() => {
        setLandingIndex(landingVisionIndex * 10);
        setData(() => filterFunction(loaiNhaID));
    }, [landingVisionIndex, loaiNhaID]);

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
                    </div>
                    <div className='uppercase mt-2'>{loaiNhaID}</div>
                    <div className='mt-2'>
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
                                          type: _item.type,
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
                                          type: _item.type,
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

export default HomeTemplate;
