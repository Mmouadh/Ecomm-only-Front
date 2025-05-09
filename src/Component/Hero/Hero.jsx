import React from 'react'
import './Hero.css'
import hand_icon from '../Assest/hand_icon.png'
import arrow_icon from '../Assest/arrow.png'
import hero_icon from '../Assest/hero_image.png'



const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALLS !! </h2>
        <div>
            <div className='hero-hand-icon'>
                <p>New</p>
                <img src={hand_icon} alt="hand" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_icon} alt="" />

      </div>
    </div>
  )
}

export default Hero
