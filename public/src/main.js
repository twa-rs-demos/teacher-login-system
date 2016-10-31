import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={A}/>
            <Route path='/d' component={D}>
                <Route path="/b" component={B}/>
                <Route path="/c" component={C}/>
            </Route>
        </Route>

    </Router>
    , document.getElementById('app'));
