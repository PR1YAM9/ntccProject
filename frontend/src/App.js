import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import GenImg from './components/GenImg'
// import ImgEx from './components/ImgEx'



const App = () => {
  return (
    <>
          <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genimg" element={<GenImg />} />
      </Routes>
    </>
  )
}

export default App