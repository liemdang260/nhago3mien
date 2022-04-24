import Image from 'next/image';

const Commit = () => {
    const Item = ({ params }) => (
        <div className='flex flex-col w-26 mx-8 bg-center'>
            <div style={{ width: '150px', height: '150px' }} className='p-4'>
                <div className='overflow-hidden relative bg-white w-full h-full rounded-full'>
                    <Image src={params.url} alt='cam kết' layout='fill'></Image>
                </div>
            </div>
            <h2 className='text-white font-semibold text-lg uppercase w-40 text-center'>
                {params.title}
            </h2>
        </div>
    );

    return (
        <div className="w-full min-h-64 bg-[url('../public/banner4.png')] flex flex-col justify-center items-center py-6 bg-no-repeat bg-cover">
            <div className='text-white text-3xl text-extrabold uppercase my-2'>
                5 cam kết của nhà gỗ ba miền
            </div>
            <div className='flex flex-row'>
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
