import React from 'react';
import '../../Containers/ServicesPage/servicesPage.scss';

const ServiceItem = (props) => {
    const {title, imgUrl} = props.services
    return (
        <div className = 'se-item' onClick = {props.onClick}>
            <div className = 'se-item-body' style={{ backgroundImage: `url(../../Assets/Images/services/${imgUrl.trim()}.jpg)`}}>
                
            </div>
            <div className = 'se-item-footer'>
                <span>{title}</span>
                
            </div>
            
        </div>
    );
};

export default ServiceItem;