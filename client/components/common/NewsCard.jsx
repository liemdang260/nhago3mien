import React from 'react';
import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock } from '@fortawesome/free-regular-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import ArticleInsights from './ArticleInsights';
import Link from 'next/link';
import Tooltip from './Tooltip';

function NewsCard({ item }) {
    return (
        <Link href={'#'} passHref>
            <div className='w-full md:w-1/2 p-8 border-t-[1px] border-dotted border-primary-color'>
                <Tooltip title={item.title}>
                    <Image
                        src={item.imgLink}
                        alt='anh dich vu 1'
                        width={375}
                        height={275}
                        className='cursor-pointer'
                        loading='lazy'
                    />
                    <p className='text-primary-color text-lg font-medium mt-2 cursor-pointer hover:text-green-700'>
                        {item.title}
                    </p>
                    <p className='text-[0.8rem] text-gray-400 mt-3'>
                        <ArticleInsights data={item.createAt} icon={faClock} />
                        <ArticleInsights data={item.views} icon={faEye} />
                        <ArticleInsights
                            data={item.tag}
                            icon={faServicestack}
                        />
                    </p>
                    <p className='mt-2 text-gray-600 text-sm'>
                        {item.description}
                    </p>
                </Tooltip>
            </div>
        </Link>
    );
}

export default NewsCard;
