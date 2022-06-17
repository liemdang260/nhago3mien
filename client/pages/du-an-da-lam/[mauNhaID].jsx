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
    const renderVideo = (item) => {
        return (
            <div>
                {/* {item.isVideo ? ( */}
                <div className='video-wrapper'>
                    {/* <a
                        className='close-video'
                        onClick={this._toggleShowVideo.bind(
                            this,
                            item.embedUrl,
                        )}
                    ></a> */}
                    <video
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        id='videoPlay'
                        className='video-slide'
                        controls
                    >
                        <source src={item.embedUrl} />
                    </video>
                </div>
                {/* ) : (
                    <a
                        onClick={this._toggleShowVideo.bind(
                            this,
                            item.embedUrl,
                        )}
                    >
                        <div className='play-button'></div>
                        <Image
                            className='image-gallery-image'
                            src={item.original}
                            alt='Hinh mau nha'
                            width={906}
                            height={680}
                            loading='lazy'
                        />
                        {item.description && (
                            <span
                                className='image-gallery-description'
                                style={{ right: '0', left: 'initial' }}
                            >
                                {item.description}
                            </span>
                        )}
                    </a>
                )} */}
            </div>
        );
    };
    const data = files.map((filename, index) => ({
        id: index,
        original: `/du_an_da_lam/${params.mauNhaID}/${filename}`,
        thumbnail: filename.includes('.mp4')
            ? '/images/placeholderThumbnail.jpeg'
            : `/du_an_da_lam/${params.mauNhaID}/${filename}`,
        embedUrl: filename.includes('.mp4')
            ? `/du_an_da_lam/${params.mauNhaID}/${filename}`
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
            title: projects[params.mauNhaID],
            slug: params.mauNhaID,
        },
    };
}
