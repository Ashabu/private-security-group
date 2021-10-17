import React, { useEffect, useRef, useState } from "react";



const FourthContainer = (props) => {

    const styles = {
        isContentVisible: {
            position: 'relative',
            left: 0
        },

        isContentVisible1: {
            position: 'relative',
            left: 100
        },

        isContentNotVisible: {
            position: 'relative',
            left: 900
        }
    }

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScrollListener);
        return () => {
            window.removeEventListener('scroll', handleScrollListener)
        }
    }, [])

    const handleScrollListener = () => {
        let element = document.getElementById('container-1');
        if (handleElementVisibility(element)) {
            setIsVisible(true);
            return true;
        } else {
            setIsVisible(false);
            return false
        }
    }


    const handleElementVisibility = (element) => {
        const section = element;
        let domRect = section.getBoundingClientRect();

        if ((domRect.top + (section.offsetHeight / 3) <= (window.innerHeight
            || document.documentElement.clientHeight)) && domRect.bottom > (section.offsetHeight / 2.5)) {
            return true;
        }
        return false;
    }


    return (
        <div id="container-1" className='cont'>
            <div className='cont-wrap' style={{ backgroundImage: `url(../../../../Assets/Images/HomePage/versionon_4.jpg)` }}>
                <div className='cont-left'>
                    <img src='../../Assets/Images/HomePage/4.png' />
                </div>
                <div className='cont-right' style={{ alignItems: 'center' }}>
                    <div className={isVisible? 'text is-1-visible': 'text is-2-notVisible'} >
                        <p>გაქვთ კითხვები სამართლებრივ სფეროში ან გჭირდებათ იურისტის დახმარება? </p>
                    </div>
                    <div className={isVisible? 'text is-2-visible': 'text is-2-notVisible'} >
                        <p> -ჩვენ გთავაზობთ იურიდიულ მომსახურებას სამართლის სხვადასხვა სფეროში.</p>
                    </div>

                </div>
            </div>
            <div className='text' style={{ maxWidth: '100%', margin: 0}}>
                <h3 style={{paddingTop: 10, paddingBottom: 10 }}>  იყავი ინფორმირებული! იყავი დაცული! </h3>
            </div>


        </div>
    );
};

export default FourthContainer;