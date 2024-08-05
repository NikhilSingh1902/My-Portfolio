import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Home/>
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App
