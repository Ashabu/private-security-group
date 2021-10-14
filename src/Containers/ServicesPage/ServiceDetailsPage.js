import React from 'react';

import './servicesPage.scss';
import Layout from '../../Components/Layout/Layout';

const ServiceDetailsPage = (props) => {
    const { title, description, imgUrl } = props.services;
    return (
        <Layout>
            <div className='se-cont-det' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)` }}>
                <div className='se-cont-details flex-end'>
                    <div className='se-det-text-1' >
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServiceDetailsPage;