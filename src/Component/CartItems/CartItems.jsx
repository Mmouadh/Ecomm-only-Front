import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assest/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount, all_product: AllProduct, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {AllProduct.map((e)=>{
        if (cartItems[e.id]>0)
            {
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>{e.new_price}TND</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}  TND</p>
                    <img className='carticon-remove-icon' src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
              </div>
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div className="cartitems-total-items">
                <p>Sub-Total</p>
                <p>{getTotalCartAmount()}TND</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
                <h3>Total</h3>
                <h3>{getTotalCartAmount()}TND</h3>
            </div>
        
        <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here </p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
