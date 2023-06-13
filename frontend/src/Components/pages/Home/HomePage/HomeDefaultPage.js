import React, { useEffect, useState } from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import BlogBody from './BlogBody';

const HomeDefaultPage = () =>
{
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
        <div>
            {
                blogs && blogs.filter( ( item, idx ) => idx < 1 ).map( ( blog ) => (
                    <div className="main-post">
                        <div className="main-post__image">
                            <img className='main-image' src={blog.image} alt='pic' />
                        </div>
                        <div className="main-post__content">
                            <h2 className="main-post__title">{blog.title}</h2>
                            <p className="main-post__date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
                            <p className="main-post__body">
                                {
                                    blog.body.map( ( post, index ) => (
                                        <BlogBody key={post._id} post={post} />
                                    ) )
                                }
                            </p>
                        </div>
                        <div className='main-post__source'>
                            <span><label>Source: </label><a href={blog.source} target="_blank" rel="noreferrer">TheEconomicTimes</a></span>
                        </div>
                        <div className='main-post__tags'>
                            <span >{blog.tags.map( ( item ) => ( <li>{item}</li> ) )}</span>
                        </div>
                    </div>
                ) )
            }
        </div>
    )
}

export default HomeDefaultPage
