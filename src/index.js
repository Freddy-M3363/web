import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //importing css
import reportWebVitals from './reportWebVitals';
import Inter from './Components/inter/inter';
import Main from './Components/inter/mainbody';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Inter/>
  <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
