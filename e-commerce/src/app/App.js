import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Global.scss';
import './App.css';

import Auth from '../auth/Auth.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      contacts: null
    }
  }

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

  addProductToState = (newProduct) => {
    let updatedProducts = [...this.state.products, newProduct];
    this.setState({products: updatedProducts});
  }

  removeProductFromState = (removeProduct) => {
    let filteredProducts = this.state.products.filter(product => product._id !== removeProduct._id)
    this.setState({products: filteredProducts});
  }

  updateProductInState = (updatedProduct) => {
      let index = this.state.products.findIndex(product => product._id === updatedProduct._id);
      let products = [...this.state.products];
      products[index] = updatedProduct;

      this.setState({products});
  }

  addContactToState = (newContact) => {
    let updatedContacts = [...this.state.contacts, newContact];
    this.setState({contacts: updatedContacts});
  }

  componentDidMount = () => {
    // this.fetchProducts();
    // this.fetchContacts();
  };

  fetchContacts = () => {
    const url = "http://localhost:5000/contacts";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({contacts: resJSON});
        console.log(this.state.contacts)
      });
  }

  fetchProducts = () => {
    const url = "http://localhost:5000/tattoos";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({products: resJSON});
      });
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
        <div className="App">
          {/*///////////////*/}
            <button onClick={this.goTo.bind(this, 'home')} >Home</button>

            {
              !isAuthenticated() && (
                <button onClick={this.login.bind(this)}>Log In</button>
              )
            }
            {
              isAuthenticated() && (
                <button onClick={this.logout.bind(this)}>Log Out</button>
              )
            }            
          {/*///////////////*/}
        </div>
    );
  }
}

export default App;
