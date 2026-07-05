import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
import Mycounterapp from './counter/components/mycounterapp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GifsApp></GifsApp>
{/*<Mycounterapp></Mycounterapp>*/}
  </React.StrictMode>,
)
