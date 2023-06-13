import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Subscribe from '../section/Subscribe'
import Explore from '../section/Explore'
import Footer from '../section/Footer'
import Header from '../section/Header'
import HomeCategoryPage from './Home/HomePage/HomeCategoryPage'
import HomeMoreBlog from './Home/HomePage/HomeMoreBlog'

const Home = () =>
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
    const genres = blogs.map( item => item.genre );
    const unique = [ ...new Set( genres ) ];
    return (
        <div>
            <Header />
            <Outlet />
            {
                unique && unique.filter( ( item, idx ) => idx < `${ unique.length }` ).map( ( blog ) => (
                    <HomeCategoryPage blog={blog} />
                ) )
            }
            <HomeMoreBlog />
            <Explore />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home