import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Root from './client/Root';

import 'bootstrap/dist/css/bootstrap.css';

ReactDom.render(<Root />, document.querySelector('#root'));
