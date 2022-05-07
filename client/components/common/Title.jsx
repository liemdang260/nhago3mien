function Title({ title, size = '3xl', isDivider = true }) {
    return (
        <div className='relative text-center'>
            <h3
                className={`text-color inline-block relative px-8 text-2xl md:text-3xl font-bold font-nunito after:`}
            >
                {title}

                {isDivider && (
                    <div className='hidden md:block relative z-10 w-[6px] h-[6px] mx-auto mt-1 bg-color rounded-full before:absolute before:w-16 before:h-[2px] before:bg-[#6D594C] before:right-[200%] before:top-1/2 before:-translate-y-1/2 after:absolute after:w-16 after:h-[2px] after:bg-[#6D594C] after:left-[200%] after:top-1/2 after:-translate-y-1/2'></div>
                )}
            </h3>
        </div>
    );
}

export default Title;

