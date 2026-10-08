import { Link } from 'react-router-dom'
import './HeroSection.css'

// Home hero (#35, layout E): intro on the left, a decorative terminal panel on
// the right. The terminal is plain text, so screen readers read it as a
// short profile; the window dots are hidden from them.
function HeroSection() {
  return (
    <section className='hero'>
      <div className='hero__intro'>
        <div className='hero__id'>
          <img className='hero__avatar' src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt='Joe Kraemer' />
          <div>
            <p className='hero__path'>~/joe-kraemer</p>
            <h1>Joe Kraemer</h1>
          </div>
        </div>
        <p className='hero__lede'>
          Software engineer at Amazon Leo. Embedded and ground-segment systems,
          and hardware-in-the-loop test infrastructure.
        </p>
        <div className='hero__btns'>
          <Link to='/projects' className='btn btn--primary btn--large'>View Projects</Link>
          <Link to='/resume' className='btn btn--outline btn--large'>Résumé</Link>
        </div>
      </div>

      <div className='hero__term' role='group' aria-label='Profile summary'>
        <div className='hero__term__bar' aria-hidden='true'><i /><i /><i /></div>
        <pre>
<span className='t-p'>$</span> whoami --verbose{'\n'}
<span className='t-k'>role</span>      Software Development Engineer{'\n'}
<span className='t-k'>team</span>      Amazon Leo, ground segment{'\n'}
<span className='t-k'>focus</span>     HIL test infra, embedded, protocols{'\n'}
<span className='t-k'>stack</span>     Rust · C/C++ · Python · Docker · CI{'\n'}
<span className='t-k'>previous</span>  Blue Origin (Lunar Lander HIL), DMC{'\n'}
{'\n'}
<span className='t-p'>$</span> hil run --on-hardware{'\n'}
<span className='t-ok'>✓</span> power-on self-test      <span className='t-c'>12/12</span>{'\n'}
<span className='t-ok'>✓</span> link liveness           <span className='t-c'>pass</span>{'\n'}
<span className='t-ok'>✓</span> gated at code review    <span className='t-c'>ready</span>
        </pre>
      </div>
    </section>
  )
}

export default HeroSection
