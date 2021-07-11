import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
    <Router>
    <ErrorBoundary> <App /></ErrorBoundary> 
    </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
