import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import '@fontsource-variable/martian-mono/wdth.css'
import '@fontsource-variable/geist/wght.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/sections.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
