import React, { useEffect, useState } from 'react'
import '../../../App.css'
import './ContentPage.css'

const SECTIONS = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'leadership', label: 'Leadership & Organizations' },
    { id: 'skills', label: 'Skills' },
    { id: 'interests', label: 'Interests' },
]

// Offset below the sticky 80px navbar at which a heading counts as "current".
const ACTIVE_OFFSET = 120

function ResumeNav() {
    const [active, setActive] = useState(SECTIONS[0].id)

    useEffect(() => {
        const onScroll = () => {
            // At the bottom of the page the last sections can't reach the top,
            // so treat the final section as active there.
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
                setActive(SECTIONS[SECTIONS.length - 1].id)
                return
            }
            let current = SECTIONS[0].id
            for (const { id } of SECTIONS) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id
            }
            setActive(current)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    const jump = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav className="resume__nav" aria-label="Résumé sections">
            <ul>
                {SECTIONS.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={active === id ? 'resume__nav__link active' : 'resume__nav__link'}
                            aria-current={active === id ? 'true' : undefined}
                            onClick={(e) => jump(e, id)}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const SKILL_GROUPS = [
    { name: 'Programming', items: ['Rust', 'Python', 'C', 'C++', 'C#', 'JavaScript', 'SQL'] },
    { name: 'Embedded & Protocols', items: ["Cap'n Proto", 'Protobufs', 'STM32', 'OpenThread', 'PLC', 'Arduino'] },
    { name: 'Infrastructure & CI', items: ['Docker', 'CI/CD', 'Ansible', 'CMake', 'Git', 'AWS'] },
    { name: 'Data & ML', items: ['PyTorch', 'Pandas', 'Spark'] },
    { name: 'Mechanical & CAD', items: ['SolidWorks', 'PTC Creo', 'PTC Simulate', 'solidThinking Inspire', 'FEA', 'Topology optimization', 'CNC machining', 'Welding', 'MATLAB'] },
    { name: 'Languages', items: ['English (Native)', 'Spanish (B2)'] },
];

const INTERESTS = [
    { name: 'Photography', icon: 'fas fa-camera' },
    { name: 'Climbing', icon: 'fas fa-mountain' },
    { name: 'Sim Racing', icon: 'fas fa-flag-checkered' },
    { name: 'Hiking', icon: 'fas fa-hiking' },
    { name: 'Snowboarding', icon: 'fas fa-snowboarding' },
    { name: 'Board Games', icon: 'fas fa-dice' },
    { name: 'Running', icon: 'fas fa-running' },
    { name: 'Traveling', icon: 'fas fa-plane' },
];

export default function Resume() {
    const pdf = `${import.meta.env.BASE_URL}JoeKraemer_Resume.pdf`

    return (
        <div className="content__page">
            <div className="resume__layout">
            <ResumeNav />
            <div className="content__page__inner">
                <div className="resume__header">
                    <h1>Résumé</h1>
                    <a className="resume__btn" href={pdf} download>Download one-page PDF</a>
                </div>

                <h2 id="experience" className="resume__section">Work Experience</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>Amazon &mdash; Software Development Engineer</h3>
                        <span className="content__meta">May 2025 &ndash; Present</span>
                    </div>
                    <p className="content__meta">Project Kuiper / Amazon Leo, Ground Segment Software</p>
                    <ul>
                        <li>Built hardware-in-the-loop test infrastructure from the ground up (Rust, Docker, CI), including the organization&rsquo;s first automated on-hardware test gating at code-review time, and improved existing pipeline reliability (2x faster test setup, failure diagnostics capture).</li>
                        <li>Led a cross-team, green-field integration between a network control plane and an embedded encryption engine, owning the architecture, wire-protocol schema (Cap&rsquo;n Proto), and client implementation through to the first end-to-end validation on hardware.</li>
                        <li>Designed and implemented a liveness-detection protocol for a hardware-accelerated encryption appliance on high-throughput satellite ground links, eliminating a class of silent multi-minute outages on peer failure.</li>
                        <li>Authored technical designs adopted by the team, including a plugin-based power-on self-test framework for embedded hardware, and contributed shared developer tooling used across multiple engineering teams.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>Blue Origin &mdash; Software Engineer II</h3>
                        <span className="content__meta">Apr 2024 &ndash; May 2025</span>
                    </div>
                    <ul>
                        <li>Contributed to development and maintenance of the Lunar Lander HIL (Hardware-in-the-Loop) using agile methodologies, enabling early system-level testing that integrates flight-like hardware with actual flight software for comprehensive verification before flight release.</li>
                        <li>Developed software to emulate sensor behavior from physics simulations, letting flight software interact with real system components in real time.</li>
                        <li>Automated and standardized configuration deployment across multiple servers with Ansible, keeping the HIL environment consistent and stable across testing runs.</li>
                        <li>Collaborated with cross-functional teams to integrate hardware and software from diverse sources, troubleshooting complex system-interaction and hardware-specific issues.</li>
                        <li>Integrated the HIL into customer CI/CD pipelines for continuous testing and validation of flight software, enabling early issue identification.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>DMC Inc</h3>
                        <span className="content__meta">Sept 2018 &ndash; Feb 2022</span>
                    </div>
                    <div className="content__role">
                        <div className="content__card__head">
                            <h4>Systems Engineer II</h4>
                            <span className="content__meta">Jun 2020 &ndash; Feb 2022</span>
                        </div>
                        <ul>
                            <li>Managed and executed all phases of the project life-cycle: sales, customer relationship, requirements and specifications, architecture, hardware selection, programming, testing, onsite deployment, and post-project support.</li>
                            <li>Enhanced radio communication and client request handling with parallelization (mbed thread API) and a priority queue for critical data packets, lowering latency and raising throughput.</li>
                            <li>Led CI/CD pipeline development including static analysis, unit testing, and on-metal tests using mbed&rsquo;s Icetea framework to evaluate real-world radio performance and publish results to the commit as residuals.</li>
                            <li>Developed firmware for a PIC32 PID motor controller: state machine, drivers, and modules for pressure sensors, EEPROM (I2C), UART, and a PWM-controlled H-bridge.</li>
                            <li>Implemented a custom bootloader in C for an STM32 microcontroller, handling firmware validation and firmware updates.</li>
                            <li>Created a C UART communications API library with C++ and C# bindings.</li>
                            <li>Used CMake to orchestrate multiple build pipelines and define build targets.</li>
                            <li>Built a Python Flask application on an embedded Linux platform that recorded microphone data over SPI and accelerometer data over UART, paired with a phone over Bluetooth to join Wi-Fi, and served the data to a mobile app through a web server.</li>
                            <li>Created and maintained a C# .NET WPF application (MVVM) used to demonstrate and test new product features with the client.</li>
                        </ul>
                    </div>
                    <div className="content__role">
                        <div className="content__card__head">
                            <h4>Systems Engineer I</h4>
                            <span className="content__meta">Sept 2018 &ndash; Jun 2020</span>
                        </div>
                        <ul>
                            <li>Developed large-scale factory automation solutions across many industries using Siemens and Allen-Bradley PLCs and a variety of system platforms.</li>
                        </ul>
                    </div>
                </div>

                <h2 id="education" className="resume__section">Education</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>Georgia Institute of Technology</h3>
                        <span className="content__meta">Sept 2021 &ndash; Aug 2023</span>
                    </div>
                    <p className="content__subtitle">M.S. in Computer Science &mdash; Specialization: Machine Learning</p>
                    <p className="content__meta">Atlanta, GA &middot; GPA 3.90</p>
                    <ul>
                        <li><strong>Deep Learning</strong> &mdash; final project identified identical e-commerce product listings via text and image embeddings, clustered by similarity, trained on AWS SageMaker GPU instances.</li>
                        <li><strong>Reinforcement Learning</strong> &mdash; Deep Q-Learning agent for Lunar Lander (Experience Replay, Target Networks); PPO and QMIX for multi-agent RL in Google Football; hundreds of parallel hyperparameter trials with Ray Tune.</li>
                        <li><strong>Data &amp; Visual Analytics</strong> &mdash; big-data collection and visualization with R, D3, Spark, Hadoop, OpenRefine; PageRank and Random Forest; Spark/Scala on AWS EMR, Databricks, Azure, GCP. Final project: an R/Shiny app predicting NBA spreads and over/unders with linear regression (average error of about 1.5 and 10 points).</li>
                    </ul>
                    <p><strong>Additional coursework:</strong> Graduate Algorithms, Machine Learning, Machine Learning for Trading, AI for Robotics, Knowledge-Based AI</p>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>University of Illinois at Urbana-Champaign</h3>
                        <span className="content__meta">Aug 2013 &ndash; May 2018</span>
                    </div>
                    <p className="content__subtitle">B.S. in Mechanical Engineering &mdash; Minor: Spanish Language</p>
                    <p className="content__meta">Urbana-Champaign, IL &middot; GPA 3.61</p>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>Universidad de Deusto</h3>
                        <span className="content__meta">Aug 2015 &ndash; Dec 2015</span>
                    </div>
                    <p className="content__subtitle">Intensive Spanish Language and Culture Immersion Program</p>
                    <p className="content__meta">Bilbao, Spain</p>
                </div>

                <h2 id="leadership" className="resume__section">Leadership &amp; Organizations</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>SAE Mini Baja &mdash; Drivetrain Subsystem Lead</h3>
                        <span className="content__meta">Jan 2017 &ndash; May 2018</span>
                    </div>
                    <ul>
                        <li>Led a team of 10 members, each owning their own design project.</li>
                        <li>Designed a 2-stage reduction gearbox for the next year&rsquo;s car.</li>
                        <li>Created new team standards for 3D modeling and data-driven design.</li>
                        <li>Welded suspension members and drivetrain shafts.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>SAE Mini Baja &mdash; Chassis Subsystem Lead</h3>
                        <span className="content__meta">May 2016 &ndash; Jan 2017</span>
                    </div>
                    <ul>
                        <li>Designed the next-generation frame with a projected 10% weight saving.</li>
                        <li>Designed an aluminum front suspension mount using topology optimization, cutting its weight by 50%, and verified it with FEA using loads from strain-gauge testing.</li>
                        <li>Mentored subteam members through their projects and repaired broken A-arms, CV shafts, and brake calipers.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h3>Engineers Without Borders &mdash; Guatemala Water Project Lead</h3>
                        <span className="content__meta">Sept 2015 &ndash; 2018</span>
                    </div>
                    <ul>
                        <li>Led a team of 30 students designing a sustainable water supply system for a community of about 250 families.</li>
                        <li>Designed a concrete spring box that captures underground water to be pumped to a storage tank.</li>
                        <li>Traveled to Guatemala to land-survey and test the water for bacteria (3M Petrifilm) and metals (colorimeter).</li>
                    </ul>
                </div>

                <h2 id="skills" className="resume__section">Skills</h2>
                <div className="content__card">
                    {SKILL_GROUPS.map(group => (
                        <div className="skills__group" key={group.name}>
                            <h3 className="skills__heading">{group.name}</h3>
                            <ul className="skills__chips">
                                {group.items.map(item => (
                                    <li className="skills__chip" key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <h2 id="interests" className="resume__section">Interests</h2>
                <ul className="interests__tiles">
                    {INTERESTS.map(interest => (
                        <li className="interests__tile" key={interest.name}>
                            <i className={interest.icon} aria-hidden="true"></i>
                            <span>{interest.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}
