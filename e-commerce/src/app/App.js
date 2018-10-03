import React, { Component } from 'react';
// import { makeMainRoutes } from './Routes';
import Routes from './Routes';
import './Global.scss';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      contacts: null
    }
  }

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
    this.fetchProducts();
    this.fetchContacts();
  };

  fetchContacts = () => {
    const url = "http://localhost:5000/contacts";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({contacts: resJSON});
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

    return (
        <div className="App">

          <Routes 
            products={this.state.products}
            contacts={this.state.contacts}
            addProductToState={this.addProductToState}
            removeProductFromState={this.removeProductFromState}
            updateProductInState={this.updateProductInState}
            addContactToState={this.addContactToState}
          />

        </div>
    );
  }
}

export default App;
