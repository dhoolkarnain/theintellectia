import React, { useState, useEffect } from 'react'
import MoreBlogPost from './MoreBlog/MoreBlogPost'


const HomeMoreBlog = () =>
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
        <section className="section">
            <h3 className='moreblog__title'>More Blogs</h3>
            <div className="container">
                {
                    blogs && blogs.filter( ( item, idx ) => idx < 4 ).slice( 1, 6 ).map( ( blog ) => (
                        <MoreBlogPost blog={blog} />
                    ) )
                }
            </div>
        </section>
    )
}

export default HomeMoreBlog
