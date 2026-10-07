import React from 'react'
import './ProjectSubpages.css'
import PhotoGallery from '../../../PhotoGallery'

export default function PlayingCardShelf() {

    const title_photos = [
        { src: 'images/subpages/cardshelf/card_shelf_complete.jpg', alt: 'Completed card shelf with cards' },
        { src: 'images/subpages/cardshelf/card_shelf_complete_alternate_angle.jpg', alt: 'Completed card shelf, alternate angle' },
    ];

    const build_photos = [
        { src: 'images/subpages/cardshelf/card_shelf_pieces.jpg', alt: 'Cut oak board pieces' },
        { src: 'images/subpages/cardshelf/card_shelf_router.jpg', alt: 'Routing the card groove' },
        { src: 'images/subpages/cardshelf/card_shelf_groove.jpg', alt: 'Routed groove detail' },
        { src: 'images/subpages/cardshelf/card_shelf_stain.jpg', alt: 'Staining the wood' },
        { src: 'images/subpages/cardshelf/card_shelf_clear_coat.jpg', alt: 'Applying clear coat' },
    ];

    const mount_photos = [
        { src: 'images/subpages/cardshelf/card_shelf_pads.jpg', alt: 'Mounting pads' },
        { src: 'images/subpages/cardshelf/card_shelf_mounting.jpg', alt: 'Mounting hardware' },
        { src: 'images/subpages/cardshelf/card_shelf_wall_mounting.jpg', alt: 'Mounting the shelf to the wall' },
        { src: 'images/subpages/cardshelf/card_shelf_complete_no_cards.jpg', alt: 'All three shelves mounted' },
    ];

    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>Playing Card Shelf</h1>
                <h3> I created a custom floating shelf for displaying boutique playing cards. </h3>

                <div className='project__subpages__content'>
                    <PhotoGallery photos={title_photos} />

                    <p>My youngest brother is really into magic and cardistry and so naturally he has a bunch of playing cards. So for Christmas (yes I know it took me a while to post) me and my other brother wanted to make something to display his favorite cards.</p>

                    <p>We got 6 ft of a 1" x 5" and 1" x 2" oak boards. We went with oak because we liked the continuous grains. We then chopped those into thirds to make 2 ft sections.</p>

                    <p>In order for the cards to sit securely on the shelf we used a router cut out a small 1/2" groove, about 1/8" deep. This gives the decks something to rest on. Sorry for the blurry picture.</p>

                    <p>Next we applied two coats of a rather dark stain to bring out the details of the wood. Also the darker finish matches the room much better.</p>

                    <PhotoGallery photos={build_photos} />

                    <p>Then we mounted the small board to the larger piece with screws. Make sure to pre-drill when using hard wood because they splinter very easily. Also countersink for a clean finished product.</p>

                    <p>To make sure the stain wouldn't rub off on the cards, we applied a couple coats of clear sealer.</p>

                    <p>Next was mounting the shelf on the wall! We used picture hanging brackets and nails to mount the shelf. The shelf isn't very heavy and isn't at risk of pulling out of the drywall so we didn't think drywall anchors were necessary.</p>

                    <p>Here is all three shelves mounted. Don't worry, they are evenly spaced, it just looks off because of the shadows.</p>

                    <PhotoGallery photos={mount_photos} />

                    <p>This project ended much better than I expected.  I think the stained look really matches the wall and brings out the colors of the decks.  If I was going to do it again, I think it would be fun to add LED lighting to the back or underside of the shelf. </p>

                </div>

            </div>
        </div>
    )
}
