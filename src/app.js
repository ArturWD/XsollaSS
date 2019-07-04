import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import XsollaPaymentsApp from './components/XsollaPaymentsApp';


const store = configureStore();

const app = (
  <Provider store={store}>
    <XsollaPaymentsApp />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));


