function Title({ title, size = '5xl' }) {
    return (
        <div className='flex items-center my-6'>
            <div className='border-solid border-primary-color border-t-2 flex-grow my-0'></div>
            <h3
                className={`px-6 font-bold text-${
                    size == '5xl' ? size : `[${size}]`
                } font-edwardianKT text-primary-color`}
            >
                {title}
            </h3>
            <div className='border-solid border-primary-color border-t-2 flex-grow my-0'></div>
        </div>
    );
}

export default Title;

