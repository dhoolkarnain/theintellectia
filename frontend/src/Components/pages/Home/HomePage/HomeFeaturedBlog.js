import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const HomeFeaturedBlog = ( { blog } ) =>
{

    return (
        <Link to={`/blogs/${ blog._id }`} className="featured-posts__item">
            <div className='featured-post_image-container'>
                <img className='featured-image' src={blog.image} alt='pic' />
            </div>
            <div className='featured-post_content-container'>
                <a href="/" className="featured-posts__link">
                    <h4 className="featured-posts__item-title">
                        {blog.title}</h4>
                    <p className="featured-posts__item-date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
                </a>
            </div>
        </Link>
    )
}

export default HomeFeaturedBlog
