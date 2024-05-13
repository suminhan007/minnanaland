import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Has } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Has>
    <App />
  </Has>
  // </React.StrictMode>,
);
