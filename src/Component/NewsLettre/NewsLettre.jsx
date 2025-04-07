import React from 'react'
import './NewsLettre.css'

const NewsLettre = () => {
  return (
    <div className='newslettre'>
      <h1>Get Exclusive Offers</h1>
      <p>Subscribe to our newslettre and stay updated</p>
      <div>
        <input type="email" placeholder='Your Em@il'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLettre
