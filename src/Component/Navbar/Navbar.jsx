import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assest/logo.png';
import drop_down from '../Assest/nav_dropdown.png';
import cart_icon from '../Assest/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems, cartItems } = useContext(ShopContext); // Get cartItems as well
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleLogout = () => {
    const token = localStorage.getItem('auth-token');

    if (token) {
      // Send cart data to the server before logging out
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: Object.keys(cartItems), // Send the entire cart
          updateCart: true, // Custom flag to indicate we are updating the cart
          cartData: cartItems, // Send cart data to the backend
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Cart saved:', data);
          // Now we can clear localStorage and log out
          localStorage.removeItem('auth-token');
          localStorage.removeItem('guest-cart');
          window.location.replace('/Ecomm-only-Front');
        })
        .catch((error) => {
          console.error('Error during logout:', error);
        });
    } else {
      localStorage.removeItem('guest-cart');
      window.location.replace('/Ecomm-only-Front');
    }
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPY</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }} ><Link style={{ textDecoration: 'none' }} to='/' >Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='men'>Man</Link> {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to='/login'><button>Login</button></Link>}

        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};
