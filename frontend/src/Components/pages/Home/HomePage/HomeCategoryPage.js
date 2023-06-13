import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GenreSection from './Genre/GenreSection'

const HomeCategoryPage = ( { blog } ) =>
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
        <div className="marketing-section">
            <div className='top-section'>
                <h3 className="marketing-heading">{blog}</h3>
                <p className="see-more-link">
                    <Link to={`blogs/${ blog }`}>More</Link>
                </p>
            </div>
            <div className='bottom-section'>
                <div className="left-section">
                    {
                        blogs && blogs.filter( ( item, idx ) => item.genre === `${ blog }` ).slice( 1, 4 ).map( ( blog ) => (
                            <GenreSection blog={blog} />
                        ) )
                    }
                </div>
                <div className="right-section">
                    <div className="ad-box">
                        <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategoryPage
