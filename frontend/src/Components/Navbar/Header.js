import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react';
import './Navbar.css';
import '../Starter/Starter.css';
import '../Register/Register.css';
import LoginModal from '../Login/LoginModal';
import Login from '../Login/Login';
import LoginStarter from '../Starter/LoginStarter';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Route, Switch, Redirect } from "react-router-dom";
import RegisterStarter from '../Starter/RegisterStarter';
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants';
import AboutUs from '../Navbar/AboutUs/AboutUs';
import Invite from '../Invite/Invite';
import InviteList from '../Invite/InviteList';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from '../Home/Home'
import { Button } from 'reactstrap';
// import { SearchBar } from '../ViewRestaurants/SearchBar';




export default function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showAnimated, setShowAnimated] = useState(false);

  return (
<>
<div className='starter-bg-2'>
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='header-container'>
                              <Container fluid >
                              <Link as={Link} to='/home' className="header-nav-links"><img src={require('../../images/Whatever-4.png')} alt='main-logo' className='nav-logo'/></Link>
                              </Container>
                              
                            </Navbar> 
                              
    
    <div>

      <div>
      <Nav.Link as={Link} to='/home'>
      <button className='logo-btn3' onClick={() => setIsOpen(true)}>
          <img src={require('../../images/Whatever-4.png')} alt='main-logo'/>
      </button>
      </Nav.Link>

      <LoginModal open={isOpen} onClose={() => setIsOpen(false)} className='login-modal'>
        <Login />
      </LoginModal>
    </div>

    
    </div>
    </div>
    </>
  )
}
