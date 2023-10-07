import React from 'react'
import './ProjectSubpages.css'

export default function SAEMiniBaja() {
    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>SAE Mini-Baja</h1>
                <h3> We design, build and compete a brand new off road racing vehicle every year </h3>

                <div className='project__subpages__content'>
                    <p>SAE Mini-Baja is my favorite club.  It provides me with awesome opportunities to apply concepts that I learn from classes to the real world.  I love that I get hands on experience with designing and manufacturing.  During the beginning of my membership, I spent most of my time working in the shop.  I was trained on all the tools and was put to work manufacturing and assembling parts, as well as doing repairs and maintenance.  I loved this time because I learned so much.  Most of the time I was working along side an upperclassmen who would guide me and answer all the questions I had.  It was great to obtain some of the vast knowledge they have.  I learned all the different parts of the car and their function. They taught me tips and tricks for building and assembling.  They showed me the ins and outs of the SAE Mini-Baja rules and the different design decisions teams make.

                        Recently I have been involved much more in the design work.  In spring I was given the position of Chassis Sub-Team Lead.  This meant that I was in charge of designing the chassis as well as guiding the rest of the sub-team.  In order to accelerate our timeline, our team decided to push our design freeze from November to September.  This change would allow us to have two extra months for testing and validation before our competitions in the Spring.  So I spent my summer designing the new chassis.

                        Our previous chassis design used thicker tubes than the rules required as well as unnecessary tubes and supports.  Additionally, some of the chassis members did not include sufficient tolerance for manufacture error and actually caused us to fail the technical inspection.  My primary goal was to design a 100% rule compliant car.  Secondary objectives were to reduce weight and aerodynamic drag.  Once I was given the suspension points from our captain, I started my work.</p>

                    <p>I designed the chassis around the points and made sure that members would be able to support all of the suspension.  After I created a rough design, I started to iterate. I made a model of our largest and smallest driver to ensure they both fit. There are many rules that ensure the driver is safe and so I had to make quite a few changes so that both extremes would pass tech inspection.</p>

                    <p>This year we selected an ambitious drive train design, a completely custom manual transmission and gearbox.  Since this is a large undertaking, we wanted to make sure that we had a backup plan.  If our new drivetrain failed, we wanted to be able to use our previous drivetrain.  This made a unique design challenge for me as I had to make the rear of the chassis compatible with two different systems.</p>

                    <p>After ensuring that my design was within the rules as well as compatible with our components, I used PTC Simulate to validate my design.  I ran FEA analysis for various situations such as a front end impact, roll over, side impact, one wheel touch down, and rear impact. Through all of my simulation I verified that all of the chassis is well within a factor of safety of 3. FMEA was used to validate the results of the simulations. </p>

                    <p>Perhaps my most difficult challenge was mounting the shocks.  Our captain chose a vastly different mounting style where the shocks are mounted much closer to the wheel.  This means that the shock will travel from a 45 degree angle at rest to horizontal in full compression.  This is a much wider range than a traditional style, thus the mounts must be more reinforced.  The real bump in the road was that the shock point was not near any of the chassis members.  I couldn't change the design to accommodate the shocks without breaking one of the rules.  I mulled over this problem for most of the summer and ended up deciding that I would design an arching truss that would mount to the side impact member.  This would create more space in the foot box for the pedals and also cancel out some of the symmetric lateral forces when the shocks compress.</p>

                    <p>After some quick calculations, it was obvious that aluminum would be the best material of choice because of the large weight savings.  Since aluminum can’t be welded to a steel frame we would attach it with a series of tabs.  An added bonus is that we can test different designs and swap them out easily.  I went back and forth between Creo and Simulate optimizing the design. My original design was very lean and under built.  After running FEA, I quickly realized that it needed to be beefed up. We decided to aim for a factor of safety of 4 because we wanted the first design to be solid and reliable before we tried to optimize.</p>

                    <p>I used the results of my FEA analysis to target the weak spots.  I opted for a thicker aluminum plate on the bottom to deal with the massive compression forces when the suspension loads are at zero degrees.  In addition, I thickened the bottom of the side plates to help out with distributing the compressive forces.  With these changes, the truss became much stronger and now is built at a factor of safety of about 4.5.</p>

                    <p>After many hours of measuring, profiling and welding, the chassis was finally complete.  The chassis was completed over a month earlier that last year.  The paint for this year is a stealthy matte black.</p>

                </div>

            </div>
        </div>
    )
}