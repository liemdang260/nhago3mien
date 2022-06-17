import React from 'react';
import fs from 'fs';
import path from 'path';
import Album from 'components/common/Album';
import references from 'constants/thu-vien-tu-lieu';
import Breadcrumb from 'components/common/SideBar/Breadcrumb';

function ReferencesAlbum({ data, title, slug }) {
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
    const data = files.map((filename, index) => ({
        id: index,
        original: `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`,
        thumbnail: filename.includes('.mp4')
            ? '/images/placeholderThumbnail.jpeg'
            : `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`,
        embedUrl: filename.includes('.mp4')
            ? `/thu-vien-tu-lieu/${params.tulieuID}/${filename}`
            : '',
        thumbnailClass: filename.includes('.mp4')
            ? 'video-featured-thumb'
            : 'featured-thumb',
        originalClass: filename.includes('.mp4') ? '' : 'featured-slide',
        isVideo: filename.includes('.mp4'),
    }));
    return {
        props: {
            data,
            title: references[params.tulieuID],
            slug: params.tulieuID,
        },
    };
}

