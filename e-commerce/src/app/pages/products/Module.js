import React, { Component } from 'react';
import './Products.css';

class Module extends Component {

  render() {
    return (
      <div className="Module">
        <div className="infoContainer">

          <div className="leftColumn">
            <img className="prodImg" alt="prodImg"/>
            <p className="prodPrice">{`$ ${this.props.product.price}`}</p>
            <p className="prodCategory">{this.props.product.category}</p>
          </div>

          <div className="rightColumn">
            <h2 className="prodName">{this.props.product.name}</h2>
            <p className="prodDescription">{this.props.product.description}</p>
          </div>          

        </div>
      </div>
    );
  }
}

export default Module;
