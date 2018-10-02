import auth0 from 'auth0-js';
import history from '../history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'parker-shelton.auth0.com', //Abstract these into variables
    clientID: '0DTWiIUqt53W8mh6YDuWKIRU4zrCYSQo', //
    redirectUri: 'http://localhost:3000/callback', //
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    console.log("Auth.js handleAuthentication");
    this.auth0.parseHash((err, authResult) => {
      console.log("Auth.js error", err);
      console.log("Auth.js authResult", authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log("Auth.js creating a session");
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        console.log("Auth.js had an error");
        history.replace('/home');
        console.log(err);
      } else {
        console.log("Auth.js nothing worked!");
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}