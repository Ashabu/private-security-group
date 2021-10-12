import React from 'react';

const ServiceItem = (props) => {
    const {title, imgUrl} = props.services
    return (
        <div className = 'se-item' onClick = {props.onClick}>
            <span>{title}</span>
        </div>
    );
};

export default ServiceItem;