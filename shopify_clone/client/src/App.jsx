import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductPage, Home, Checkout } from './pages'
import {Navbar, ProductCard} from './components'

const App = () => { 
  const [test, setTest] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/get')
    .then(response => {
      setTest(response.data)
      console.log(response.data)})
    .catch(error => console.log(error))
  }, [])


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/products/men" element={<ProductPage/>}></Route>
        <Route path="/products/women" element={<ProductPage/>}></Route>
        <Route path="/products/kids" element={<ProductPage/>}></Route>
        <Route path="/products/kids" element={<ProductPage/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/test" element={<ProductCard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;