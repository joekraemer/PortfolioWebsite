import React from 'react'
import CardItem from '../../CardItem'
import '../../Cards.css'


function CardsProject() {
    return (
        <div className='cards'>
            <h1>Programming Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/subpages/3dprinter/3dprinter_complete.jpg"
                            text="Custom 3D Printer"
                            label='Project'
                            path='/projects/printer3d'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Cryptocurrency Tracker"
                            label='Luxury'
                            path='/projects/cryptocurrencytracker'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Engineers Without Borders'
                            label='Mystery'
                            path='/projects/ewb'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='One Second Videos'
                            label='Mystery'
                            path='/projects/onesecondvideos'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Playing Card Shelf'
                            label='Adventure'
                            path='/projects/playingcardshelf'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='SAE Mini Baja'
                            label='Adrenaline'
                            path='/projects/saeminibaja'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Custom U-Lock Bike Mount'
                            label='Mystery'
                            path='/projects/ulockbikemount'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProject