import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mode = 0;

function reducer(state = mode, action) {
  if(action.type === 'prev') {
    if(state === 0) {
      return state;
    }
    else {
      return state  - 1;
    }
  }
  else if(action.type === 'next') {
    if(state === 6) {
      return state;
    }
    else {
      return state + 1;
    }
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

