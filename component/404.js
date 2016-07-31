import { React, Link } from 'react';

var Error404 = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>404 Error</h1>
        <p> You have encountered a page that does not exist!
          Were you looking for one of these:
          <Link to="/">Join as Audience</Link>
          <Link to="/speaker">Start the presentation</Link>
          <Link to="/board">View the board</Link>
        </p>
      </div>
  );
  }
});

module.exports = Error;