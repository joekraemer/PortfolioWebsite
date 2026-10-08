import CardItem from './CardItem'
import './Cards.css'

// A heading and a grid of project cards, split into rows (one <ul> per row).
//   heading:      section title
//   headingLevel: level of the section title; card titles sit one level below
//   rows:         number of cards in each row, in order
//   items:        [{ slug, title, label, image }]
function Cards({ heading, headingLevel, rows, items }) {
    const Heading = `h${headingLevel}`
    const rowItems = []
    let start = 0
    for (const size of rows) {
        rowItems.push(items.slice(start, start + size))
        start += size
    }
    if (start < items.length) rowItems.push(items.slice(start))

    return (
        <div className='cards'>
            <Heading>{heading}</Heading>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {rowItems.map((row, i) => (
                        <ul className="cards__items" key={i}>
                            {row.map((item) => (
                                <CardItem
                                    key={item.slug}
                                    headingLevel={headingLevel + 1}
                                    src={item.image}
                                    text={item.title}
                                    label={item.label}
                                    path={`/projects/${item.slug}`}
                                />
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
