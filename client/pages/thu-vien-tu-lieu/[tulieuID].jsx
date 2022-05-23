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
import references from 'constants/thu-vien-tu-lieu';

function ReferencesAlbum({ data, title }) {
    return <Album title={title} data={data} />;
}
export default ReferencesAlbum;

export async function getStaticPaths() {
    const dirs = fs.readdirSync(path.join('public', 'thu-vien-tu-lieu'), {
        encoding: 'utf-8',
    });
    const paths = dirs.map((dir, index) => ({
        params: { tulieuID: dir },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const files = fs.readdirSync(
        path.join('public', 'thu-vien-tu-lieu', params.tulieuID),
    );
    const data = files
        .filter((filename) => !filename.includes('.mp4'))
        .map((filename, index) => ({
            original: `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`,
            thumbnail: `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`,
            embedUrl: filename.includes('.mp4')
                ? `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`
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
            title: references[params.tulieuID],
        },
    };
}
