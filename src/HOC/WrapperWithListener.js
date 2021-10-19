import React, { useEffect, useState, useRef } from 'react';

const WrapperWithListener = (props) => {
    const wrapper = useRef()

   const [classs, setclasss] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollListener);
        return () => {
            window.removeEventListener('scroll', handleScrollListener);
        }
    }, []);

    const handleScrollListener = (e) => {
        let element = wrapper.current;
      // console.log(element)
        if (handleElementVisibility(element)) {
           // setIsVisible(true);
           setclasss(true);
            //return true;
        } else {
            setclasss(false);
           // setIsVisible(false);
            //return false
        };
    };

    // const handleElementVisibility = (element) => {
    //     const section = element;
     
    //     if(element) {
    //         let domRect = section.getBoundingClientRect();
    //         console.log('aqane, ===>', domRect)
    //     if (((window.innerHeight
    //         || document.documentElement.clientHeight) - domRect.top) >= 300) {
    //        // console.log(element, ' ----> section is visible')
    //         return true;
    //     };
    //   //  console.log( element, '---> section is not visible')
    //     }
    //     return false;
    // };
    const handleElementVisibility = (element) => {
            const section = element;
            let domRect = section.getBoundingClientRect();
    
            if ((domRect.top + (section.offsetHeight / 3) <= (window.innerHeight
                || document.documentElement.clientHeight)) && domRect.bottom > (section.offsetHeight / 2.5)) {
                return true;
            }
            return false;
        }
    
let condit =  classs ?  'cont vis' : 'cont'
//console.log(new Date().toTimeString(), wrapper.current)
    return (
        <div ref={wrapper}  className = {condit}>
            {props.children}
        </div>
    );
};

export default WrapperWithListener;