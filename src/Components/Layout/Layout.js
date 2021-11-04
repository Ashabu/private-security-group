import React, {useEffect, Fragment } from 'react';
import './layout.scss';
import Footer from './Footer';
import Header from './Header';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';


ReactGA.initialize(globalConfig.react_GA_TRACKING_ID);
const Layout = (props) => {

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    
    return (
        <Fragment>
            <Header />
            <div className='page-body'>
                {props.children}
                <Footer />
            </div>

            

        </Fragment>
    );
};

export default withRouter(Layout);
