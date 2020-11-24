import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { ProductProvider } from './components/context/productContext';

ReactDOM.render(
  <ProductProvider>
    <App id="sizepickerServiceComponent" />
  </ProductProvider>,
  document.getElementById('SizePicker'),
);
