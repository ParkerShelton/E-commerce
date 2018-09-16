import React, { Component } from 'react';
import Slider from './Slider';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div className="hero">
          <div className="divOutline">
            <div className="divBG">
              <h2>BLAH BLAH</h2>
              <p>BLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAHBLAH BLAH BLAH BLAH BLAH BLAH</p>
            </div>
          </div>
        </div>

        <Slider />

      </div>
    );
  }
}

export default Home;
