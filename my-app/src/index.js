import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/home'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Home/>
  </React.StrictMode>
);

