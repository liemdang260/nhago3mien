import { AnimationOnScroll } from 'react-animation-on-scroll';

const Search = () => {
    return (
        <AnimationOnScroll
            initiallyVisible={true}
            animateIn='animate__lightSpeedInLeft'
            duration={3}
        >
            <h2>Some Text</h2>
        </AnimationOnScroll>
    );
};

export default Search;

