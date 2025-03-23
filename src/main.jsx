import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { DBProvider } from "./contexts/dbContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DBProvider>
    <App />
    </DBProvider>
  </React.StrictMode>,
)
// Context provider is used here only for testing!