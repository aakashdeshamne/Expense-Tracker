import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../Fronten/App';
import { GlobalStyle } from '../../Fronten/src/styles/GlobalStyle';
import { GlobalProvider } from './context/globalContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
