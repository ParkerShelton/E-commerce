import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import App from './app/App';
import Home from './app/pages/home/Home';
import Products from './app/pages/products/Products';
import Contact from './app/pages/contact/Contact';
import Error from './app/pages/error/Error';
import Admin from './app/pages/admin/Admin';

import Header from './app/components/header/Header';
import Footer from './app/components/footer/Footer';
import Callback from './app/components/callback/Callback';

import Auth from './auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div className="App">
          {/* <Header /> */}

          <Switch>
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
            
            <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
            
            <Route exact path="/products" render={() => <Products products={this.state.products} />} />

            <Route exact path="/contact" render={() => <Contact addContactToState={this.addContactToState} contacts={this.state.contacts} />} />

            <Route exact path="/admin" render={() => (<Admin updateProductInState={this.updateProductInState} removeProductFromState={this.removeProductFromState} addProductToState={this.addProductToState} contacts={this.state.contacts} products={this.state.products}/>)} />


            <Route exact path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>

            <Route component={Error} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </Router>

  );  
}
