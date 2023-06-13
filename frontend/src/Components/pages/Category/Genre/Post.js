import { formatDistanceToNow } from 'date-fns'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogBodyJunior from '../../Home/HomePage/BlogBodyJunior'

const Post = () =>
{
    const { genre } = useParams()
    const [ blogs, setBlogs ] = useState( null )
    useEffect( () =>
    {
        const fetchBlogs = async () =>
        {
            const response = await fetch( '/blogs' )
            const json = await response.json()

            if ( response.ok )
            {
                setBlogs( json )
            }
        }
        fetchBlogs()
    }, [ blogs ] )
    return (
        <div className='category-blog-section'>
            <h3>{genre} Blogs</h3>
            <div className='category-blog-post'>
                {
                    blogs && blogs.filter( ( item, idx ) => item.genre === `${ genre }` ).map( ( blog ) => (
                        <Link key={0} to={`/blogs/${ blog._id }`} className="post">
                            <div className="post__image">
                                <img src={blog.image} alt="Post 1" />
                            </div>
                            <div className="post__content">
                                <h2 className="post__title">{blog.title}</h2>
                                <p className="post__date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
                                <p className="post__body">{
                                    blog.body.slice( 0, 1 ).map( ( post, index ) => (
                                        <BlogBodyJunior key={post._id} post={post} />
                                    ) )
                                }</p>
                            </div>
                        </Link>
                    ) )
                }

            </div>
        </div>
    )
}

export default Post
