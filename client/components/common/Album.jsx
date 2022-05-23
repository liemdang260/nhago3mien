import Title from 'components/common/Title';
import ImageGallery from 'react-image-gallery';
import React from 'react';

class Album extends React.Component {
    constructor() {
        super();
        this.state = {
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            slideDuration: 450,
            slideInterval: 3000,
            slideOnThumbnailOver: false,
            showVideo: {},
        };

        // this.images = [
        //     {
        //         original: `/du_an_da_lam/cong-go/1.jpg`,
        //         thumbnail: `/du_an_da_lam/cong-go/1.jpg`,
        //         embedUrl: '/video.mp4',
        //         renderItem: this._renderVideo.bind(this),
        //         thumbnailClass: 'video-featured-thumb',
        //         // description: 'Render custom slides (such as videos)',
        //     },
        //     {
        //         original: `/du_an_da_lam/cong-go/2.jpg`,
        //         thumbnail: `/du_an_da_lam/cong-go/2.jpg`,
        //         originalClass: 'featured-slide',
        //         thumbnailClass: 'featured-thumb',
        //         // description: 'Custom class for slides & thumbnails',
        //     },
        // ].concat(this._getStaticImages());
        // console.log(this.images);
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
        // console.log();
        // console.log(index);
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
                {/* {item.isVideo ? ( */}
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
    }

    _getStaticImages() {
        let images = [];
        for (let i = 3; i < 16; i++) {
            images.push({
                original: `/du_an_da_lam/cong-go/${i}.jpg`,
                thumbnail: `/du_an_da_lam/cong-go/${i}.jpg`,
                originalClass: `featured-slide`,
            });
        }

        return images;
    }
    render() {
        return (
            <section className='app'>
                <div className='my-5'>
                    <Title title={this.props.title} />
                </div>
                <div className='container px-4'>
                    <ImageGallery
                        ref={(i) => (this._imageGallery = i)}
                        items={this.props.data}
                        onClick={this._onImageClick.bind(this)}
                        onImageLoad={this._onImageLoad}
                        onSlide={this._onSlide.bind(this)}
                        onPause={this._onPause.bind(this)}
                        onScreenChange={this._onScreenChange.bind(this)}
                        onPlay={this._onPlay.bind(this)}
                        infinite={true}
                        // showBullets={true}
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
                </div>
                <div className='mb-20'></div>
                <style>
                    {`                        
                        .image-gallery-thumbnail {
                            width: 200px;                                                        
                        }
                        .image-gallery-thumbnail-image {
                            object-fit: cover;
                            max-height: 134.22px;
                        }
                        .video-featured-thumb {
                            position: relative
                        }
                        .video-featured-thumb::before {
                            content: "";
                            position: absolute;                                                        
                            z-index: 10;
                            border-style: solid;
                            border-width: 30px 40px;
                            border-color: transparent transparent transparent rgba(255,255,255,0.5);
                            top: 50%;
                            left: 50%;
                            transform: translate(-15%, -45%);
                            transition: all 0.3s;                         
                        }
                        .video-featured-thumb:hover::before {
                            border-left-color: rgba(255,255,255,1);
                        }    
                        .video-slide {
                            margin: 0 auto;                            
                        }
                        .video-slide {
                            margin: 0 auto;
                            height: 362px;
                        }
                        @media screen and (min-width: 576px){
                            .video-slide {                               
                                height: 432px;
                            }
                        }
                        @media screen and (min-width: 768px){     
                            .video-slide {                                
                                height: 575px;
                            }
                        }
                        @media screen and (min-width: 992px){
                            .featured-slide {
                                height: 700px;
                            }
                            .video-slide {                                
                                height: 700px;
                            }
                        }
                    `}
                </style>
            </section>
        );
    }
}

export default Album;
