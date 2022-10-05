import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/CUD'
import axios from 'axios';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../src/index.css";


axios.defaults.baseURL = 'http://localhost:5000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Home/>
  </React.StrictMode>
);

