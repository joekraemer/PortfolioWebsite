import './Footer.css'

// Site footer (#51): the same contact links as the Contact page, the photo
// site, and the résumé PDF. Shares the navbar's 1120px content box.
const LINKS = [
  { label: 'GitHub', href: 'https://github.com/joekraemer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kraemerjoe' },
  { label: 'Instagram', href: 'https://www.instagram.com/jak_creative_' },
  { label: 'Photography', href: 'https://joekraemer.github.io/photo-website/' },
  { label: 'Email', href: 'mailto:jkraemer9@gmail.com' },
]

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <p className='footer__copy'>© {year} Joe Kraemer</p>
        <ul className='footer__links'>
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} {...(href.startsWith('https') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={`${import.meta.env.BASE_URL}JoeKraemer_Resume.pdf`} download>Résumé PDF</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
