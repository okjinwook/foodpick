import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mode = 'home';

function reducer(state = mode, action) {
  if(action.type == 'step1') {
    state = action.type;
    return state;
  }
  if(action.type == 'step2') {
    state = action.type;
    return state;
  }
  if(action.type == 'step3') {
    state = action.type;
    return state;
  }
  if(action.type == 'step4') {
    state = action.type;
    return state;
  }
  if(action.type == 'step5') {
    state = action.type;
    return state;
  }
  else {
    return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

