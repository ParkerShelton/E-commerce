import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Admin from './pages/admin/Admin';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Callback from './components/callback/Callback';

import Auth from '../auth/Auth';
import history from '../history';

const auth = new Auth();


const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class Routes extends Component {
  render() {

    return (
        <div className="Routes">
          <Router history={history} component={Home}>
            <div className="Routes">
              <Header auth={auth} />

              <Switch>
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                
                <Route exact path="/products" render={() => <Products products={this.props.products} />} />

                <Route exact path="/contact" render={() => <Contact addContactToState={this.props.addContactToState} contacts={this.props.contacts} />} />

                <Route exact path="/admin" render={() => (<Admin updateProductInState={this.props.updateProductInState} removeProductFromState={this.props.removeProductFromState} addProductToState={this.props.addProductToState} contacts={this.props.contacts} products={this.props.products}/>)} />


                <Route exact path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
                }}/>

                <Route component={Error} />
              </Switch>

              <Footer />
            </div>
          </Router>
        </div>
    );
  }
}

export default Routes;



