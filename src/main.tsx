import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppDndProvider from './DnDProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppDndProvider>
    <App />
    </AppDndProvider>
    
  </React.StrictMode>,
)
