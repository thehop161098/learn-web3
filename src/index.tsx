import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider as ThemeProviderContext } from './context/ThemeContext'
import './index.scss'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </BrowserRouter>
  </Provider>
)
