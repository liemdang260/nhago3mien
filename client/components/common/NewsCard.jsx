import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-regular-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import Tooltip from './Tooltip';

function NewsCard({ item }) {
  return (
    <div className='w-full md:w-1/2 p-8 border-t-[1px] border-dotted border-primary-color'>
      <Tooltip title={item.title}>
        <div className='w-full h-[276px] relative border-[1px] border-dotted border-gray-200'>
          <Image src={item.imgLink} alt="anh dich vu 1" layout='fill' />
        </div>
        <p className='text-primary-color text-lg font-medium mt-2'>{item.title}</p>
        <p className="text-[0.8rem] text-gray-400 mt-3">
          <FontAwesomeIcon icon={faClock} size="sm" className="mr-[2px]" />
          <span className="mr-3">{item.createAt}</span>
          <FontAwesomeIcon icon={faEye} size="sm" className="mr-[2px]" />
          <span className="mr-3">{item.views}</span>
          <FontAwesomeIcon icon={faServicestack} size="sm" className="mr-[2px]" />
          <span>{item.tag}</span>
        </p>
        <p className='mt-2 text-gray-600 text-sm'>{item.description}</p>
      </Tooltip>
    </div>
  )
}

export default NewsCard