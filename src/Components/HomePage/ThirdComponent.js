import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../Context/AppContext";



const ThirdContainer = (props) => {

    const {Langs} = useContext(AppContext)


    const styles = {
        isContentVisible: {
            position: 'relative',
            right: 0
        },

        isContentNotVisible: {
            position: 'relative',
            right: 900
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
        let element = document.getElementById('container');
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
        <div id="container" className='cont' style={{ backgroundImage: `url(../../../../Assets/Images/HomePage/versionn_9.jpg)` }}>
            <div className='cont-wrap'>
                <div className='cont-right' style={{ alignItems: 'center' }}>
                    <div className='text' style={isVisible? styles.isContentVisible : styles.isContentNotVisible}>
                        <p style={ {color: '#000'}}>{Langs.FourthContText1}</p>
                    </div>
                    <div className='text' style={isVisible? styles.isContentVisible : styles.isContentNotVisible}>
                        <p style={ {color: '#000'}}>{Langs.FourthContText2}</p>
                    </div>
                </div>
                <div className='cont-left'>
                    <img src='../../Assets/Images/HomePage/6.jpg' />
                </div>
            </div>
        </div>
    );
};

export default ThirdContainer;