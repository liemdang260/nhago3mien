import Image from 'next/image';

const Commit = () => {
    const Item = ({ params }) => (
        <div className='flex flex-col w-full bg-center'>
            <div
                className='p-4 w-28 sm:w-40 h-28 sm:h-40 text-center'
                style={{ transform: 'translateX(25%)' }}
            >
                <div className='overflow-hidden relative bg-white w-full h-full rounded-full text-center'>
                    <Image src={params.url} alt='cam kết' layout='fill'></Image>
                </div>
            </div>
            <h2 className='text-white font-semibold text-xs sm:text-sm md:text-lg uppercase w-full text-center'>
                {params.title}
            </h2>
        </div>
    );

    return (
        <div className="w-full min-h-64 bg-[url('../public/banner4.png')] flex flex-col justify-center items-center py-6 bg-no-repeat bg-cover">
            <div className='text-white text-xl sm:text-2xl md:text-3xl text-extrabold uppercase my-2'>
                5 cam kết của nhà gỗ ba miền
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5'>
                <Item
                    params={{
                        title: 'Giá cạnh tranh',
                        url: 'https://nhagoanphu.com/image/catalog/camket/giatotnhat.png',
                    }}
                />
                <Item
                    params={{
                        title: 'Sản phẩm chất lượng cao',
                        url: 'https://nhagoanphu.com/image/catalog/camket/chatlieugo.png',
                    }}
                />
                <Item
                    params={{
                        title: 'Tư vấn, thiết kế tận tâm',
                        url: 'https://nhagoanphu.com/image/catalog/camket/dodac.png',
                    }}
                />
                <Item
                    params={{
                        title: 'Thi công chuyên nghiệp',
                        url: 'https://nhagoanphu.com/image/catalog/camket/phucvutoanquoc.png',
                    }}
                />
                <Item
                    params={{
                        title: 'Bảo hành dài hạn',
                        url: 'https://nhagoanphu.com/image/catalog/camket/hotro.png',
                    }}
                />
            </div>
        </div>
    );
};

export default Commit;
