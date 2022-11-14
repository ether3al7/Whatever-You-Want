import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      
        <h6>Quick Links</h6>
        
       
        <button className='quick-links-btn' >
          <Link to='/aboutus'>About Us</Link>
        </button>
       
      
      </div>
  )
}
