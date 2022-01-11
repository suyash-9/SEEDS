import React, { Component } from "react";
import { Route,Router ,Switch} from 'react-router-dom';
import history from './history';

import{Login} from "./components/Login/Login";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    {/* <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}