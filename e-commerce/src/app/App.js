import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Global.scss';
import './App.css';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
