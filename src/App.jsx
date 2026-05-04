import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/Placeorder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/order' element = {<PlaceOrder/>} />
          <Route path='/verify' element = {<Verify/>}></Route>
          <Route path='/myorders' element = {<MyOrders/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
