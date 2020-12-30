import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from '../src/User/Login/login';
import {BrowserRouter} from 'react-router-dom'
import Reducer from './reducer/RootReducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(Reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
    <BrowserRouter>
    <App />
    {/* <Login/> */}
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


