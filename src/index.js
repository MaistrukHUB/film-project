import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './scss/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  // </React. StrictMode>
);
