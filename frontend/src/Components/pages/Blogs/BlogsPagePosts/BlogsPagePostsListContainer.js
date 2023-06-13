import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'
import BlogBodyJunior from '../../Home/HomePage/BlogBodyJunior'

const BlogsPagePostsListContainer = ( { blogs } ) =>
{
    return (
        <div className='blogs-container'>
            <div className='blogs-section'>
                <Link key={0} to={`/blogs/${ blogs._id }`} className="post">
                    <div className="post__image">
                        <img src={blogs.image} alt="Post 1" />
                    </div>
                    <div className="post__content">
                        <h2 className="post__title">{blogs.title}</h2>
                        <p className="post__date">{formatDistanceToNow( new Date( blogs.createdAt ), { addSuffix: true } )}</p>
                        <p className="post__body">{
                            blogs.body.slice( 0, 1 ).map( ( post, index ) => (
                                <BlogBodyJunior key={post._id} post={post} />
                            ) )
                        }</p>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default BlogsPagePostsListContainer
