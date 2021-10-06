import React, { Fragment } from 'react';
import './layout.scss';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <div className='page-body'>
                {props.children}
            </div>

            <Footer />

        </Fragment>
    );
};

export default Layout;
