import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import './servicesPage.scss';
import axios from 'axios'
import ServiceItem from '../../Components/ServicesPage/ServiceItem';
import ServiceDetailsPage from './ServiceDetailsPage';
import  { route, useHistory } from 'react-router';
import { Route } from 'react-router';
import { useLocation } from "react-router-dom";
import { AppContext } from '../../Context/AppContext';

const ServicesPage = (props) => {
    const history = useHistory();
    const [services, setServices] = useState([]);
    const [serviceDetails, setServiceDetails] = useState({});

    const goDetail = (detail) => {
        setServiceDetails(detail);
        history.push('/services/id/' + detail.id, {serviceDetails});
    }

    useEffect(() => {
        axios.get('http://localhost:9000/Assets/data.json').then(res => {
            setServices(res.data.services)
        })
        
    }, [])

    


    console.log(history.location)
 const getId = () => {
    const search = useLocation().search;
    console.log(search)
    const id=new URLSearchParams(document.location.href).get("id");
    return id;
 }

console.log(serviceDetails)
    return (
        history.location.pathname.includes('id')? 
        <ServiceDetailsPage services = {serviceDetails}/>
        : 
        <Layout>
            <div className = 'se-main'>

            
            <div className='se-cont'>
            {services?.map((s, i) =>(
                <ServiceItem  key = {i} services = {s} onClick={() => { goDetail(s);}}/>
            ))}
            </div>
            </div>


        </Layout>
    )
}

export default ServicesPage;