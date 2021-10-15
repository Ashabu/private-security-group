import React from 'react';

import './servicesPage.scss';
import Layout from '../../Components/Layout/Layout';

const ServiceDetailsPage = (props) => {

    const { title, description, imgUrl ,id  } = props.services;

    const handleDetailClass = (id) => {
        let mainCls = 'se-cont-details '
        if(id === 1) {
            return mainCls + 'jc-end-al-center';
        } else if(id === 2) {
            return mainCls + 'jc-start-al-center';
        } else if (id === 3 ) {
            return mainCls + 'jc-start-al-end'
        } else if (id === 4 ) {
            return mainCls + 'jc-start-al-end'
        } else if (id === 5 ) {
            return mainCls + 'jc-end-al-start'
        } else if (id === 6 ) {
            return mainCls + 'jc-start-al-end'
        } else if (id === 7 ) {
            return mainCls + 'jc-end-al-start'
        } else if (id === 8 ) {
            return mainCls + 'jc-end-al-start'
        } else if (id === 9 ) {
            return mainCls + 'jc-center-al-start'
        } else if (id === 10 ) {
            return mainCls + 'jc-start-al-start'
        } else if (id === 11 ) {
            return mainCls + 'jc-center-al-end'
        } else if (id === 12 ) {
            return mainCls + 'jc-end-al-start'
        } else {
            return mainCls
        }
    }






   
    return (
        <Layout>
            <div className='se-cont-det' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)` }}>
                <div className={handleDetailClass(id)}>
                    <div className={`se-det-text-${id}`} >
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServiceDetailsPage;