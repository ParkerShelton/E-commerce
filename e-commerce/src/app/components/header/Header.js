import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      
        <div className="container">
          <h1 className="title">ArtInk</h1>

          <ul className="links">
            <li className="link"><NavLink to="/">Home</NavLink></li>
            <li className="link">•</li>
            <li className="link"><NavLink to="/products">Products</NavLink></li>
            <li className="link">•</li>
            <li className="link"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="link">•</li>
            <li className="link"><NavLink to="/admin">Admin</NavLink></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Header;
