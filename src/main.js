import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import store from './store';

/*import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import app from 'reducers/newGame';

const reducer = combineReducers({ app });

const store = createStore(reducer);*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));