import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div className="container">
          <ul className="links">
            <li className="link"><NavLink to="/">Home</NavLink></li>
            <li className="link"><NavLink to="/products">Products</NavLink></li>
            <li className="link"><NavLink to="/contact">Contact Us</NavLink></li>          
          </ul>      

          <h2>Artink</h2>
        </div>

      </div>
    );
  }
}

export default Footer;
