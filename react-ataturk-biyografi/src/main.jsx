import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Dogumtarihi from './components/dogumtarihi.jsx'
import Egitimhayati from './components/egitimhayati.jsx'
import Katildigisavaslar from './components/katildigisavaslar.jsx'
import Olumtarihi from './components/olumtarihi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Dogumtarihi />
    <Egitimhayati/>
    <Katildigisavaslar/>
    <Olumtarihi/>
  </React.StrictMode>,
)
