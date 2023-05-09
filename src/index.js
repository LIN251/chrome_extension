import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ProductForm from './ProductForm';
import FeedbackForm from './Feedback';
import SalesForm from './Sales';

const root = ReactDOM.createRoot(document.getElementById('root'));
//render form
root.render(
  <div>
    <ProductForm />    
    <FeedbackForm />
    <br />
    <hr />
    <hr />
    <SalesForm />
  </div>,
);


reportWebVitals();