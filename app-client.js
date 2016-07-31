/**
 * Created by docto on 7/1/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
var App = require('./component/app');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Audience = require('./component/Audience');
var Board = require('./component/Board');
var Speaker = require('./component/Speaker');

var routes = (
  <Route handler={app}>
    <DefaultRoute handler={Audience} />
    <Route name="speaker" path="speaker" handler={Speaker}></Route>
    <Route name="board" path="board" handler={Board}></Route>
  </Route>
);

Router.run(routes, function(Handler) {
  ReactDOM.render(<App />, document.getElementById('react-container'));
});