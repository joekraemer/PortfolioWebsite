import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.js';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
    window.addEventListener('resize', showButton)
    return () => window.removeEventListener('resize', showButton)
  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            Joe Kraemer
          </Link>
          <button
            type='button'
            className='menu-icon'
            onClick={handleClick}
            aria-label='Toggle menu'
            aria-expanded={click}
            aria-controls='nav-menu'
          >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} aria-hidden='true' />
          </button>
          <ul id='nav-menu' className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                Résumé
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' to='/contact'>Contact</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar