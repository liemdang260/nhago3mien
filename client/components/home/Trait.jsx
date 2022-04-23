import React from 'react';
import Title from 'components/common/Title';

function AboutStrength({ strengthTitle, strengthSubTitle }) {
    return (
        <div className='w-full border-primary-color border-[3px] p-1 m-4'>
            <div className='border-primary-color border-2 p-2'>
                <a
                    href='#'
                    className='text-primary-color text-center hover:underline'
                >
                    <p className='font-bold text-lg'>{strengthTitle}</p>
                    <p className='font-medium text-md'>{strengthSubTitle}</p>
                </a>
            </div>
        </div>
    );
}

function Trait() {
    return (
        <div className='container'>
            <Title title='Nhà gỗ Ba miền' />
            <div className='flex flex-col md:flex-row justify-between mt-8'>
                <AboutStrength
                    strengthTitle='CHUYÊN NGHIỆP'
                    strengthSubTitle='TRONG THIẾT KẾ VÀ THI CÔNG'
                />
                <AboutStrength
                    strengthTitle='CHẤT LƯỢNG'
                    strengthSubTitle='SẢN PHẨM CAO'
                />
                <AboutStrength
                    strengthTitle='DỊCH VỤ'
                    strengthSubTitle='KHÁCH HÀNG TẬN TÂM'
                />
            </div>
        </div>
    );
}

export default Trait;
