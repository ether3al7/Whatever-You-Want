import React from "react"
import './Register.css'
import '../Starter/Starter.css'


export default function RegisterModal({ open, children, onClose }) {
  if(!open) return null

  return (
  
    <div className='modal-styles-2'>
       {children}
        <button className='logo-modal-btn-container' onClick={onClose}>
            <img className='logo-modal-btn' src={require('../../images/Whatever-4.png')} alt='main-modal-logo'/>
        </button>
    </div>
  )
}

