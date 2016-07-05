/**
 * Created by docto on 7/1/2016.
 */
var React = require('react');
var io = require('socket.io-client');
var Header = require('./segments/Header');

var app = React.createClass({
  getInitialState() {
    return {
      status: 'disconnected'
    }
  },

  render() {
    return (
      <div>
          <Header title="My title" status={this.state.status}> Hello World from React</Header>
        </div>
    );
  },

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  },

  connect() {
    alert("Connected: " + this.socket.id);
    this.setState({ status: 'connected'});
  },

  disconnect() {
    this.setState({})
  }
});

module.exports = app;