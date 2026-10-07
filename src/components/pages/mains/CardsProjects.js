import CardItem from '../../CardItem'
import '../../Cards.css'


function CardsProject() {
    return (
        <div className='cards'>
            <h2>Programming Projects</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/subpages/3dprinter/3dprinter_complete.jpg"
                            text="Custom 3D Printer"
                            label='Hardware'
                            path='/projects/printer3d'
                        />
                        <CardItem
                            src="images/subpages/crypto/cryptocurrency_mining_rig.jpg"
                            text="Cryptocurrency Tracker"
                            label='Software'
                            path='/projects/cryptocurrencytracker'
                        />
                        <CardItem
                            src='images/subpages/ewb/ewb_testing.jpg'
                            text='Engineers Without Borders'
                            label='Engineering'
                            path='/projects/ewb'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='One Second Videos'
                            label='Software'
                            path='/projects/onesecondvideos'
                        />
                        <CardItem
                            src='images/subpages/cardshelf/card_shelf_complete.jpg'
                            text='Playing Card Shelf'
                            label='Maker'
                            path='/projects/playingcardshelf'
                        />
                        <CardItem
                            src='images/subpages/baja/baja_jr_whole_car_parking.jpg'
                            text='SAE Mini Baja'
                            label='Mechanical'
                            path='/projects/saeminibaja'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Custom U-Lock Bike Mount'
                            label='Mechanical'
                            path='/projects/ulockbikemount'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProject
