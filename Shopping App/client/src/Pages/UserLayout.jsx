import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'
function UserLayout() {
  return (
    <div>

      <Header/>
      <Navbar/>
      <Home/>

      <Footer/>
    </div>
  )
}

export default UserLayout