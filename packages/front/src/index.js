import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import './index.scss'
import App from './components/App/App'
import theme from './theme'

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
