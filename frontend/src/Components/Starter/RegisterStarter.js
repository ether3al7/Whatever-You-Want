import React, { useState } from 'react'
import RegisterModal from '../Register/RegisterModal'
import Register from '../Register/Register'
import Navbar from '../Navbar/Navbar'
import LoginModal from '../Login/LoginModal'
import Login from '../Login/Login'
import './Starter.css'

export default function Starter() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
    {/* <div className='starter-bg'>  */}
    <div>
  
      <button className='logo-btn' onClick={() => setIsOpen(true)}>
          <img src={require('../../images/Whatever-4.png')} alt='main-logo'/>
      </button>

      <RegisterModal open={isOpen} onClose={() => setIsOpen(false)} className='register-modal'>
        <Register />
      </RegisterModal>
      
    </div>
    </>
    
  )
}
