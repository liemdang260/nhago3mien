import { PageWrapper, PageItem } from 'components/common/PageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Category from './SideBar/Category';
import Support from './SideBar/Support';
// import Contact from './SideBar/Contact';
import ArticleInsights from './ArticleInsights';
import Breadcrumb from './SideBar/Breadcrumb';
import Tooltip from './Tooltip';
import { Services } from 'components/common/header';
import { useRouter } from 'next/router';

// const mostViewedNews = [
//     {
//         id: 1,
//         title: 'Mẫu nhà gỗ đẹp',
//         imgLink:
//             'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
//         createAt: '16/10/2018',
//         views: 16903,
//     },
//     {
//         id: 2,
//         title: 'Nhà gỗ anphuco',
//         imgLink:
//             'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/Nha-go-hien-dai/NGHD-12/nha-vuon-bang-go-3-400x300.jpg',
//         createAt: '18/10/2018',
//         views: 15309,
//     },
//     {
//         id: 3,
//         title: 'Bản vẽ thiết kế nhà gỗ lục giác',
//         imgLink:
//             'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
//         createAt: '16/10/2018',
//         views: 16903,
//     },
//     {
//         id: 4,
//         title: 'Đặc điểm chung của nhà gỗ lục giác',
//         imgLink:
//             'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
//         createAt: '16/10/2018',
//         views: 16903,
//     },
//     {
//         id: 5,
//         title: 'Báo giá thiết kế nhà thờ họ',
//         imgLink:
//             'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
//         createAt: '16/10/2018',
//         views: 16903,
//     },
// ];

// const hotNews = [
//     'Tìm hiểu về nhà rường Huế',
//     'Nhà rường là gì, đặc điểm chung của nhà Rường',
//     'Đơn vị thiết kế và thi công nhà Rường tại Miền Nam',
//     'Chi phí làm nhà rường',
//     'Cấu tạo chung của nhà rường',
//     'Mẫu nhà rường hiện đại',
//     'Báo giá chi phí thiết kế và thi công nhà Rường Huế',
//     'Các mẫu nhà rường được yêu thích nhất',
//     'Tìm hiểu về nhà rường',
//     'Cách mua nhà gỗ bát giác giá rẻ',
// ];
export const HotViewedItem = ({ item }) => {
    return (
        <Tooltip title={item}>
            <Link href={'#'}>
                <a className='flex px-3 py-2 border-b-[1px] border-gray-200 text-sm'>
                    {item}
                </a>
            </Link>
        </Tooltip>
    );
};

export const MostViewedItem = ({ item }) => {
    return (
        <Tooltip title={item.title}>
            <Link href={'#'}>
                <a className='flex px-3 py-2 border-b-[1px] border-gray-200'>
                    <Image
                        src={item.imgLink}
                        alt='Hinh anh tin tuc 1'
                        width={60}
                        height={45}
                        objectFit='contain'
                    />
                    <div className='ml-3 w-8/12'>
                        <p className='text-sm mb-1 truncate'>{item.title}</p>
                        <p className='text-[0.8rem] text-gray-500'>
                            <ArticleInsights
                                data={item.createAt}
                                icon={faClock}
                            />
                            <ArticleInsights data={item.views} icon={faEye} />
                        </p>
                    </div>
                </a>
            </Link>
        </Tooltip>
    );
};

export const ViewList = ({ title, children }) => {
    return (
        <div className='mt-4'>
            <div className='flex items-center bg-primary-color text-white py-2 px-4 font-semibold'>
                <FontAwesomeIcon icon={faList} size='lg' />
                <p className='ml-2 text-[17px]'>{title}</p>
            </div>
            {children}
        </div>
    );
};

export const NewsSidebar = () => {
    const { asPath } = useRouter();
    return (
        <div>
            {/* <ViewList title={'XEM NHIỀU NHẤT'}>
                <ul className='border-[1px] border-gray-300'>
                    {mostViewedNews &&
                        mostViewedNews.map((item, index) => (
                            <li key={index}>
                                <MostViewedItem item={item} />
                            </li>
                        ))}
                </ul>
            </ViewList>
            <ViewList title={'TIN MỚI NHẤT'}>
                <ul className='border-[1px] border-gray-300'>
                    {hotNews &&
                        hotNews.map((item, index) => (
                            <li key={index}>
                                <HotViewedItem item={item} />
                            </li>
                        ))}
                </ul>
            </ViewList> */}
            <div>
                <Category
                    data={Services}
                    title={'Dịch vụ'}
                    activePath={asPath}
                />
            </div>
            <div className='mt-10'>
                <Support />
            </div>
        </div>
    );
};

const NewsWrapper = ({ children, pathname }) => {
    return (
        <PageWrapper>
            <PageItem>
                <Breadcrumb
                    location={[
                        { title: 'Trang chủ', link: '/' },
                        { title: pathname.title, link: pathname.link },
                    ]}
                />
            </PageItem>
            <PageItem>
                <NewsSidebar />
            </PageItem>
            <PageItem>{children}</PageItem>
        </PageWrapper>
    );
};

export default NewsWrapper;
