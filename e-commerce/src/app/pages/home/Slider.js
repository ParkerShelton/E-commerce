import React, { Component } from 'react';
import slide1 from './homeImg/slide1.jpg';
import slide2 from './homeImg/slide2.jpg';
import slide3 from './homeImg/slide3.jpg';

import leftArrow from './homeImg/leftArrow.png'
import rightArrow from './homeImg/rightArrow.png'
import './Home.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: [slide1, slide2, slide3],
      currentIndex: 0
    };
  }


  handleArrows = (event) => {
    let currentIndex = this.state.currentIndex;
    let slider = this.state.slider;

    if(event.target.className === "rightArrow" || event.target.className === "rightArrowImg") {
      if(currentIndex === (slider.length - 1)) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }

    } else if(event.target.className === "leftArrow" || event.target.className === "leftArrowImg") {
      if(currentIndex === 0) {
        currentIndex = (slider.length - 1);
      } else {
        currentIndex = currentIndex - 1;
      }      
    }

    this.setState({currentIndex});

  }



  render() {
    return (
      <div className="Slider">

        <div className="arrowContainer">
          <div className="leftArrow" onClick={(e) => this.handleArrows(e)}>
            <img alt="Left Arrow" className="leftArrowImg" src={leftArrow} onClick={(e) => this.handleArrows(e)}/>
          </div>
          <div className="rightArrow" onClick={(e) => this.handleArrows(e)}>
            <img alt="Right Arrow" className="rightArrowImg" src={rightArrow} onClick={(e) => this.handleArrows(e)}/>
          </div>
        </div>
        
        <div className="slides">
          <img alt="Slides" className="slide" src={this.state.slider[this.state.currentIndex]}/>
        </div>

      </div>
    );
  }
}

export default Slider;
