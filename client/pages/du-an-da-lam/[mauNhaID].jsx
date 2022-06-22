import React from 'react';
// import fs from 'fs';
// import path from 'path';
import Album from 'components/common/Album';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';
import Head from 'next/head';
import projects, { projectMediaFiles } from 'constants/du-an-da-lam';

function DetailHomeTemplate({ data, title, slug, description }) {
    return (
        <>
            <Head>
                <title>{title} | Nhagobamien.vn</title>
                <meta name='description' content={description} />
                <meta name='keyword' content={title} />
            </Head>
            <div className='col-span-12 border-b-[1px] border-gray-300 py-4 container'>
                <Breadcrumb
                    location={[
                        { title: 'Trang chủ', link: '/' },
                        {
                            title,
                            link: slug + '',
                        },
                    ]}
                />
            </div>
            <Album title={title} data={data} />
        </>
    );
}
export default DetailHomeTemplate;

export async function getStaticPaths() {
    // const dirs = fs.readdirSync(path.join('public', 'du_an_da_lam'), {
    //     encoding: 'utf-8',
    // });
    // const paths = dirs.map((dir, index) => ({
    //     params: { mauNhaID: dir },
    // }));
    const paths = Object.keys(projects).map((projectSlug) => ({
        params: { mauNhaID: projectSlug },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    // const files = fs.readdirSync(
    //     path.join('public', 'du_an_da_lam', params.mauNhaID),
    // );
    const mediaObject = projectMediaFiles.find(
        (project) => project.slug === params.mauNhaID,
    );
    const addDescription = (title) => {
        let description = '';
        switch (title) {
            case 'cong-go':
                description =
                    'Cần một cổng gỗ cho lối vào của bạn? Hãy chọn ngay cửa cổng gỗ tốt nhất từ Nhagobamien.vn chuyên cung cấp các loại cổng gỗ chất lượng cao với giá thành hợp lý nhất!';
                break;
            case 'nha-luc-giac':
                description =
                    'Mẫu nhà gỗ hình lục giác đẹp đã có trên Nhagobamien.vn. Kiểm tra lựa chọn của chúng tôi về các thiết kế nhà lục giác để có những ngôi nhà gỗ độc đáo hoặc tùy chỉnh tốt nhất.';
                break;
            case 'noi-that':
                description =
                    'Thiết kế và thi công nội thất theo yêu cầu của khách hàng là một trong những dịch vụ cốt lõi của Nhà Gỗ Ba Miền. Đó là Công Ty Dịch Vụ Thiết Kế Nội Thất Được Tin Cậy Nhất.';
                break;
            case 'nha-5-gian':
                description =
                    'Tìm ngôi nhà gỗ Năm gian? Nhagobamien.vn chuyên thiết kế, thi công, lắp đặt nhà gỗ và cung cấp các sản phẩm đồ gỗ với giá cả hợp lý nhất! Gọi cho chúng tôi ngay.';
                break;
        }
        return description;
    };

    // const data = files.map((filename, index) => ({
    //     id: index,
    //     original: `/du_an_da_lam/${params.mauNhaID}/${filename}`,
    //     thumbnail: filename.includes('.mp4')
    //         ? '/images/placeholderThumbnail.jpeg'
    //         : `/du_an_da_lam/${params.mauNhaID}/${filename}`,
    //     embedUrl: filename.includes('.mp4')
    //         ? `/du_an_da_lam/${params.mauNhaID}/${filename}`
    //         : '',
    //     thumbnailClass: filename.includes('.mp4')
    //         ? 'video-featured-thumb'
    //         : 'featured-thumb',
    //     originalClass: filename.includes('.mp4') ? '' : 'featured-slide',
    //     isVideo: filename.includes('.mp4'),
    // }));
    const data = mediaObject.media.map((mediaData, index) => ({
        id: index,
        original: `https://drive.google.com/uc?export=view&id=${mediaData.link}`,
        thumbnail:
            mediaData.type === 'video'
                ? '/images/placeholderThumbnail.jpeg'
                : `https://drive.google.com/uc?export=view&id=${mediaData.link}`,
        embedUrl:
            mediaData.type === 'video'
                ? `https://drive.google.com/uc?export=view&id=${mediaData.link}`
                : '',
        thumbnailClass:
            mediaData.type === 'video'
                ? 'video-featured-thumb'
                : 'featured-thumb',
        originalClass: mediaData.type === 'video' ? '' : 'featured-slide',
        isVideo: mediaData.type === 'video',
    }));
    return {
        props: {
            data,
            title: projects[params.mauNhaID],
            slug: params.mauNhaID,
            description: addDescription(params.mauNhaID),
        },
    };
}
