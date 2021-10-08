import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import './servicesPage.scss';
import axios from 'axios'
import ServiceItem from '../../Components/ServicesPage/ServiceItem';


const ServicesPage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/Assets/data.json').then(res => {
            setServices(res.data.services)
        })
    }, [])


    return (
        <Layout>
            <div className='se-cont'>
                <div className='se-cont-left'>
                    <img src='../../Assets/Images/services/services2.jpg' />
                </div>
                <div className='se-cont-right'>
                    {services?.map((s, i) => (
                        <ServiceItem key={i} services={s} />
                    ))}
                </div>

            </div>
        </Layout>
    )
}

export default ServicesPage;