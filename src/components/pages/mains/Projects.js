import Cards from '../../Cards'
import { projects } from '../../../data/projects'

const items = projects.map((p) => ({ slug: p.slug, ...p.card }))

export default function Projects() {
    return <Cards heading='Programming Projects' headingLevel={1} rows={[3, 4]} items={items} />
}
