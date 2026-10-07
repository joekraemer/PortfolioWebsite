import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={`${import.meta.env.BASE_URL}videos/video-2.mp4`} autoPlay loop muted/>
        <img className='hero-avatar' src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt='Joe Kraemer' />
        <h1>Joe Kraemer</h1>
        <p>Software Engineer at Blue Origin &mdash; mechanical engineer turned
          software engineer, building flight-software test systems for the Lunar Lander.</p>
        <div className="hero-btns">
            <Link to='/projects' className='btn btn-mobile btn--outline btn--large'>
              View Projects
            </Link>
            <Link to='/contact' className='btn btn-mobile btn--primary btn--large'>
              Get in Touch
            </Link>
        </div>
    </div>
  )
}

export default HeroSection
