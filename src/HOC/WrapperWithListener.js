import React, { useEffect, useState, createRef } from 'react';

const WrapperWithListener = (props) => {
    const wrapper = createRef()

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollListener);
        return () => {
            window.removeEventListener('scroll', handleScrollListener);
        }
    }, []);

    const handleScrollListener = () => {
        let element = wrapper.current;
        console.log(element)
        if (handleElementVisibility(element)) {
            setIsVisible(true);
            return true;
        } else {
            setIsVisible(false);
            return false
        };
    };

    const handleElementVisibility = (element) => {
        const section = element;
        console.log('aqane, ===>', element)
        if(element) {
            let domRect = section.getBoundingClientRect();

        if ((domRect.top + (section.offsetHeight / 3) <= (window.innerHeight
            || document.documentElement.clientHeight)) && domRect.bottom > (section.offsetHeight / 2.5)) {
            console.log(element, ' ----> section is visible')
            return true;
        };
        console.log( element, '---> section is not visible')
        }
        return false;
    };


    return (
        <div ref={wrapper}  className = {props.className}>
            {props.children}
        </div>
    );
};

export default WrapperWithListener;