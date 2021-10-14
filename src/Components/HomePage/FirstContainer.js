import React, { useEffect, useRef, useState } from "react";
import AnimatedSearch from "../AnimatedSearch/AnimatedSearch";
import WrapperWithListener from "../../HOC/WrapperWithListener";



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
                        <h1>კერძო დეტექტივის მომსახურება</h1>
                    </div>
                    <div className='search-cont'>
                        <AnimatedSearch index={tIndex} onSetIndex={handleChangeTindex} />
                    </div>
                </div>


                <div className='cont-mid'>
                    <div className = 'with-bg'>
                        <p>
                            გსურთ მიიღოთ კონკრეტული პირების შესახებ ინფორმაცია ან გამოიკვლიოთ ფაქტები/გარემოებები, მაგრამ არ გაქვთ ამისათვის საჭირო დრო და საშუალება?
                        </p>
                    </div>
                   
                </div>
                <div className = 'with-bg'>
                        <p>
                            -ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ ოპერატიულად და ხარისხიანად
                        </p>
                    </div>
                <div className='cont-bot'>
                    <div className='with-bg' style ={{margin: 0}}>
                        <p >
                            დეტალური ინფორმაციისთვის დაგვიკავშირდით: (WhatsApp, Telegram, Signal) 599 06 27 50 (ქალბატონებისთვის) ან 599 06 67 50 (მამაკაცებისთვის)
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FirstContainer;