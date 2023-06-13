import React from 'react'

const BlogBodyJunior = ( { post } ) =>
{
    return (
        <div className='blog-body'>
            <p>{post.para}</p>
        </div>
    )
}

export default BlogBodyJunior
