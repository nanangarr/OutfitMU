import React from 'react'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Testmoni from './pages/Testmoni'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'
import Reset from './pages/Form/Reset'
import Order from './pages/Order'

const App = () => {
  return (
    <div className='overfolow-x-hidden'>
      <ToastContainer/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/testimoni" element={<Testmoni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App