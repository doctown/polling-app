/**
 * Created by docto on 7/1/2016.
 */
var React = require('react');
var io = require('socket.io-client');
var Header = require('./segments/Header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var app = React.createClass({
  getInitialState() {
    return {
      status: 'disconnected',
      title: ''
    }
  },
  
  emit(eventName, data) {
    this.socket.emit(eventName, data);
  },
  
  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
  },

  connect() {
    alert("Connected: " + this.socket.id);
    this.setState({ status: 'connected'});
  },

  disconnect() {
    this.setState({status: 'disconnect'});
  },

  welcome(serverState) {
    this.setState({title: serverState.title});
  },
  // Pass all properties of the state down
  render() {
    return (
      <div>
        <Header title={this.state.title} status={this.state.status}> Hello World from React</Header>
        <RouteHandler emit={this.emit} {...this.state} />
      </div>
    );
  }
});

module.exports = app;