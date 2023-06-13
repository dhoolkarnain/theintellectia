import React from 'react'

const BlogBody = ( { post } ) =>
{
    return (
        <div className='blog-body'>
            <h4>{post.subheading}:</h4>
            <p>{post.para}</p>
        </div>
    )
}

export default BlogBody
