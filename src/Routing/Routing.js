import React from "react";
import { Route, Switch } from 'react-router';
import HomePage from "../Containers/HomePage/HomePage";


const Routing = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />

        </Switch>
    )

}

export default Routing;