import './ContentPage.css'

export default function Contact() {
    return (
        <div className="content__page">
            <div className="content__page__inner">
                <h1>Contact</h1>
                <p>
                    I&rsquo;m always happy to talk about software, hardware, and
                    everything in between. The best way to reach me is email.
                </p>

                <div className="content__card resume__card">
                    <div>
                        <span className="content__subtitle">Résumé</span>
                        <p className="content__meta">Grab a PDF copy of my full résumé.</p>
                    </div>
                    <a className="resume__btn"
                       href={`${import.meta.env.BASE_URL}JoeKraemer_Resume.pdf`}
                       download>
                        Download résumé (PDF)
                    </a>
                </div>

                <div className="content__card">
                    <ul className="contact__links">
                        <li>
                            <span className="contact__label">Email</span>
                            <a href="mailto:jkraemer9@gmail.com">jkraemer9@gmail.com</a>
                        </li>
                        <li>
                            <span className="contact__label">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/kraemerjoe"
                               target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kraemerjoe
                            </a>
                        </li>
                        <li>
                            <span className="contact__label">GitHub</span>
                            <a href="https://github.com/joekraemer"
                               target="_blank" rel="noopener noreferrer">
                                github.com/joekraemer
                            </a>
                        </li>
                        <li>
                            <span className="contact__label">Instagram</span>
                            <a href="https://www.instagram.com/jak_creative_"
                               target="_blank" rel="noopener noreferrer">
                                @jak_creative_
                            </a>
                        </li>
                        <li>
                            <span className="contact__label">Photography</span>
                            <a href="https://joekraemer.github.io/photo-website/"
                               target="_blank" rel="noopener noreferrer">
                                joekraemer.github.io/photo-website
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
