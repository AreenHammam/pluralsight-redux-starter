// app entry point

/*eslint-disable import/default */
import 'babel-polyfill'; // babel transpile ES6 to ES5, but there are features in ES6 babel cannot transpile, so for those we use polyfill
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // is higher-order component that attaches our store to our react container components.
import { Router, browserHistory } from 'react-router'; // browser history : cleaned URLs no #
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


// update our app's entry point to work with Redux
const store = configureStore(); // create an instance of the store (optional to pass initial state)
// when to pass initial state, if we want tp rehydrate the store using some separte state thats passed down from the server or stored in local storage. but in this case, we override the default params that we specify in our reducers
store.dispatch(loadCourses()); // dispach is fun that allow you to fire off your actions
store.dispatch(loadAuthors());

// wrap our router component with the provider component so we can bde able to access our Reduc store in our components.
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
