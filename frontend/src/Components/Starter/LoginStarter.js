import React, { useState } from 'react'
import { useNavigate } from "react-router";
import './Starter.css'
import RegisterModal from '../Register/RegisterModal'
import Register from '../Register/Register'
import Navbar from '../Navbar/Navbar'
import LoginModal from '../Login/LoginModal'
import Login from '../Login/Login'


export default function Starter() {
  const [isOpen, setIsOpen] = useState(true)
  

  return (
    <>
    {/* <div className='starter-bg-2'>  */}
    <div>
    
      <button className='logo-btn' onClick={() => setIsOpen(true)}>
          <img src={require('../../images/Whatever-4.png')} alt='main-logo'/>
      </button>

      <LoginModal open={isOpen} onClose={() => setIsOpen(false)} className='login-modal'>
        <Login />
      </LoginModal>
    </div>
    </>
    
  )
}
