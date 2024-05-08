// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { B } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <B>
    <App />
  </B>
  // </React.StrictMode>,
)
