//import { withRouter } from 'next/router';
// import { Navigation, Thumbs } from 'swiper';
// import { Swiper } from 'swiper/react';
// import { SwiperSlide } from 'swiper/react';
//import Image from 'next/image';
// import Image from 'next/image';
import React from 'react';
import projects from 'constants/du-an-da-lam';
import fs from 'fs';
import path from 'path';
import Album from 'components/common/Album';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';

function DetailHomeTemplate({ data, title, slug }) {
    return (
        <>
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
    const dirs = fs.readdirSync(path.join('public', 'du_an_da_lam'), {
        encoding: 'utf-8',
    });
    const paths = dirs.map((dir, index) => ({
        params: { mauNhaID: dir },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const files = fs.readdirSync(
        path.join('public', 'du_an_da_lam', params.mauNhaID),
    );
    const data = files
        .filter((filename) => !filename.includes('.mp4'))
        .map((filename, index) => ({
            original: `/du_an_da_lam/${params.mauNhaID}/${filename}`,
            thumbnail: `/du_an_da_lam/${params.mauNhaID}/${filename}`,
            embedUrl: filename.includes('.mp4')
                ? `/du_an_da_lam/${params.mauNhaID}/${filename}`
                : '',
            thumbnailClass: filename.includes('.mp4')
                ? 'video-featured-thumb'
                : '',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
        }));
    return {
        props: {
            data,
            title: projects[params.mauNhaID],
            slug: params.mauNhaID,
        },
    };
}
