var React = require('react');
var Display = require('./parts/Display');
var Join = require('./parts/Join');

class Audience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <h1> Audience: </h1>
        <Display if={this.props.status === 'connected'}>
          <h1>Join the session</h1>
          <Join emit={this.props.emit}></Join>
        </Display>
      </div>
    )
  }
}

module.exports = Audience;