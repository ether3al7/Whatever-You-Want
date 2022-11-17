import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import './Navbar.css'
import '../Starter/Starter.css'
import '../Register/Register.css'
import LoginModal from '../Login/LoginModal'
import Login from '../Login/Login'
import { Button, Collapse, Container, Navbar, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showAnimated, setShowAnimated] = useState(false);

  return (
    <div className='starter-bg-2'>
    <div className='header-container'>
    {/* <HamburgerMenu /> */}
      {/* <div className='nav-btn-container'>
         <button className='logo-btn-nav' onClick={() => setIsOpen(true)} >
          <img src={require('../../images/Whatever-4.png')} alt='main-logo' className='nav-logo'/>
         </button>
      </div> */}
      <div>
      <button className='logo-btn3' onClick={() => setIsOpen(true)}>
          <img src={require('../../images/Whatever-4.png')} alt='main-logo'/>
      </button>

      <LoginModal open={isOpen} onClose={() => setIsOpen(false)} className='login-modal'>
        <Login />
      </LoginModal>
    </div>

      {/* <div nav-hamburger-container>
      <>
      

      <section className='mb-3'>
        <Navbar  dark bgColor='info' >
          <Container fluid>
            <NavbarToggler
              type='button'
              className='third-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon3 ${showAnimated && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </NavbarToggler>
          </Container>
        </Navbar>

        <Collapse show={showAnimated}>
          <div className='bg-light shadow-3 p-4'>
            <button block className='border-bottom m-0' color='link'>
              <Link to='/home' className='nav-home'>Home</Link>
            </button>
            <Button block className='border-bottom m-0' color='link'>
              <Link to='/login'  className='nav-logout'>Login</Link>
            </Button>
            <Button block className='border-bottom m-0' color='link'>
              <Link to='/invite' className='nav-invite'>Make an invitation</Link>
            </Button>
          </div>
        </Collapse>
      </section>
    </> */}
  {/* ); */}
{/* } */}

      
          {/* <Hamburger onToggle={toggled => {
        if (toggled) {
          
        } else {
         // close a menu
         
        }
      }} 
      direction='right' size={35} distance={'lg'} color={'#4fd1c5'} label="Show menu" id="wrapper" class="overlay" classclassname='hamburger-container'>
      
      
      {navbarOpen ? "Close" : "Open"}
      
      </Hamburger> */}

      {/* {navbarOpen ? "Close" : "Open"} */}
       {/* <button className='nav-btn' >
          <Link to='/home' className='nav-home'>Home</Link>
          </button>
          <button className='nav-btn'>
          <Link to='/login'  className='nav-logout'>Login</Link>
          </button> 
          <button className='nav-btn'>
          <Link to='/invite' className='nav-invite'>Make an invitation</Link>
          </button>  */}
                            
        
          
      {/* </div> */}
    </div>
    </div>
  )
}
