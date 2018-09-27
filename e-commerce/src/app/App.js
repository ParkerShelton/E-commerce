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

  componentDidMount = () => {
    const url = "http://localhost:5000/tattoos";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({products: resJSON});
      });
  
  };


  ProductPage = (props) => {
    return (
      <Products products={this.props.products} />
    );
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
            <Route exact path="/admin" component={Admin} />
            <Route component={Error} />
          </Switch>

          {console.log(this.state.products)}

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
