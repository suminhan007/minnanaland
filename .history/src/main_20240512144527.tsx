import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { h } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <h>
    <App />
  </h>
  // </React.StrictMode>,
);
