import React, { Component } from 'react';
import './Error.css';

class Error extends Component {
  render() {
    return (
      <div className="Error">
        
        <div className="errorContainer">
          <h3 className="num">404</h3>
          <h2>Oops! Nothing to see here.</h2>
          <p className="">The page you're looking for doesn't exist. Maybe you typed in the wrong path... or maybe you are actually just in the wrong dimension? I'd go with the latter.</p>
        </div>

      </div>
    );
  }
}

export default Error;
