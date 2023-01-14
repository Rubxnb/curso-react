import React from 'react'
import ReactDOM from 'react-dom/client'

//!Añadir boostrap anters que el de index.css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// !los estilos propios deben ir debajo de bootstrap para que no los pisen
import './index.css';
import App from './App'
import AppRoutingOne from './AppRoutingOne';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppRoutingOne />
  </React.StrictMode>,
)

