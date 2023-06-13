import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import HomeFeaturedBlog from './HomePage/HomeFeaturedBlog'

const HomePage = () =>
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
        <div className='front-page'>
            <Outlet />
            <div className="featured-posts">
                <h3 className="featured-posts__title">Featured Posts</h3>
                <ul className="featured-posts__list">

                    {
                        blogs && blogs.filter( ( item, idx ) => idx < blogs.length ).slice( 1 ).map( ( blog ) => (
                            <HomeFeaturedBlog key={blog.id} blog={blog} />
                        ) )
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomePage