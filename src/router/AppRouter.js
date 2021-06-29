import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../page/Home/Home';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
