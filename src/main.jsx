import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Generalinfo, Greeting} from './generalinfo.jsx'
import {Education, Quote} from './education.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Resume</h1>
    <Generalinfo />
    <Greeting/>
    <Education/>
    <Quote/>

  </StrictMode>,
)
