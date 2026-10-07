import React from 'react'
import '../../../App.css'
import './ContentPage.css'

export default function Resume() {
    const pdf = `${import.meta.env.BASE_URL}JoeKraemer_Resume.pdf`

    return (
        <div className="content__page">
            <div className="content__page__inner">
                <div className="resume__header">
                    <h1>Résumé</h1>
                    <a className="resume__btn" href={pdf} download>Download one-page PDF</a>
                </div>

                <h2>Work Experience</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>Blue Origin &mdash; Software Engineer II</h2>
                        <span className="content__meta">Apr 2024 &ndash; Present</span>
                    </div>
                    <ul>
                        <li>Contributed to development and maintenance of the Lunar Lander HIL (Hardware-in-the-Loop) using agile methodologies, enabling early system-level testing that integrates flight-like hardware with actual flight software for comprehensive verification before flight release.</li>
                        <li>Developed software to emulate sensor behavior from physics simulations, letting flight software interact with real system components in real time.</li>
                        <li>Automated and standardized configuration deployment across multiple servers with Ansible, keeping the VTB environment consistent and stable across testing runs.</li>
                        <li>Collaborated with cross-functional teams to integrate hardware and software from diverse sources, troubleshooting complex system-interaction and hardware-specific issues.</li>
                        <li>Integrated the VTB into customer CI/CD pipelines for continuous testing and validation of flight software, enabling early issue identification.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>DMC Inc</h2>
                        <span className="content__meta">Sept 2018 &ndash; Feb 2022</span>
                    </div>
                    <div className="content__role">
                        <div className="content__card__head">
                            <h3>Systems Engineer II</h3>
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
                            <h3>Systems Engineer I</h3>
                            <span className="content__meta">Sept 2018 &ndash; Jun 2020</span>
                        </div>
                        <ul>
                            <li>Developed large-scale factory automation solutions across many industries using Siemens and Allen-Bradley PLCs and a variety of system platforms.</li>
                        </ul>
                    </div>
                </div>

                <h2>Education</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>Georgia Institute of Technology</h2>
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
                        <h2>University of Illinois at Urbana-Champaign</h2>
                        <span className="content__meta">Aug 2013 &ndash; May 2018</span>
                    </div>
                    <p className="content__subtitle">B.S. in Mechanical Engineering &mdash; Minor: Spanish Language</p>
                    <p className="content__meta">Urbana-Champaign, IL &middot; GPA 3.61</p>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>Universidad de Deusto</h2>
                        <span className="content__meta">Aug 2015 &ndash; Dec 2015</span>
                    </div>
                    <p className="content__subtitle">Intensive Spanish Language and Culture Immersion Program</p>
                    <p className="content__meta">Bilbao, Spain</p>
                </div>

                <h2>Leadership &amp; Organizations</h2>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>SAE Mini Baja &mdash; Drivetrain Subsystem Lead</h2>
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
                        <h2>SAE Mini Baja &mdash; Chassis Subsystem Lead</h2>
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
                        <h2>Engineers Without Borders &mdash; Guatemala Water Project Lead</h2>
                        <span className="content__meta">Sept 2015 &ndash; 2018</span>
                    </div>
                    <ul>
                        <li>Led a team of 30 students designing a sustainable water supply system for a community of about 250 families.</li>
                        <li>Designed a concrete spring box that captures underground water to be pumped to a storage tank.</li>
                        <li>Traveled to Guatemala to land-survey and test the water for bacteria (3M Petrifilm) and metals (colorimeter).</li>
                    </ul>
                </div>

                <h2>Skills</h2>
                <div className="content__card">
                    <p><strong>Software:</strong> Python, PyTorch, Pandas, C, C#, C++, Docker, React, JavaScript, HTML, CSS, SQL, Ansible, Git, AWS, CI/CD, Spark, CMake, PLC, Protobufs, OpenThread</p>
                    <p><strong>Mechanical &amp; CAD:</strong> SolidWorks, PTC Creo, PTC Simulate, solidThinking Inspire, FEA, topology optimization, CNC machining, welding, MATLAB, Arduino</p>
                    <p><strong>Languages:</strong> English (Native), Spanish (B2)</p>
                </div>

                <h2>Interests</h2>
                <div className="content__card">
                    <p>Photography, Climbing, Sim Racing, Hiking, Snowboarding, Board Games, Running, Traveling</p>
                </div>
            </div>
        </div>
    )
}
