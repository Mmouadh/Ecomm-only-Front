import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import drop_down from '../Assest/nav_dropdown.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
 const [menu,setMenu] = useState('shop')
 const {getTotalCartItems} = useContext(ShopContext)
 const menuRef = useRef()

 const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
 }
 
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPY</p>

      </div>
      <img  className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=> {setMenu("shop")}} ><Link style={{textDecoration: 'none' }} to='/' >Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration: 'none' }} to='men'>Man</Link> {menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: 'none' }} to='womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: 'none' }} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
      </div>
    </div>
  )
}
