import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store.js'; 
import { createRoot } from 'react-dom';

import Home from './views/Home/Home';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
