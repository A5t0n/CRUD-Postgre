import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'

function App() {
  return (
    <>
     <Navbar/>
     <Tablelist/>
    </>
  )
}

export default App
