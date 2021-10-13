import React from 'react';

import './servicesPage.scss';
import Layout from '../../Components/Layout/Layout';

const ServiceDetailsPage = (props) => {
    const { title, description, imgUrl } = props.services;
    return (
        <Layout>
            <div className = 'se-cont-det' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)`}}>
                {/* <div style={{width: '50%'}}>
                    <img style={{width: '100%', maxWidth: 500
                }} src = {`../../Assets/Images/services/${imgUrl.trim()}.jpg`} />
                </div> */}
                <div  >
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

            </div>
        </Layout>
    );
}

export default ServiceDetailsPage;