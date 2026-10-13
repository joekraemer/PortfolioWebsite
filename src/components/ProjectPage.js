import { useParams } from 'react-router-dom'
import './ProjectPage.css'
import PhotoGallery from './PhotoGallery'
import YouTubeEmbed from './YouTubeEmbed'
import NotFound from './pages/mains/NotFound'
import asset from '../asset'
import { findProject } from '../data/projects'
import photoInfo, { photoSrcSet } from '../data/photoInfo'

function Block({ block }) {
    switch (block.type) {
        case 'p':
            return <p>{block.text}</p>
        case 'heading':
            return <h2>{block.text}</h2>
        case 'gallery':
            return <PhotoGallery photos={block.photos} />
        case 'photo': {
            const info = photoInfo(block.src)
            return (
                <div className="project__photo">
                    <img src={asset(info.full)} srcSet={photoSrcSet(info, asset)}
                        sizes="(max-width: 760px) 100vw, 720px"
                        width={info.w} height={info.h} alt={block.alt}
                        loading="lazy" decoding="async" />
                </div>
            )
        }
        case 'youtube':
            return <YouTubeEmbed id={block.id} title={block.title} />
        default:
            throw new Error(`Unknown project block type: ${block.type}`)
    }
}

// One template for every project page, filled from src/data/projects.js.
export default function ProjectPage() {
    const { slug } = useParams()
    const project = findProject(slug)
    if (!project) return <NotFound />

    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>{project.title}</h1>
                <p className="project__subtitle">{project.subtitle}</p>

                <div className='project__subpages__content'>
                    {project.body.map((block, i) => <Block key={i} block={block} />)}
                </div>
            </div>
        </div>
    )
}
