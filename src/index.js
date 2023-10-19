import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Views/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './../src/Component/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
    
    <Footer/>
  </>
);

reportWebVitals();