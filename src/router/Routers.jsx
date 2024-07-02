import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Productdetail from '../pages/Productdetail'
import CheckOut from '../pages/CheckOut'

const Routers = () => {
  
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='home'/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/shop' element={<Shop/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/productDetail' element={<Productdetail/>}/>
        <Route  path='/checkout' element={<CheckOut/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routers
