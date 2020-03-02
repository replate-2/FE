import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';


ReactDOM.render(
<Provider>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

