import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import './Navbar.css'
import '../Starter/Starter.css'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className='starter-bg-2'>
    <nav className='header-container'>
      {/* <div className='nav-btn-container'>
         <button className='logo-btn-nav' onClick={() => setIsOpen(true)} >
          <img src={require('../../images/Whatever-4.png')} alt='main-logo' className='nav-logo'/>
         </button>
      </div> */}

      <div nav-hamburger-container>
          <Hamburger onToggle={toggled => {
        if (toggled) {
         setNavbarOpen(prev => !prev)
        } else {
         // close a menu
         
        }
      }} direction='left' classname='hamburger-container'  />{navbarOpen ? "Close" : "Open"}
       <button className='nav-btn'>
                            <Link to='/home' className='nav-home'>Home</Link>
                            </button>
                            <button className='nav-btn'>
                            <Link to='/login'  className='nav-logout'>Login</Link>
                            </button> 
                            <button className='nav-btn'>
                            <Link to='/invite' className='nav-invite'>Make an invitation</Link>
                            </button> 
                            
        
          
      </div>
    </nav>
    </div>
  )
}