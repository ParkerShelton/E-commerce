import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {


/*                   AUTH0                   */
///////////////////////////////////////////////
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }  
/////////////////////////////////////////////////


  render() {

    const { isAuthenticated } = this.props.auth;

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

            <li className="logIn-OutContainer">
              {/*///////////////*/}
                {
                  !isAuthenticated() && (
                    <button className="logIn-OutBtn" onClick={this.login.bind(this)}>Log In</button>
                  )
                }
                {
                  isAuthenticated() && (
                    <button className="logIn-OutBtn" onClick={this.logout.bind(this)}>Log Out</button>
                  )
                }            
              {/*///////////////*/}
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Header;
