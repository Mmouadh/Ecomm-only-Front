import React from 'react'
import './Footer.css'
import footer from '../Assest/logo_big.png'
import instagram from '../Assest/instagram_icon.png'
import pin from '../Assest/pintester_icon.png'
import whatsup from'../Assest/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer} alt="" />
        <p>SHOPPY</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icons">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
            <img src={whatsup} alt="" />
            </div>
            <div className="footer-icons-container">
            <img src={pin} alt="" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>
        © Copyright at 2025 - All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
