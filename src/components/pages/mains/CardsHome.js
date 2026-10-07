import CardItem from '../../CardItem'
import '../../Cards.css'


function CardsHome() {
    return (
        <div className='cards'>
            <h2>Featured Projects</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/subpages/3dprinter/3dprinter_complete.jpg"
                            text="Custom RepRap 3D Printer built from sourced parts"
                            label='Hardware'
                            path='/projects/printer3d'
                        />
                        <CardItem
                            src="images/subpages/crypto/cryptocurrency_mining_rig.jpg"
                            text="Cryptocurrency price tracker"
                            label='Software'
                            path='/projects/cryptocurrencytracker'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/subpages/ewb/ewb_testing.jpg'
                            text='Engineers Without Borders field work'
                            label='Engineering'
                            path='/projects/ewb'
                        />
                        <CardItem
                            src='images/subpages/baja/baja_jr_whole_car_parking.jpg'
                            text='SAE Mini Baja off-road vehicle'
                            label='Mechanical'
                            path='/projects/saeminibaja'
                        />
                        <CardItem
                            src='images/subpages/cardshelf/card_shelf_complete.jpg'
                            text='Laser-cut playing card display shelf'
                            label='Maker'
                            path='/projects/playingcardshelf'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsHome
