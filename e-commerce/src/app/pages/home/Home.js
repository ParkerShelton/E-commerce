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
              <h2>ArtInk</h2>
              <p>We focus soley on perfecting tattoo designs so your artwork will be crispy and clean for as long as you are!</p>
            </div>
          </div>
        </div>

        <Slider />

      </div>
    );
  }
}

export default Home;
