import React from 'react';
import { Route, Switch } from 'react-router';
import Homepage from '../pages/Homepage/Homepage';
import Blogpage from '../pages/Blogpage/Blogpage';

function AppRouter(){

    return <>
        <Switch>
            <Route exact path='/' >
                <Homepage />
            </Route>

            <Route exact path='/:id' >
                <Blogpage />
            </Route>
        </Switch>
    </>;
}

export default AppRouter;