import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ProductForm from './ProductForm';
import FeedbackForm from './Feedback';
import Manager from './Manager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ProductForm />    
    <FeedbackForm />
    <br />
    <hr />
    <hr />
    <Manager />
  </div>,
);


reportWebVitals();