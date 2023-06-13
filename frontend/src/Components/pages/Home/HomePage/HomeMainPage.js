import React, { useState, useEffect } from 'react';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useParams } from 'react-router-dom';
import BlogBody from './BlogBody';


const HomeMainPage = () =>
{
    const [ blogs, setBlogs ] = useState( null )
    const { id } = useParams()
    useEffect( () =>
    {
        fetch( `/blogs/${ id }` ).then( response =>
        {
            response.json().then( blogs =>
            {
                setBlogs( blogs );
            } );
        } );
    }, [ blogs, id ] )

    if ( !blogs ) return "";

    return (
        <div>
            <div className="main-post">
                <div className="main-post__image">
                    <img className='main-image' src={blogs.image} alt='pic' />
                </div>
                <div className="main-post__content">
                    <h2 className="main-post__title">{blogs.title}</h2>
                    <p className="main-post__date">{formatDistanceToNow( new Date( blogs.createdAt ), { addSuffix: true } )}</p>
                    <p className="main-post__body">
                        {
                            blogs.body.map( ( post, index ) => (
                                <BlogBody key={post._id} post={post} />
                            ) )
                        }
                    </p>
                </div>
                <div className='main-post__source'>
                    <span><label>Source: </label><a href={blogs.source} target="_blank" rel="noreferrer">TheEconomicTimes</a></span>
                </div>
                <div className='main-post__tags'>
                    <span >{blogs.tags.map( ( item ) => ( <li>{item}</li> ) )}</span>
                </div>
            </div>
        </div>
    )
}

export default HomeMainPage