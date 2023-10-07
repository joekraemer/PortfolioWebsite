import React from 'react'
import './ProjectSubpages.css'

export default function EWB() {
    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>Engineers Without Borders</h1>
                <h3> Engineers Without Borders is an organization dedicated to the sustainable development of areas in need. </h3>

                <div className='project__subpages__content'>
                    <p>I have been a member of Engineers Without Borders (EWB) since my first semester of college.  I wanted to use my technical knowledge to help other people.  We have multiple projects in our chapter, but I decided to join the Guatemala Water Project.  The project was trying to help a small community in Guatemala build a water system to account for the shortage of water during the dry season

                        When I started, our project was still in the assessment phase.  This meant that we were still deciding on our best plan of action.  During this time, we ran high level design and analysis to compare costs, sustainability, and difficulty of various methods.  I was a part of a team that investigated using a pump to extract water from a 100 ft deep ravine.

                        Although the ravine is a huge design challenge, we ended up pursuing this plan because the water was incredibly clean.  This would mean that a filtration system is unnecessary.

                        Our team transitioned to the design phase and I took part in designing the vertical pipe structure that would carry the water out of the ravine.  We chose to use a metal piping because we were afraid that the cliff might erode, and so PVC would break and crack while metal could be only bent.  To support this system, we decided to use rebar brackets to anchor the pipe to the cliff face.  Rebar is cheap and easy to find in Guatemala, so the decision made a lot of sense in terms of serviceability and sustainability.

                        Another problem we faced was that the ground near the cliff was highly saturated with water and provides little support.  The best plan would be to pour a concrete foundation, be we wouldn’t know if this would be possible until we actually try it.  So we devised a backup plan, just in case using a concrete foundation wouldn’t work.

                        Since we couldn't support the piping from the bottom, we decided to support it from the top.  We will attach cables to different sections of the piping and then anchor these cables with a large ground anchor, similar to the ones used for telephone poles.
                    </p>
                </div>

            </div>
        </div>
    )
}