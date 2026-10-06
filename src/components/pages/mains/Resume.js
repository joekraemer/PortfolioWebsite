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
                        <h2>DMC Inc &mdash; Systems Engineer II</h2>
                        <span className="content__meta">Jun 2020 &ndash; Feb 2022</span>
                    </div>
                    <ul>
                        <li>Managed and executed all phases of the project life-cycle: sales, customer relationship, requirements and specifications, architecture, hardware selection, programming, testing, onsite deployment, and post-project support.</li>
                        <li>Enhanced radio communication and client request handling with parallelization (mbed thread API) and a priority queue for critical data packets, lowering latency and raising throughput.</li>
                        <li>Led CI/CD pipeline development including static analysis, unit testing, and on-metal tests using mbed&rsquo;s Icetea framework to evaluate real-world radio performance and publish results to the commit as residuals.</li>
                        <li>Developed firmware for a PIC32 PID motor controller: state machine, drivers, and modules for pressure sensors, EEPROM (I2C), UART, and a PWM-controlled H-bridge.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>DMC Inc &mdash; Systems Engineer I</h2>
                        <span className="content__meta">Sep 2018 &ndash; Jun 2020</span>
                    </div>
                    <ul>
                        <li>Developed large-scale factory automation solutions across many industries using Siemens and Allen-Bradley PLCs and a variety of system platforms.</li>
                    </ul>
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
                        <li><strong>Data &amp; Visual Analytics</strong> &mdash; big-data collection and visualization with R, D3, Spark, Hadoop, OpenRefine; PageRank and Random Forest; Spark/Scala on AWS EMR, Databricks, Azure, GCP.</li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>University of Illinois at Urbana-Champaign</h2>
                        <span className="content__meta">May 2018</span>
                    </div>
                    <p className="content__subtitle">B.S. in Mechanical Engineering &mdash; Minor: Spanish Language</p>
                    <p className="content__meta">Urbana-Champaign, IL &middot; GPA 3.61</p>
                </div>

                <h2>Skills</h2>
                <div className="content__card">
                    <p><strong>Software:</strong> Python, PyTorch, Pandas, C, C#, C++, Docker, React, JavaScript, SQL, Ansible, Git, AWS, CI/CD, Spark, PLC, Protobufs, OpenThread</p>
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
