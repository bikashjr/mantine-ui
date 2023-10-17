import {MantineProvider} from '@mantine/core';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@mantine/core/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <MantineProvider classNamesPrefix="app">
  <App />
  </MantineProvider>
  
)