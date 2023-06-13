import React, { useEffect, useState } from 'react'
import BlogsPagePostsListContainer from './BlogsPagePostsListContainer';

const BlogsDefaultPage = () =>
{
    const [ blogs, setBlogs ] = useState( [] )

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
        <div className='post-container'>
            <h3 className='post-container-title'> More Blogs</h3>
            {
                blogs.slice( 4, blogs.length ).map( item => (
                    <BlogsPagePostsListContainer blogs={item} />
                ) )
            }
        </div>
    )
}

export default BlogsDefaultPage
