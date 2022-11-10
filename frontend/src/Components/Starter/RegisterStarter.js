import React from 'react'
import './Starter.css'
import { Modal } from 'bootstrap'
import { useState } from 'react'
import RegisterModal from '../Register/RegisterModal'
import Register from '../Register/Register'
import Navbar from '../Navbar'
import LoginModal from '../Login/LoginModal'
import Login from '../Login/Login'

export default function Starter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className='starter-bg'> 
    <Navbar />
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
