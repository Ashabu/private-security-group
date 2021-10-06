import React from "react";
import { Route, Switch } from 'react-router';
import HomePage from "../Containers/HomePage/HomePage";
import ContactPage from './../Containers/ContactPage/ContactPage';
import ServicesPage from './../Containers/ServicesPage/ServicesPage';
import AboutUsPage from './../Containers/AboutUspage/AboutUsPage';



const Routing = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/aboutUs' component={AboutUsPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/contact' component={ContactPage} />

        </Switch>
    )

}

export default Routing;