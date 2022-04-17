import React from 'react';

function Tooltip({ children, title }) {
    return (
        <div className='relative group'>
            <div className='absolute bottom-[109%] left-1/2 -translate-x-1/2 whitespace-nowrap px-1 py-[2px] text-[13px] bg-primary-color/[.9] rounded-sm text-white hidden group-hover:block after:border-[5px] after:border-b-transparent after:border-r-transparent after:border-l-transparent after:border-t-black after:absolute after:top-full after:left-1/2'>
                {title}
            </div>
            {children}
        </div>
    );
}

export default Tooltip;
