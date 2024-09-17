import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homework from './Homework.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homework />
     {/* <App />  The <App /> react also work */}
  
  </StrictMode>,
)
