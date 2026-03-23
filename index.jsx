import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';        //  system k node module k ander downlorded css ko conect karne wala
import 'bootstrap/dist/js/bootstrap.bundle.min.js';    //  system k node module k ander downlorded js ko conect karne wala
import { BrowserRouter } from 'react-router-dom';    //  system k node module k ander downlorded js ko conect karne wala


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

