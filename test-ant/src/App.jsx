// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import 'antd/dist/reset.css';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="" element= {<Product/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
