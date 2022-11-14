import React from 'react'
import './Starter.css'
import { Modal } from 'bootstrap'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import LoginModal from '../Login/LoginModal'
import Login from '../Login/Login'
import '../Navbar/AboutUs/AboutUs.css'


export default function Starter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className='starter-bg-2'> 
    
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
