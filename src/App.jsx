import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App