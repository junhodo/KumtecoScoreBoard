import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/index';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.querySelector('#root'));
