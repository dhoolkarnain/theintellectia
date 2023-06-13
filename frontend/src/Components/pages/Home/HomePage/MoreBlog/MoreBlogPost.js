import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { Link } from 'react-router-dom';
import BlogBodyJunior from '../BlogBodyJunior';

const MoreBlogPost = ( { blog } ) =>
{

    return (
        <Link key={0} to={`/blogs/${ blog._id }`} className="post">
            <div className="post__image">
                <img src={blog.image} alt="Post 1" />
            </div>
            <div className="post__content">
                <h4 className="post__title">{blog.title}</h4>
                <p className="post__date">{formatDistanceToNow( new Date( blog.createdAt ), { addSuffix: true } )}</p>
                <p className="post__body">{
                    blog.body.slice( 0, 1 ).map( ( post, index ) => (
                        <BlogBodyJunior key={post._id} post={post} />
                    ) )
                }</p>
            </div>
        </Link>
    )
}

export default MoreBlogPost
