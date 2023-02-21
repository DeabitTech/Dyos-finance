import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './features/redux/store';
import network from '../src/features/web3/networks';
import GlobalFont from '../src/fonts/font';
import {HashRouter as Router} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}


if(network){
  ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider>
        <GlobalFont/>
        <Router>
          <App />
        </Router>
        </SnackbarProvider>
      </Provider>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
