import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

// Prime React configuration
// import "primereact/resources/primereact.min.css";               //core css
// import "primeicons/primeicons.css";                             //icons
// import "primeflex/primeflex.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


reportWebVitals();
