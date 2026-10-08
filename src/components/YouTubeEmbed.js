import './YouTubeEmbed.css'

// A responsive 16:9 YouTube player. Uses the privacy-enhanced
// youtube-nocookie.com host, and loads lazily so a page with several videos
// only fetches the players the visitor scrolls to.
function YouTubeEmbed({ id, title }) {
    return (
        <div className="youtube-embed">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    )
}

export default YouTubeEmbed
