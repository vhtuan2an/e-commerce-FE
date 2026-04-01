// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { FaBeer } from 'react-icons/fa';
import Products from './components/products/Product.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/home/Home.jsx';


function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
    </div>
  )
}

export default App
