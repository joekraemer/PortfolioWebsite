import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from '../components/Button.js';
import './Navbar.css'
import Icon from './Icon';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  // The desktop Contact button is a plain Link, so mark it by hand (#51).
  const onContact = location.pathname.replace(/\/+$/, '').toLowerCase() === '/contact';

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
          <Icon name={click ? 'xmark' : 'bars'} />
        </button>
        <ul id='nav-menu' className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' end className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/resume' className='nav-links' onClick={closeMobileMenu}>
              Résumé
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hidden at 960px and below by Navbar.css; the menu has its own Contact link. */}
        <Button buttonStyle='btn--outline' to='/contact' current={onContact} className='navbar-cta'>Contact</Button>
      </div>
    </nav>
  )
}

export default Navbar
