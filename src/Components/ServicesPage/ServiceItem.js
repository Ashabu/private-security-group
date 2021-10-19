import React, { useContext } from 'react';
import '../../Containers/ServicesPage/servicesPage.scss';
import { AppContext } from '../../Context/AppContext';

const ServiceItem = (props) => {

    const {activeLang} = useContext(AppContext);
    const {title, imgUrl} = props.services
    return (
        <div className = 'se-item' onClick = {props.onClick}>
            <div className = 'se-item-body' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)`}}>
                
            </div>
            <div className = 'se-item-footer'>
                <span>{title?.[0]?.[activeLang]}</span>
                
            </div>
            
        </div>
    );
};

export default ServiceItem;