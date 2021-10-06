import React from 'react';
import './homePage.scss';
import Layout from './../../Components/Layout/Layout';
import Firstcontainer from './../../Components/HomePage/FirstContainer';
import SecondContainer from '../../Components/HomePage/SecondContainer';
import ThirdContainer from '../../Components/HomePage/ThirdComponent';
import FourthContainer from '../../Components/HomePage/FourthContainer';

const HomePage = () => {
    return (
        <Layout>
            <Firstcontainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />

        </Layout>
    )
}

export default HomePage;
