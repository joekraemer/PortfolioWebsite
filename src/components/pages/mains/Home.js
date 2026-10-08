import Cards from '../../Cards'
import HeroSection from '../../HeroSection'
import { featuredSlugs, findProject } from '../../../data/projects'

const featured = featuredSlugs.map((slug) => {
    const { card } = findProject(slug)
    return { slug, ...card, title: card.homeTitle ?? card.title }
})

function Home() {
    return (
        <>
            <HeroSection />
            <Cards heading='Featured Projects' headingLevel={2} rows={[2, 3]} items={featured} />
        </>
    )
}

export default Home
