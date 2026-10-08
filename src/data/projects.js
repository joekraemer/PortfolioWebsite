// Every project on the site: its page content and its card. App.js routes
// /projects/:slug to ProjectPage, the Home and Projects grids read the cards,
// and src/routes.js builds the titles, link previews and sitemap from it.
//
// Plain data only (no JSX) so the build script can import it with Node.
//
// body blocks:
//   { type: 'p', text }              paragraph
//   { type: 'heading', text }        h2 subheading
//   { type: 'gallery', photos }      PhotoGallery; photos = [{ src, alt }]
//   { type: 'photo', src, alt }      one full-width image
//   { type: 'youtube', id, title }   YouTubeEmbed
// Image paths are relative to public/.

export const projects = [
    {
        slug: 'printer3d',
        title: '3D Printer',
        subtitle: 'I combined a variety of designs and models as well as my own ideas and modifications to create my very own 3D Printer.',
        card: { title: 'Custom 3D Printer', label: 'Hardware', image: 'images/subpages/3dprinter/3dprinter_complete.jpg', homeTitle: 'Custom RepRap 3D Printer built from sourced parts' },
        body: [
            { type: 'gallery', photos: [
                { src: 'images/subpages/3dprinter/3dprinter_extruder.jpg', alt: '3D Printer Extruder' },
                { src: 'images/subpages/3dprinter/3dprinter_complete.jpg', alt: 'Completed 3D Printer' },
            ] },
            { type: 'p', text: 'In the Spring of 2016 I took Design for Manufacture and during this class I became very interested in additive manufacturing. In my free time I began to research different methods and techniques. One evening I stumbled upon a small community that designs and builds RepRap 3D Printers. RepRap stands for Self-Replicating Rapid Prototyping. In other words, all of the 3D printers they build, are able to print all of the necessary parts, to replicate itself. This of course excludes electronics, motors and linear bearings which are not able to be 3D Printed (yet!). I was intrigued by the ingenuity of the idea, 3D Printers making 3D Printers and all, and soon I was heavily involved in the community.' },
            { type: 'p', text: 'Eventually, I decided that I would build one for myself. From my research, I learned that there were kits available on eBay for around $250, but they have quality issues and are not very reliable. So I thought it would be best to source the parts myself. I would be able to buy higher quality parts where it mattered (linear bearings and rods) and go cheap where it didn\'t matter (basic hardware, and some electronics). Because it was my first build, I decided to use one of the most common platforms, the Prusa i3, with the most common control board, Arduino Mega with the RAMPS 1.4 shield. This way, if I had problems, I would have more people to reach out to for help. Through my research, I found ways to cut costs such as using a wood frame instead of a water jetted steel frame.' },
            { type: 'p', text: 'For almost the entire month of April, I spent most of my free time researching different part manufacturers and different styles. I mixed and matched design ideas from different open source platforms and models to create a design that was best for me. One for example, I decided on using an ATX Power Supply as it has many more safety features and fuses over the cheaper LED Power Supply. At the same time, I began creating a 3D model of my printer. This allowed me to ensure that the different parts that I was using would in fact fit once they all came together. I actually caught a few issues that would have set me back quite a bit if I didn\'t catch them. The worst being the mounting pattern on the carriage did not match the extruder. Using Inventor I created a custom mounting plate to fix the issue.' },
            { type: 'p', text: 'During the month of May, I started ordering parts and supplies. I also began 3D Printing the plastic parts. I used the printers in our Mechanical Engineering Innovation Studio, but they were typically filled with students rushing to complete projects. So I used the 3D printers in our local FabLab. My brother even helped by printing the extruder with his high schools 3D printer.' },
            { type: 'p', text: 'My construction phase was delayed due to finals and so I didn\'t get started until June. I began with the frame. Constructed of plywood, it was a fairly rigid structure, albeit slightly unstable front to back. This would be mitigated once the y-axis was assembled, nevertheless an opportunity for improvement in the future. I carefully attached the z-axis components, measuring many times and being extra sure that everything was square. Once this was completed, the rest of the printer came together relatively quickly.' },
            { type: 'p', text: 'With the printer mechanically assembled, I began configuring and tuning the electronics. The printer is run off an open source software called Marlin created in the native Arduino IDE. Marlin is an extremely flexible platform and so there is quite a few settings that need to be adjusted depending on your setup. Some is simple like setting the print bed dimensions, while others takes many cycles of guessing and checking, like setting the acceleration and jerk settings. One of my favorite features is the PID autotune for the bed and hotend temperature control. I had never heard of a closed control loop, let alone a PID control loop. This led me to spend an afternoon researching and learning about different types of control loops and their applications.' },
            { type: 'photo', src: 'images/subpages/3dprinter/3dprinter_arduino_code.jpg', alt: 'Arduino Code' },
            { type: 'p', text: 'After everything was set up, I began my first print, a 20 mm test cube. Aside from a few bed adhesion issues, I was able to make a very good first print. Next I played around and printed off many more test prints to optimize extrusion multipliers, temperature, acceleration values, and cooling fan speeds. After fine tuning and optimization, I began to print a variety of things such as a filament holder, electronics case, upgrades on my printer, hardware organizers, backup parts for my printer (in case one breaks).' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/3dprinter/3dprinter_filament_guide.jpg', alt: '3D printed filament guide' },
                { src: 'images/subpages/3dprinter/3dprinter_example_print_organizer.jpg', alt: '3D printed hardware organizer' },
                { src: 'images/subpages/3dprinter/3dprinter_example_print_PCB_housing.jpg', alt: '3D printed PCB housing' },
            ] },
            { type: 'p', text: 'Originally, I was printing with PLA (Polylactic Acid) because it is the easiest to print with. Later I began experimenting with different types of filament such as HIPS (High Impact Polystyrene), ABS (Acrylonitrile Butadiene Styrene) and PETG (Polyethylene Terephthalate). These different filaments exhibit different properties such as strength, UV resistance, flexibility, and thermal resistance.' },
            { type: 'p', text: 'This project was a great experience for me. I learned so much about additive manufacturing as well as mechanical design. I can\'t wait to use this tool for other projects I have in mind.' },
        ],
    },
    {
        slug: 'cryptocurrencytracker',
        title: 'Cryptocurrency Tracker',
        subtitle: 'I wrote a python script to track cryptocurrency prices as well as the profitability of my personal mining rig.',
        card: { title: 'Cryptocurrency Tracker', label: 'Software', image: 'images/subpages/crypto/cryptocurrency_mining_rig.jpg', homeTitle: 'Cryptocurrency price tracker' },
        body: [
            { type: 'p', text: 'During the Spring of 2017, I became fascinated with cryptocurrencies and blockchain technologies. I was amazed at the novelty of the decentralized authority and the public ledger. The more I learned about the technology, the more I wanted to get involved.' },
            { type: 'p', text: 'Towards the end of May, I decided that I was going to build a GPU mining rig to mine ether on the Ethereum network. It seemed like a relatively safe investment because I could always resell or reuse the hardware once mining became unprofitable.' },
            { type: 'p', text: 'I spent about two weeks scouring craigslist, eBay, and internet forums searching for the cheap and relatively power efficient RX400 series GPUs. I acquired 3 GPUs, a multi PCIe slot motherboard, a processor, a beefy 1000 watt power supply and some cheap RAM for $650.' },
            { type: 'p', text: 'When my dad found out how much money I had spent investing in a volatile market, he was very skeptical and wanted to see if it would end up being profitable overall.' },
            { type: 'p', text: 'Initially I created an excel workbook and I was logging the current prices and my ether production manually. This was a tedious task that I really wished I didn\'t have to do. I started thinking to myself and I realized that this would be a perfect opportunity to use my newly acquired Python knowledge.' },
            { type: 'p', text: 'I learned Python for a statistics and probability course that I took, and I really wanted to do something more with it. I spent a lot of time learning about JSON and REST APIs. I was fascinated that there were so many websites that allowed you to interact with them on such a simple level. I quickly found websites that had APIs that I could access to track prices as well as the production of my mining rig.' },
            { type: 'p', text: 'The final script accesses 4 different websites to obtain bitcoin and Ethereum prices, how much bitcoin, Ethereum and USD I have, as well as my projected profitability. Then this data is saved into a csv file every hour.' },
            { type: 'p', text: 'At the end of the summer I opened the csv in Excel and created a variety of graphs to show the results of my investment. You can see the results below.' },
            { type: 'p', text: 'My dad was happy to see that my investment was a success and I am excited to see how much more the cryptocurrency community will grow.' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/crypto/cryptocurrency_mining_rig.jpg', alt: 'GPU mining rig' },
                { src: 'images/subpages/crypto/cryptocurrency_revenue.jpg', alt: 'Revenue chart' },
                { src: 'images/subpages/crypto/cryptocurrency_monthly_profitability.jpg', alt: 'Monthly profitability chart' },
                { src: 'images/subpages/crypto/cryptocurrency_equity_location.jpg', alt: 'Equity location chart' },
            ] },
        ],
    },
    {
        slug: 'ewb',
        title: 'Engineers Without Borders',
        subtitle: 'Engineers Without Borders is an organization dedicated to the sustainable development of areas in need.',
        card: { title: 'Engineers Without Borders', label: 'Engineering', image: 'images/subpages/ewb/ewb_testing.jpg', homeTitle: 'Engineers Without Borders field work' },
        body: [
            { type: 'gallery', photos: [
                { src: 'images/subpages/ewb/ewb_testing.jpg', alt: 'Water testing in the field' },
                { src: 'images/subpages/ewb/ewb_water_samples.jpg', alt: 'Collected water samples' },
                { src: 'images/subpages/ewb/ewb_test_tubes.jpg', alt: 'Water test tubes' },
            ] },
            { type: 'p', text: 'I have been a member of Engineers Without Borders (EWB) since my first semester of college. I wanted to use my technical knowledge to help other people. We have multiple projects in our chapter, but I decided to join the Guatemala Water Project. The project was trying to help a small community in Guatemala build a water system to account for the shortage of water during the dry season.' },
            { type: 'p', text: 'When I started, our project was still in the assessment phase. This meant that we were still deciding on our best plan of action. During this time, we ran high level design and analysis to compare costs, sustainability, and difficulty of various methods. I was a part of a team that investigated using a pump to extract water from a 100 ft deep ravine.' },
            { type: 'p', text: 'Although the ravine is a huge design challenge, we ended up pursuing this plan because the water was incredibly clean. This would mean that a filtration system is unnecessary.' },
            { type: 'p', text: 'Our team transitioned to the design phase and I took part in designing the vertical pipe structure that would carry the water out of the ravine. We chose to use a metal piping because we were afraid that the cliff might erode, and so PVC would break and crack while metal could be only bent. To support this system, we decided to use rebar brackets to anchor the pipe to the cliff face. Rebar is cheap and easy to find in Guatemala, so the decision made a lot of sense in terms of serviceability and sustainability.' },
            { type: 'p', text: 'Another problem we faced was that the ground near the cliff was highly saturated with water and provides little support. The best plan would be to pour a concrete foundation, but we wouldn’t know if this would be possible until we actually try it. So we devised a backup plan, just in case using a concrete foundation wouldn’t work.' },
            { type: 'p', text: 'Since we couldn\'t support the piping from the bottom, we decided to support it from the top. We will attach cables to different sections of the piping and then anchor these cables with a large ground anchor, similar to the ones used for telephone poles.' },
        ],
    },
    {
        slug: 'onesecondvideos',
        title: 'One Second Videos',
        subtitle: 'After filming my life for 365 days, I created a video scrapbook of my Freshman year of college using shot one second videos.',
        card: { title: 'One Second Videos', label: 'Software', image: 'images/img-3.jpg' },
        body: [
            { type: 'p', text: 'The first few days of college are a whirlwind of activities with meeting people and exploring new places and trying new things. On my third day of college, I was talking with my new (and now good friend) Jack. He showed me this YouTube video he had created just a year ago. He was inspired by a man named Cesar Kuriyama who came up with the original idea. It was a series of 1 second videos all mashed up together. Each video was taken on everyday of the previous year. Each shot was a glimpse into his Senior year of high school. His video was around 8 minutes long, but it took well over an hour to get through it. We would pause the video and talk about a particular moment or for him to elaborate on a story. This was a great time for us to swap stories and have a great conversation. I loved how I felt like I just experienced the year as Jack, through ups and downs, from vacations to school, from summer to winter. I loved the idea and I started filming the very next day.' },
            { type: 'p', text: 'I knew that I was going to be showing this video to people and so at first I tried to only film cool things that were happening around me. I would get slightly upset if I didn\'t film something interesting. I wanted to have stories and interesting topics so I could have conversations like I did with Jack. I filmed interesting clubs I tried out, sporting events I went to, cool chemistry experiments. After a month or so, I began to realize that my content wasn\'t a reflection of my life. Instead it was a superficial highlight reel. I wanted this to be a reflection of me, not just the cool and interesting, but the whole story. It was okay to take videos of the "mundane" because its what was really happening. From then on, I tried to be more frank with my content and not only post the interesting parts of my day, but also the boring parts, such as studying or driving home.' },
            { type: 'p', text: 'At Christmas, the whole family gathered around the old projector and watched Super8 film from when my Dad and Aunts were kids. It was so interesting to me to see daily life. Not just the vacations to Niagara falls, but to see the big vintage station wagon, the flamboyant 70s decor, and my family being goofy. I recognized that my video could be also a sort of time capsule, something that I will watch with my kids in 30 years and have to explain what a cell phone or how a human driven car worked.' },
            { type: 'p', text: 'I know that you will not fully understand even 50% of the content if you are watching it without me. All of the clips have stories behind them. Some of the clips have an obvious subject and message like the chants at a football game, or my dad spinning on a chair with a leaf blower. Some are much less obvious. Some hold meaning only to me. Nevertheless, the video is still entertaining and a great learning experience for me. Thanks for reading about my inspiration, motivation and thoughts on the project and I invite you to take a walk through my Freshman year at college.' },
            { type: 'heading', text: '2014-2015' },
            { type: 'youtube', id: 'OCLLx4cTzEQ', title: 'One Second Videos, 2014-2015' },
            { type: 'heading', text: '2020' },
            { type: 'youtube', id: 'fRnjsvNsnPk', title: 'One Second Videos, 2020' },
            { type: 'heading', text: '2021' },
            { type: 'youtube', id: 'F4iHMyG26ug', title: 'One Second Videos, 2021' },
        ],
    },
    {
        slug: 'playingcardshelf',
        title: 'Playing Card Shelf',
        subtitle: 'I created a custom floating shelf for displaying boutique playing cards.',
        card: { title: 'Playing Card Shelf', label: 'Maker', image: 'images/subpages/cardshelf/card_shelf_complete.jpg', homeTitle: 'Laser-cut playing card display shelf' },
        body: [
            { type: 'gallery', photos: [
                { src: 'images/subpages/cardshelf/card_shelf_complete.jpg', alt: 'Completed card shelf with cards' },
                { src: 'images/subpages/cardshelf/card_shelf_complete_alternate_angle.jpg', alt: 'Completed card shelf, alternate angle' },
            ] },
            { type: 'p', text: 'My youngest brother is really into magic and cardistry and so naturally he has a bunch of playing cards. So for Christmas (yes I know it took me a while to post) me and my other brother wanted to make something to display his favorite cards.' },
            { type: 'p', text: 'We got 6 ft of a 1" x 5" and 1" x 2" oak boards. We went with oak because we liked the continuous grains. We then chopped those into thirds to make 2 ft sections.' },
            { type: 'p', text: 'In order for the cards to sit securely on the shelf we used a router cut out a small 1/2" groove, about 1/8" deep. This gives the decks something to rest on. Sorry for the blurry picture.' },
            { type: 'p', text: 'Next we applied two coats of a rather dark stain to bring out the details of the wood. Also the darker finish matches the room much better.' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/cardshelf/card_shelf_pieces.jpg', alt: 'Cut oak board pieces' },
                { src: 'images/subpages/cardshelf/card_shelf_router.jpg', alt: 'Routing the card groove' },
                { src: 'images/subpages/cardshelf/card_shelf_groove.jpg', alt: 'Routed groove detail' },
                { src: 'images/subpages/cardshelf/card_shelf_stain.jpg', alt: 'Staining the wood' },
                { src: 'images/subpages/cardshelf/card_shelf_clear_coat.jpg', alt: 'Applying clear coat' },
            ] },
            { type: 'p', text: 'Then we mounted the small board to the larger piece with screws. Make sure to pre-drill when using hard wood because they splinter very easily. Also countersink for a clean finished product.' },
            { type: 'p', text: 'To make sure the stain wouldn\'t rub off on the cards, we applied a couple coats of clear sealer.' },
            { type: 'p', text: 'Next was mounting the shelf on the wall! We used picture hanging brackets and nails to mount the shelf. The shelf isn\'t very heavy and isn\'t at risk of pulling out of the drywall so we didn\'t think drywall anchors were necessary.' },
            { type: 'p', text: 'Here is all three shelves mounted. Don\'t worry, they are evenly spaced, it just looks off because of the shadows.' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/cardshelf/card_shelf_pads.jpg', alt: 'Mounting pads' },
                { src: 'images/subpages/cardshelf/card_shelf_mounting.jpg', alt: 'Mounting hardware' },
                { src: 'images/subpages/cardshelf/card_shelf_wall_mounting.jpg', alt: 'Mounting the shelf to the wall' },
                { src: 'images/subpages/cardshelf/card_shelf_complete_no_cards.jpg', alt: 'All three shelves mounted' },
            ] },
            { type: 'p', text: 'This project ended much better than I expected. I think the stained look really matches the wall and brings out the colors of the decks. If I was going to do it again, I think it would be fun to add LED lighting to the back or underside of the shelf.' },
        ],
    },
    {
        slug: 'saeminibaja',
        title: 'SAE Mini-Baja',
        subtitle: 'We design, build and compete a brand new off road racing vehicle every year',
        card: { title: 'SAE Mini Baja', label: 'Mechanical', image: 'images/subpages/baja/baja_jr_whole_car_parking.jpg', homeTitle: 'SAE Mini Baja off-road vehicle' },
        body: [
            { type: 'gallery', photos: [
                { src: 'images/subpages/baja/baja_jr_whole_car_parking.jpg', alt: 'Completed Baja car' },
                { src: 'images/subpages/baja/baja_jr_whole_car_dirt.jpg', alt: 'Baja car on the dirt course' },
            ] },
            { type: 'p', text: 'SAE Mini-Baja is my favorite club. It provides me with awesome opportunities to apply concepts that I learn from classes to the real world. I love that I get hands on experience with designing and manufacturing. During the beginning of my membership, I spent most of my time working in the shop. I was trained on all the tools and was put to work manufacturing and assembling parts, as well as doing repairs and maintenance. I loved this time because I learned so much. Most of the time I was working alongside an upperclassmen who would guide me and answer all the questions I had. It was great to obtain some of the vast knowledge they have. I learned all the different parts of the car and their function. They taught me tips and tricks for building and assembling. They showed me the ins and outs of the SAE Mini-Baja rules and the different design decisions teams make.' },
            { type: 'p', text: 'Recently I have been involved much more in the design work. In spring I was given the position of Chassis Sub-Team Lead. This meant that I was in charge of designing the chassis as well as guiding the rest of the sub-team. In order to accelerate our timeline, our team decided to push our design freeze from November to September. This change would allow us to have two extra months for testing and validation before our competitions in the Spring. So I spent my summer designing the new chassis.' },
            { type: 'p', text: 'Our previous chassis design used thicker tubes than the rules required as well as unnecessary tubes and supports. Additionally, some of the chassis members did not include sufficient tolerance for manufacture error and actually caused us to fail the technical inspection. My primary goal was to design a 100% rule compliant car. Secondary objectives were to reduce weight and aerodynamic drag. Once I was given the suspension points from our captain, I started my work.' },
            { type: 'p', text: 'I designed the chassis around the points and made sure that members would be able to support all of the suspension. After I created a rough design, I started to iterate. I made a model of our largest and smallest driver to ensure they both fit. There are many rules that ensure the driver is safe and so I had to make quite a few changes so that both extremes would pass tech inspection.' },
            { type: 'p', text: 'This year we selected an ambitious drive train design, a completely custom manual transmission and gearbox. Since this is a large undertaking, we wanted to make sure that we had a backup plan. If our new drivetrain failed, we wanted to be able to use our previous drivetrain. This made a unique design challenge for me as I had to make the rear of the chassis compatible with two different systems.' },
            { type: 'p', text: 'After ensuring that my design was within the rules as well as compatible with our components, I used PTC Simulate to validate my design. I ran FEA analysis for various situations such as a front end impact, roll over, side impact, one wheel touch down, and rear impact. Through all of my simulation I verified that all of the chassis is well within a factor of safety of 3. FMEA was used to validate the results of the simulations.' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/baja/baja_jr_truss_cad.jpg', alt: 'Truss CAD design' },
                { src: 'images/subpages/baja/baja_jr_truss_cad_final.jpg', alt: 'Final truss CAD design' },
                { src: 'images/subpages/baja/baja_jr_truss_fea_initial.jpg', alt: 'Initial truss FEA analysis' },
                { src: 'images/subpages/baja/baja_jr_truss_fea_final.jpg', alt: 'Final truss FEA analysis' },
            ] },
            { type: 'p', text: 'Perhaps my most difficult challenge was mounting the shocks. Our captain chose a vastly different mounting style where the shocks are mounted much closer to the wheel. This means that the shock will travel from a 45 degree angle at rest to horizontal in full compression. This is a much wider range than a traditional style, thus the mounts must be more reinforced. The real bump in the road was that the shock point was not near any of the chassis members. I couldn\'t change the design to accommodate the shocks without breaking one of the rules. I mulled over this problem for most of the summer and ended up deciding that I would design an arching truss that would mount to the side impact member. This would create more space in the foot box for the pedals and also cancel out some of the symmetric lateral forces when the shocks compress.' },
            { type: 'p', text: 'After some quick calculations, it was obvious that aluminum would be the best material of choice because of the large weight savings. Since aluminum can’t be welded to a steel frame we would attach it with a series of tabs. An added bonus is that we can test different designs and swap them out easily. I went back and forth between Creo and Simulate optimizing the design. My original design was very lean and under built. After running FEA, I quickly realized that it needed to be beefed up. We decided to aim for a factor of safety of 4 because we wanted the first design to be solid and reliable before we tried to optimize.' },
            { type: 'p', text: 'I used the results of my FEA analysis to target the weak spots. I opted for a thicker aluminum plate on the bottom to deal with the massive compression forces when the suspension loads are at zero degrees. In addition, I thickened the bottom of the side plates to help out with distributing the compressive forces. With these changes, the truss became much stronger and now is built at a factor of safety of about 4.5.' },
            { type: 'gallery', photos: [
                { src: 'images/subpages/baja/baja_jr_frame.jpg', alt: 'Baja chassis frame' },
                { src: 'images/subpages/baja/baja_jr_frame_side.jpg', alt: 'Chassis frame side view' },
                { src: 'images/subpages/baja/baja_jr_frame_fae.jpg', alt: 'Chassis frame FEA' },
                { src: 'images/subpages/baja/baja_jr_frame_engine.jpg', alt: 'Chassis frame with engine' },
                { src: 'images/subpages/baja/baja_jr_frame_painted.jpg', alt: 'Painted chassis frame' },
            ] },
            { type: 'p', text: 'After many hours of measuring, profiling and welding, the chassis was finally complete. The chassis was completed over a month earlier than last year. The paint for this year is a stealthy matte black.' },
        ],
    },
    {
        slug: 'ulockbikemount',
        title: 'U-Lock Bike Mount',
        subtitle: 'I designed and manufactured my very own custom lock mount.',
        card: { title: 'Custom U-Lock Bike Mount', label: 'Mechanical', image: 'images/img-3.jpg' },
        body: [
            { type: 'p', text: 'Once I bought a new bike, I decided to protect my investment with something a little more heavy duty than my old $5 cable lock from Wal-Mart. So I purchased a hardened steel U-Lock. I quickly found out that the U-Lock has no good place to go, unlike my old lock which I could wrap around the handle bars. So the best spot is around the top tube and where it moves freely and somehow smashes against my knees with every pedal. So I decided to fix it.' },
            { type: 'p', text: 'I did some quick research on google and found that there is relatively few products out there. Most use a series of velcro straps or some sort of pouch. I wanted something stable and strong, yet quick and easy to remove.' },
            { type: 'p', text: 'Originally, I was going to use some sort of clasp, perhaps with some sort of snap-fit. However, later in the day, I was inspired by the latch on our fence gate. This design would allow for quick one handed removal while keeping the lock secure (unless I were to flip over, but I think my lock falling off would be the least of my worries).' },
            { type: 'p', text: 'I had to run through a couple iterations, because I wasn\'t able to predict the shrinkage of the plastic in certain places, particularly the screw holes.' },
        ],
    },
]

// Home page "Featured Projects", in display order.
export const featuredSlugs = ['printer3d', 'cryptocurrencytracker', 'ewb', 'saeminibaja', 'playingcardshelf']

export function findProject(slug) {
    // Routes match case-insensitively, so /projects/EWB is the EWB page.
    const key = String(slug).toLowerCase()
    return projects.find((p) => p.slug === key)
}
