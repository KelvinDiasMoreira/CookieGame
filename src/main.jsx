import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './GlobalStyles.styles'
import ProviderCookie from './context/ProviderCookie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderCookie>
    <App />
    <GlobalStyles />
    </ProviderCookie>
  </React.StrictMode>,
)
