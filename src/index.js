import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import './estilo.css';

import Principal from './Principal';

ReactDOM.render(
  <Provider store={store}>
    <Principal/>
  </Provider>,
  document.querySelector('#root')
);
