import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.Authorization = JSON.parse(localStorage.getItem('token'));
  return request;
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Nuevo botón en el componente Menu (logout)
// Tiene que borrar el token de localStorage (ponerlo a null)
// Tiene que redireccionar hacia el formulario de login