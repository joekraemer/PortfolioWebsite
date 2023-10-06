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
                            text="I combined a variety of designs and models as well as my own ideas and modifications to create my very own 3D Printer. "
                            label='Project'
                            path='/projects/printer3d'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through th islands of Bali"
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProject