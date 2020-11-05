import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './assets/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Main renderer of our App
 */
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
