import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';

const store = createStore(applyMiddleware(thunk));

ReactDOM.render(
<Provider>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

