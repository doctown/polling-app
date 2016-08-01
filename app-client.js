/**
 * Created by docto on 7/1/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

var App = require('./component/app');
var Audience = require('./component/Audience');
var Board = require('./component/Board');
var Speaker = require('./component/Speaker');

// Handles routes
var routes = (
  <Router>
    <Route path="/" component={App}></Route>
    <Route path="speaker" component={Speaker}></Route>
    <Route path="board" component={Board}></Route>
    <Route path="audience" component={Audience}></Route>
  </Router>
);

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('react-container'));