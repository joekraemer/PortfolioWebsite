import React from 'react'
import './ProjectSubpages.css'
import PhotoGallery from '../../../PhotoGallery'

export default function Printer3D() {

    const title_photos = [
        { src: '../images/subpages/3dprinter/3dprinter_extruder.jpg', alt: '3D Printer Extruder' },
        { src: '../images/subpages/3dprinter/3dprinter_complete.jpg', alt: 'Completed 3D Printer' },
    ];

    const print_photos = [
        { src: '../images/subpages/3dprinter/3dprinter_filament_guide.jpg', alt: '3D printed filament guide' },
        { src: '../images/subpages/3dprinter/3dprinter_example_print_organizer.jpg', alt: '3D printed hardware organizer' },
        { src: '../images/subpages/3dprinter/3dprinter_example_print_PCB_housing.jpg', alt: '3D printed PCB housing' },
    ];


    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>3D Printer</h1>
                <h3 > I combined a variety of designs and models as well as my own ideas and modifications to create my very own 3D Printer. </h3>

                <div className='project__subpages__content'>

                    <PhotoGallery photos={title_photos} />

                    <p> In the Spring of 2016 I took Design for Manufacture and during this class I became very interested in additive manufacturing.  In my free time I began to research different methods and techniques.  One evening I stumbled upon a small community that designs and builds RepRap 3D Printers. RepRap stands for Self-Replicating Rapid Prototyping.  In other words,  all of the 3D printers they build, are able to print all of the necessary parts, to replicate itself.  This of course excludes electronics, motors and linear bearings which are not able to be 3D Printed (yet!). I was intrigued by the ingenuity of the idea, 3D Printers making 3D Printers and all, and soon I was heavily involved in the community. </p>

                    <p> Eventually, I decided that I would build one for myself.  From my research, I learned that there were kits available on eBay for around $250, but they have quality issues and are not very reliable.  So I thought it would be best to source the parts myself.  I would be able to buy higher quality parts where it mattered (linear bearings and rods) and go cheap where it didn't matter (basic hardware, and some electronics). Because it was my first build, I decided to use one of the most common platforms, the Prusa i3, with the most common control board, Arduino Mega with the RAMPS 1.4 shield.  This way, if I had problems, I would have more people to reach out to for help.  Through my research, I found ways to cut costs such as using a wood frame instead of a water jetted steel frame. </p>
                    <p> For almost the entire month of April, I spent most of my free time researching different part manufactures and different styles.  I mixed and matched design ideas from different open source platforms and models to create a design that was best for me. One for example, I decided on using an ATX Power Supply as it has many more safety features and fuses over the cheaper LED Power Supply.  At the same time, I began creating a 3D model of my printer.  This allowed me to ensure that the different parts that I was using would in fact fit once they all came together.  I actually caught a few issues that would have set me back quite a bit if I didn't catch them.  The worst being the mounting pattern on the carriage did not match the extruder.  Using Inventor I created a custom mounting plate to fix the issue. </p>
                    <p> During the month of May, I started ordering parts and supplies.  I also began 3D Printing the plastic parts.  I used the printers in our Mechanical Engineering Innovation Studio, but they were typically filled with students rushing to complete projects.  So I used the 3D printers in our local FabLab.  My brother even helped by printing the extruder with his high schools 3D printer.</p>
                    <p> My construction phase was delayed due to finals and so I didn't get started until June. I began with the frame.  Constructed of plywood, it was a fairly rigid structure, albeit slightly unstable front to back.  This would be mitigated once the y-axis was assembled, nevertheless an opportunity for improvement in the future. I carefully attached the z-axis components, measuring many times and being extra sure that everything was square.  Once this was completed, the rest of the printer came together relatively quickly. </p>
                    <p> With the printer mechanically assembled, I began configuring and tuning the electronics.  The printer is run off an open source software called Marlin created in the native Arduino IDE.  Marlin is an extremely flexible platform and so there is quite a few settings that need to be adjusted depending on your setup.  Some is simple like setting the print bed dimensions, while others takes many cycles of guessing and checking, like setting the acceleration and jerk settings.  One of my favorite features is the PID autotune for the bed and hotend temperature control.  I had never heard of a closed control loop, let alone a PID control loop.  This led me to spend an afternoon researching and learning about different types of control loops and their applications.</p>

                    <div className="photo__container">
                        <img className="photo__img" src='../images/subpages/3dprinter/3dprinter_arduino_code.jpg' alt='Arduino Code' />
                    </div>

                    <p> After everything was set up, I began my first print, a 20 mm test cube. Aside from a few bed adhesion issues, I was able to make a very good first print.  Next I played around and printed off many more test prints to optimize extrusion multipliers, temperature, acceleration values, and cooling fan speeds.  After fine tuning and optimization, I began to print a variety of things such as a filament holder, electronics case, upgrades on my printer, hardware organizers, backup parts for my printer (in case one breaks). </p>

                    <PhotoGallery photos={print_photos} />

                    <p> Originally, I was printing with PLA (Polylactic Acid) because it is the easiest to print with.  Later I began experimenting with different types of filament such as HIPS (High Impact Polystyrene), ABS (Acrylonitrile Butadiene Styrene) and PETG (Polyethylene Terephthalate).  These different filaments exhibit different properties such as strength, UV resistance, flexibility, and thermal resistance.</p>
                    <p> This project was a great expereience for me.  I learned so much about additive manufacturing as well as mechanical design. I can't wait to use this tool for other projects I have in mind.</p>

                </div>
            </div>
        </div>
    )
}