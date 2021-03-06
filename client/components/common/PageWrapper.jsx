import React from 'react';

function PageItem({ children }) {
    return <>{children}</>;
}

function PageWrapper({ children }) {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className='container grid grid-cols-12'>
            <div className='col-span-12 border-b-[1px] border-gray-300 py-4'>
                {childrenArray[0]}
            </div>

            <div className='hidden sm:block col-span-3 border-r-[1px] border-gray-300 py-4 pr-1 md:pr-5'>
                {childrenArray[1]}
            </div>
            <div className='col-span-12 sm:col-span-9 border-l-[1px] border-gray-300 px-5 md:px-8'>
                {childrenArray[2]}
            </div>
        </div>
    );
}

export { PageWrapper, PageItem };
