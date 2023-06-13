import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../section/Header'
import Explore from '../section/Explore'
import Subscribe from '../section/Subscribe'
import Footer from '../section/Footer'
// import BlogsPage from './Blogs/BlogsPage'

const Blogs = () =>
{
    return (
        <div>
            <Header />
            <Outlet />
            <Explore />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Blogs
