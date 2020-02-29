import React, {useState } from 'react';
import Main from './Main.js';
import Astron from './Astron.js'

import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';

export default function MyApp(props) {

    return (
        <Router basename="outthere360">

                <Route exact path="/">
                    <Main/>
                </Route>
                <Route exact path="/astron">
                    <Astron/>
                </Route>

        </Router>
    );
}

