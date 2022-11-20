import React, { Component } from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
import AboutUs from './AboutUs/AboutUs'

// export default function Footer() {
  class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
  
  render(){
  return (
    <>
   
    <div className='footer-container'>
    
        <h6 className='footer-title'>Quick Links</h6>
        
        <div className='footer-quick-links'>
        
          <Nav.Link as={Link} to='/aboutus'><button className='quick-links-btn'>About Us</button></Nav.Link>
        
          <div className='copyright'>
          <i className='copyright'>&copy;Copyright 2022 All Rights Reserved by Whatever You Want</i>
      </div>
        </div>
        
    </div>
    
      
      </>
    
  )
}
}

export default Footer;
