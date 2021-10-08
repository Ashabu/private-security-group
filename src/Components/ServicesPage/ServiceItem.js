import React from 'react';

const ServiceItem = (props) => {
    return (
        <div className = 'se-item'>
            <span>{props.services.title}</span>
        </div>
    );
};

export default ServiceItem;