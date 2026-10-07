import './ProjectSubpages.css'
import PhotoGallery from '../../../PhotoGallery'

export default function CryptocurrencyTracker() {

    const crypto_photos = [
        { src: 'images/subpages/crypto/cryptocurrency_mining_rig.jpg', alt: 'GPU mining rig' },
        { src: 'images/subpages/crypto/cryptocurrency_revenue.jpg', alt: 'Revenue chart' },
        { src: 'images/subpages/crypto/cryptocurrency_monthly_profitability.jpg', alt: 'Monthly profitability chart' },
        { src: 'images/subpages/crypto/cryptocurrency_equity_location.jpg', alt: 'Equity location chart' },
    ];

    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>Cryptocurrency Tracker</h1>
                <h3> I wrote a python script to track cryptocurrency prices as well as the profitability of my personal mining rig. </h3>

                <div className='project__subpages__content'>

                    <p>During the Spring of 2017, I became fascinated with cryptocurrencies and blockchain technologies.  I was amazed at the novelty of the decentralized authority and the public ledger.  The more I learned about the technology, the more I wanted to get involved.</p>

                    <p>Towards the end of May, I decided that I was going to build a GPU mining rig to mine ether on the Ethereum network.  It seemed like a relatively safe investment because I could always resell or reuse the hardware once mining became unprofitable.</p>

                    <p>I spent about two weeks scouring craigslist, eBay, and internet forums searching for the cheap and relatively power efficient RX400 series GPUs.  I acquired 3 GPUs, a multi PCIe slot motherboard, a processor, a beefy 1000 watt power supply and some cheap RAM for $650.</p>

                    <p>When my dad found out how much money I had spent investing in a volatile market, he was very skeptical and wanted to see if it would end up being profitable overall.</p>

                    <p>Initially I created an excel workbook and I was logging the current prices and my ether production manually. This was a tedious task that I really wished I didn&apos;t have to do.  I started thinking to myself and I realized that this would be a perfect opportunity to use my newly acquired Python knowledge.</p>

                    <p>I learned Python for a statistics and probability course that I took, and I really wanted to do something more with it.  I spent a lot of time learning about JSON and REST APIs.  I was fascinated that there were so many websites that allowed you to interact with them on such a simple level.  I quickly found websites that had APIs that I could access to track prices as well as the production of my mining rig.</p>

                    <p>The final script accesses 4 different websites to obtain bitcoin and Ethereum prices, how much bitcoin, Ethereum and USD I have, as well as my projected profitability.  Then this data is saved into a csv file every hour.</p>

                    <p>At the end of the summer I opened the csv in Excel and created a variety of graphs to show the results of my investment.  You can see the results below.</p>

                    <p>My dad was happy to see that my investment was a success and I am excited to see how much more the cryptocurrency community will grow.</p>

                    <PhotoGallery photos={crypto_photos} />
                </div>
            </div>
        </div>
    )
}