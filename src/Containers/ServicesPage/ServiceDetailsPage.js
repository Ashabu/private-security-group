import React, { useContext } from 'react';

import './servicesPage.scss';
import Layout from '../../Components/Layout/Layout';
import { AppContext } from '../../Context/AppContext';

const ServiceDetailsPage = (props) => {

    const { subtitle, description, imgUrl ,id  } = props.services;
    const {activeLang} = useContext(AppContext)

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
            return mainCls + 'jc-start-al-center'
        } else if (id === 11 ) {
            return mainCls + 'jc-center-al-end'
        } else if (id === 12 ) {
            return mainCls + 'jc-end-al-start'
        } else if (id === 12 )  {
            return mainCls + 'jc-center-al-start'
        }else if (id === 14 ) {
            return mainCls + 'jc-center-al-start'
        } else {
            return mainCls
        }
    }






   
    return (
        <Layout>
            <div className='se-cont-det' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)` }}>
                <div className={handleDetailClass(id)}>
                    <div className={`se-det-text-${id}`} >
                        <p>{description[0][activeLang]}</p>
                        {subtitle? <p>{subtitle[0][activeLang]}</p> : null}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServiceDetailsPage;