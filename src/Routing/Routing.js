import React from "react";
import { Route, Switch } from 'react-router';

const Routing = () => {
    return (
        <Switch>
            <Route path='/' component={AuthPage} exact />
            <Route path='/main' component={MainPage} />
        </Switch>
    )

}

export default Routing;