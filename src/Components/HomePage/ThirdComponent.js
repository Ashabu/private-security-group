import React, { useEffect, useRef, useState } from "react";



const ThirdContainer = (props) => {

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
                        <p>P &amp; S Group შედგება სამართალდაცვითი და ოპერატიული საქმიანობის სფეროში გამოცდილი კადრებისგან, რომელთაც გააჩნიათ ინფორმაციის სწრაფად, ხარისხიანად და კონფიდენციალურად მოპოვებისათვის საჭირო ცოდნა და უნარ-ჩვევები</p>
                    </div>
                    <div className='text' style={isVisible? styles.isContentVisible : styles.isContentNotVisible}>
                        <p>საჭიროების შემთხვევაში ჩვენი გუნდი მზად არის მომსახურების   უზრუნველყოფისთვის აუცილებელი სამუშაოები აწარმოოს ქვეყნის გარგლებს გარეთ</p>
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