import React from 'react'


function PageItem({ children }) {
    return (
        <>
            {children}
        </>
    )
}

function PageWrapper({ children }) {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className='container grid grid-cols-12'>
            <div className='col-span-12 border-b-[1px] border-slate-400 py-2'>
                {childrenArray[0]}
            </div>
            <div className='col-span-3 border-r-[1px] border-slate-400'>
                {childrenArray[1]}
            </div>
            <div className='col-span-9 border-l-[1px] border-slate-400'>
                {childrenArray[2]}
            </div>
        </div>
    )
}

export { PageWrapper, PageItem }