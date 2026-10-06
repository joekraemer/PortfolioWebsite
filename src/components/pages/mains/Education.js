import React from 'react'
import '../../../App.css'
import './ContentPage.css'

export default function Education() {
    return (
        <div className="content__page">
            <div className="content__page__inner">
                <h1>Education</h1>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>Georgia Institute of Technology</h2>
                        <span className="content__meta">Sept 2021 &ndash; Aug 2023</span>
                    </div>
                    <p className="content__subtitle">
                        M.S. in Computer Science &mdash; Specialization: Machine Learning
                    </p>
                    <p className="content__meta">Atlanta, GA &middot; GPA 3.90</p>
                    <p>
                        Graduate coursework: Graduate Algorithms, Machine Learning,
                        Machine Learning for Trading, AI for Robotics, Knowledge-Based AI,
                        Deep Learning, Reinforcement Learning, and Data &amp; Visual Analytics.
                    </p>
                    <ul>
                        <li>
                            <strong>Deep Learning</strong> &mdash; final project identified
                            identical product listings across e-commerce sites using text and
                            image embeddings, then clustered by similarity. Trained on AWS
                            SageMaker with GPU instances.
                        </li>
                        <li>
                            <strong>Reinforcement Learning</strong> &mdash; built a Deep
                            Q-Learning agent for the Lunar Lander environment (Experience
                            Replay, Target Networks) and applied PPO and QMIX to multi-agent RL
                            in the Google Football environment, running hundreds of parallel
                            hyperparameter trials with Ray Tune.
                        </li>
                        <li>
                            <strong>Data &amp; Visual Analytics</strong> &mdash; big-data
                            collection and visualization with R, D3, Spark, Hadoop, and
                            OpenRefine; implemented PageRank and Random Forest; analyzed large
                            datasets with Spark/Scala on AWS EMR, Databricks, Azure, and GCP.
                        </li>
                    </ul>
                </div>

                <div className="content__card">
                    <div className="content__card__head">
                        <h2>University of Illinois at Urbana-Champaign</h2>
                        <span className="content__meta">May 2018</span>
                    </div>
                    <p className="content__subtitle">
                        B.S. in Mechanical Engineering &mdash; Minor: Spanish Language
                    </p>
                    <p className="content__meta">Urbana-Champaign, IL &middot; GPA 3.61</p>
                </div>
            </div>
        </div>
    )
}
