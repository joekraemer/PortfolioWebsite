import CardItem from './CardItem'
import './Cards.css'

// `sizes` for a card in a row of `n`, matching Cards.css: below 1024px each
// card is full width inside the page gutter (clamp(20px, 5vw, 64px)); from
// 1024px the row's cards share the content box with 20px gaps, and from
// 1280px the content box stops growing at 1120px - 2 * 64px = 992px.
function cardSizes(n) {
    const gaps = (n - 1) * 20
    return [
        `(min-width: 1280px) ${Math.ceil((992 - gaps) / n)}px`,
        `(min-width: 1024px) calc((90vw - ${gaps}px) / ${n})`,
        '(min-width: 400px) 90vw',
        'calc(100vw - 40px)',
    ].join(', ')
}

// A heading and a grid of project cards, split into rows (one <ul> per row).
//   heading:      section title
//   headingLevel: level of the section title; card titles sit one level below
//   rows:         number of cards in each row, in order
//   items:        [{ slug, title, label, thumb, thumbWidths }]
//   tone:         'dark' for the Home page's dark section; default is white
//   lcp:          true when the grid opens the page, so its first card is the
//                 largest paint and gets fetchpriority=high (Projects)
function Cards({ heading, headingLevel, rows, items, tone, lcp = false }) {
    const Heading = `h${headingLevel}`
    const rowItems = []
    let start = 0
    for (const size of rows) {
        rowItems.push(items.slice(start, start + size))
        start += size
    }
    if (start < items.length) rowItems.push(items.slice(start))

    return (
        <div className={tone === 'dark' ? 'cards cards--dark' : 'cards'}>
            <Heading>{heading}</Heading>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {rowItems.map((row, i) => (
                        <ul className="cards__items" key={i}>
                            {row.map((item, j) => (
                                <CardItem
                                    key={item.slug}
                                    headingLevel={headingLevel + 1}
                                    thumb={item.thumb}
                                    thumbWidths={item.thumbWidths}
                                    sizes={cardSizes(row.length)}
                                    // The first row is above the fold on desktop, so it
                                    // loads eagerly; the rest wait until scrolled near.
                                    // Where the grid opens the page (Projects), the first
                                    // card is the LCP image, so it is fetched first.
                                    lazy={i > 0}
                                    priority={lcp && i === 0 && j === 0}
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
