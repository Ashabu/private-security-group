import React, { useContext, useEffect, useRef, useState } from "react";
import AnimatedSearch from "../AnimatedSearch/AnimatedSearch";
import WrapperWithListener from "../../HOC/WrapperWithListener";
import { Link } from "react-router-dom";
import {AppContext} from'../../Context/AppContext';



const FirstContainer = (props) => {
    const [tIndex, setTindex] = useState(0);
    const [isVisible, setIsVisible] = useState(false)

    const handleChangeTindex = () => {
        let i = tIndex;
        i++;
        if (i > 4) {
            i = 0;
        };
        setTindex(i);
    }

    const {Langs} = useContext(AppContext);

    

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScrollListener);
    //     return () => {
    //         window.removeEventListener('scroll', handleScrollListener);
    //     }
    // }, []);

    // const handleScrollListener = () => {
    //     let element = document.getElementById('first-container')
    //     if (handleElementVisibility(element)) {
    //         setIsVisible(true);
    //         return true;
    //     } else {
    //         setIsVisible(false);
    //         return false
    //     };
    // };

    // const handleElementVisibility = (element) => {
    //     const section = element;
    //     console.log('aqane, ===>', element)
    //     if(element) {
    //         let domRect = section.getBoundingClientRect();

    //     if ((domRect.top + (section.offsetHeight / 3) <= (window.innerHeight
    //         || document.documentElement.clientHeight)) && domRect.bottom > (section.offsetHeight / 2.5)) {
    //         console.log(element, ' ----> section is visible')
    //         return true;
    //     };
    //     console.log( element, '---> section is not visible')
    //     }
    //     return false;
    // };



    return (
        <div id="first-container" className='cont-1-wrap'>
            <div className='cont-body'>
                <div className='cont-top'>
                    <div className='subcont-title'>
                        <h1>{Langs.headerText}</h1>
                    </div>
                    <div className='search-cont'>
                        <AnimatedSearch index={tIndex} onSetIndex={handleChangeTindex} />
                    </div>
                </div>


                <div className='cont-mid'>
                    <div className = 'with-bg animation1'>
                        <p>
                            {Langs.firstContText1}
                        </p>
                    </div>
                   
                </div>
                <div className = 'with-bg animation2'>
                        <p>
                        {Langs.firstContText2}
                        </p>
                    </div>
                <div className='cont-bot '>
                    <div className='with-bg animation3' >
                        <Link to = '/contact'>
                        <p >
                            {Langs.firstContText3}
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FirstContainer;