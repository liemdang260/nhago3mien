import React from 'react';
import Link from 'next/link';

function Breadcrumb({ location }) {
    // console.log(location)
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                <li className='inline-flex items-center'>
                    <Link href={location[0].link}>
                        <a className='text-gray-700 hover:text-gray-900 inline-flex items-center'>
                            <svg
                                className='w-5 h-5 mr-2.5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                            </svg>
                            {location[0].title}
                        </a>
                    </Link>
                </li>
                {location.slice(1, location.length).map((l, index) => (
                    <li key={index}>
                        <div className='flex items-center'>
                            <svg
                                className='w-6 h-6 text-gray-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            <a
                                href={l.link}
                                className='text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium'
                            >
                                {l.title}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;

