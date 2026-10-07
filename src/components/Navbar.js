import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/Button.js';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(() => window.innerWidth > 960);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Close the mobile menu on every navigation, including the logo link and
  // the browser Back/Forward buttons (#62). Adjusting state during render
  // avoids a setState-in-effect re-render.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setClick(false);
  }

  useEffect(() => {
    const showButton = () => setButton(window.innerWidth > 960)
    window.addEventListener('resize', showButton)
    return () => window.removeEventListener('resize', showButton)
  }, [])

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
  )
}

export default Navbar
