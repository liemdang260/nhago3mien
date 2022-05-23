import { withRouter } from 'next/router';
// import { Navigation, Thumbs } from 'swiper';
// import { Swiper } from 'swiper/react';
// import { SwiperSlide } from 'swiper/react';
// import AllHomeTemplate, { dummyData } from '..';
// import Image from 'next/image';
import Title from 'components/common/Title';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import Image from 'next/image';
const PREFIX_URL =
    'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1200/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1200/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1200/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1200/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1200/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];

// const DetailHomeTemplate = () => {
//     const router = useRouter();
//     const [activeItem, setAciveItem] = useState();
//     useEffect(() => {}, [activeItem]);
//     const { loaiNhaID, mauNhaID } = router.query;

//     // Cofigurate
//     const ProductImagesSlider = (props) => {
//         return (
//             <div className='pt-6'>
//                 <Title title={mauNhaID} />
//                 <div className='flex flex-col sm:flex-row my-5'>
//                     <div className='w-full overflow-hidden p-2 inline-block'>
//                         <ImageGallery items={images} />
//                     </div>
//                     {/* <div className='inline-block p-7 h-full w-11/12 mx-4 sm:w-2/5 sm:ml-10 border border-black'>
//                         <p className='text-primary-color text-lg font-bold inline-block my-2'>
//                             Loại nhà:
//                         </p>{' '}
//                         {mauNhaID}
//                         <br />
//                         <p className='text-primary-color text-lg font-bold inline-block my-2'>
//                             Miêu tả:
//                         </p>{' '}
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry. Lorem Ipsum has been the industrys
//                         standard dummy text ever since the 1500s, when an
//                         unknown printer took a galley of type and scrambled it
//                         to make a type specimen book.
//                         <p className='text-primary-color text-lg font-bold inline-block my-2'>
//                             Thông tin khác:
//                         </p>{' '}
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry. Lorem Ipsum has been the industrys
//                         standard dummy text ever since the 1500s, when an
//                         unknown printer took a galley of type and scrambled it
//                         to make a type specimen book.
//                     </div> */}
//                 </div>
//                 {/* <Title title='Những mẫu nhà đẹp khác' />
//                 <AllHomeTemplate /> */}
//             </div>
//         );
//     };

//     return (
//         <>
//             <div className='container'>
//                 {/* Carosel image */}
//                 <ProductImagesSlider images={dummyData.slice(0, 10)} />
//             </div>
//             <style>{`
//                  .swiper:hover .swiper-button-prev, .swiper:hover .swiper-button-next {
//                     transform: translateX(0) translateY(-40%);
//                 }
//                 .swiper-slide {
//                     height: initial !important;
//                 }

//                 .swiper-button-prev,
//                 .swiper-button-next {
//                     background-color: rgba(0, 0, 0, 0.3);
//                     padding: 2rem 1.5rem;
//                     transition: transform 0.3s;
//                     will-change: transform;
//                     transform-origin: top;
//                 }
//                 .swiper-button-prev:hover,
//                 .swiper-button-next:hover {
//                     transform: scale(1.1) translateY(-45%) translateX(0) !important;
//                 }
//                 .swiper-button-prev {
//                     left: 0;
//                     transform: translateY(-40%) translateX(-100%);
//                 }
//                 .swiper-button-next {
//                     right: 0;
//                     transform: translateY(-40%) translateX(100%);
//                 }
//                 .mySwiper {
//                     min-height: 300px;
//                     margin-top: 40px;
//                     padding-bottom: 10px;
//                 }
//                 .swiper-slide-thumb-active {
//                     border-color: #ff02f2;
//                 }
//                 .mySwiper .swiper-pagination {
//                     bottom: 0
//                 }
//                 @media screen and (max-width:576px){
//                     .mySwiper {
//                         padding-bottom: 30px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default DetailHomeTemplate;
class DetailHomeTemplate extends React.Component {
    constructor() {
        super();
        this.state = {
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            showVideo: {},
        };

        this.images = [
            {
                thumbnail: `/du_an_da_lam/cong_go/1.jpg`,
                original: `/du_an_da_lam/cong_go/1.jpg`,
                embedUrl: '/video.mp4',
                description: 'Render custom slides (such as videos)',
                renderItem: this._renderVideo.bind(this),
            },
            {
                original: `/du_an_da_lam/cong_go/2.jpg`,
                thumbnail: `/du_an_da_lam/cong_go/2.jpg`,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                // description: 'Custom class for slides & thumbnails',
            },
        ].concat(this._getStaticImages());
    }

    _onImageClick(event) {
        console.debug(
            'clicked on image',
            event.target,
            'at index',
            this._imageGallery.getCurrentIndex(),
        );
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        if (event.target.value > 0) {
            this.setState({ [state]: event.target.value });
        }
    }

    _handleCheckboxChange(state, event) {
        this.setState({ [state]: event.target.checked });
    }

    _getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail: `${PREFIX_URL}${i}t.jpg`,
            });
        }

        return images;
    }

    _resetVideo() {
        this.setState({ showVideo: {} });

        if (this.state.showPlayButton) {
            this.setState({ showGalleryPlayButton: true });
        }

        if (this.state.showFullscreenButton) {
            this.setState({ showGalleryFullscreenButton: true });
        }
    }

    _toggleShowVideo(url) {
        // this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: {
                [url]: !Boolean(this.state.showVideo[url]),
            },
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({ showGalleryPlayButton: false });
            }

            if (this.state.showFullscreenButton) {
                this.setState({ showGalleryFullscreenButton: false });
            }
        }
    }

    _renderVideo(item) {
        return (
            <div>
                {this.state.showVideo[item.embedUrl] ? (
                    <div className='video-wrapper'>
                        <a
                            className='close-video'
                            onClick={this._toggleShowVideo.bind(
                                this,
                                item.embedUrl,
                            )}
                        ></a>
                        <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            className='h-[600px] mx-auto'
                            id='videoPlay'
                        >
                            <source src={item.embedUrl} />
                        </video>
                    </div>
                ) : (
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
                )}
            </div>
        );
    }

    render() {
        return (
            <section className='app'>
                <div className='my-5'>
                    <Title title={this.props.router.query.mauNhaID} />
                </div>
                <ImageGallery
                    ref={(i) => (this._imageGallery = i)}
                    items={this.images}
                    onClick={this._onImageClick.bind(this)}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                    onPause={this._onPause.bind(this)}
                    onScreenChange={this._onScreenChange.bind(this)}
                    onPlay={this._onPlay.bind(this)}
                    infinite={true}
                    showBullets={true}
                    showFullscreenButton={
                        this.state.showFullscreenButton &&
                        this.state.showGalleryFullscreenButton
                    }
                    showPlayButton={
                        this.state.showPlayButton &&
                        this.state.showGalleryPlayButton
                    }
                    showThumbnails={true}
                    showIndex={true}
                    showNav={true}
                    isRTL={false}
                    thumbnailPosition={'bottom'}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                    additionalClass='app-image-gallery'
                    useWindowKeyDown={true}
                />
                <div className='mb-20'></div>
                <style>
                    {`
                        .image-gallery-thumbnail-image {
                            height: 60px;
                        }
                    `}
                </style>
            </section>
        );
    }
}

export default withRouter(DetailHomeTemplate);
