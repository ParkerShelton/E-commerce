import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Global.scss';
import './App.css';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Admin from './pages/admin/Admin';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    }
  }


  // updateState = (newProduct) => {
  //   if(this.state.products !== null) {
      
  //     console.log("called");
      
  //     let index = this.state.products.findIndex(product => product._id === newProduct.id);
  //     let products = [...this.state.products];
  //     products[index] = newProduct;

  //     this.setState({products});
  //   }
  // }

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


  componentDidMount = () => {
    const url = "http://localhost:5000/tattoos";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({products: resJSON});
      });
  
  };


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" render={() => (<Products products={this.state.products}/>)} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" render={() => (<Admin updateProductInState={this.updateProductInState} removeProductFromState={this.removeProductFromState} addProductToState={this.addProductToState} products={this.state.products}/>)} />
            <Route component={Error} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
