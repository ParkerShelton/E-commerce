// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeMainRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';

import Auth from './auth/Auth';

const auth = new Auth();
const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();
