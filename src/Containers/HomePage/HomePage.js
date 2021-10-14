import React, { useEffect, useState } from 'react';
import './homePage.scss';
import Layout from './../../Components/Layout/Layout';
import Firstcontainer from './../../Components/HomePage/FirstContainer';
import SecondContainer from '../../Components/HomePage/SecondContainer';
import ThirdContainer from '../../Components/HomePage/ThirdComponent';
import FourthContainer from '../../Components/HomePage/FourthContainer';
import ServicesContainer from '../../Components/HomePage/ServicesContainer';

const HomePage = () => {

    const [isVisible, setIsVisible] = useState(false);
   

    useEffect(() => {
       window.addEventListener('scroll', handleScrollListener);
        return () => {
           window.removeEventListener('scroll', handleScrollListener)
        }
    }, [])

    const handleScrollListener = () => {
        let element = document.getElementById('service-cont');
        if(handleElementVisibility(element)) {
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
                console.log('section is visible')
            return true;
        }
        console.log('section is not visible')
        return false;
    }





return (
    <Layout>
        <Firstcontainer />
        <ServicesContainer visible = {isVisible}/>
        <SecondContainer visible = {isVisible}/>
        <ThirdContainer />
        <FourthContainer />

    </Layout>
);
}

export default HomePage;
