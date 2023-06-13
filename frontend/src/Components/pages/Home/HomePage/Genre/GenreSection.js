import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { Link } from 'react-router-dom'

const GenreSection = ( { blog } ) =>
{
    return (
        <Link to={`/blogs/${ blog._id }`} className="blog-post">
            <div className='blog-post__image'>
                <img src={blog.image} alt="Blog post" className="post-image" />
            </div>
            <div className="post-info">
                <h3 className="post-title">{blog.title}</h3>
                <p className="post-date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
            </div>
        </Link>
    )
}

export default GenreSection
