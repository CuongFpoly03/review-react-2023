import { useState } from 'preact/hooks'
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Product from './pages/product'
import Contact from './pages/contact';

export function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  )
}
