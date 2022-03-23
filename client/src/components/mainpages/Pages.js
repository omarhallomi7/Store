import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import Products from './products/Products'
import DeatailProduct from './detailProduct/DeatailProduct'
import NotFound from './utils/not-found/NotFound'
function pages() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<DeatailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />}/>
      </Routes>

  )
}

export default pages
