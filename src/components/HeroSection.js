import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={`${import.meta.env.BASE_URL}videos/video-2.mp4`} autoPlay loop muted/>
        <h1>Joe Kraemer</h1>
        <p>Software Engineer at Blue Origin &mdash; mechanical engineer turned
          software engineer, building flight-software test systems for the Lunar Lander.</p>
        <div className="hero-btns">
            <Link to='/projects' className='btn-mobile'>
              <button className='btn btn--outline btn--large'>View Projects</button>
            </Link>
            <Link to='/contact' className='btn-mobile'>
              <button className='btn btn--primary btn--large'>Get in Touch</button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection
