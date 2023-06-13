import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import Genre from './Genre/Genre';

const CategoryPage = () =>
{
    // const { name, id } = useParams()
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
    const genres = blogs.map( item => item.genre );
    const unique = [ ...new Set( genres ) ];
    return (
        <div className="category-container">
            <h2>Categories</h2>
            <ul className="category-list">
                {unique.map( ( category ) => (
                    <Link to={`/category/${ category }`} key={category.id} className="category-item">
                        {category}
                    </Link>
                ) )}
            </ul>
        </div>
    )
}

export default CategoryPage
