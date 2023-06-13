import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../section/Header'
import Explore from '../section/Explore'
import Subscribe from '../section/Subscribe'
import Footer from '../section/Footer'
import CategoryPage from './Category/CategoryPage'

const Category = () =>
{
    return (
        <div>
            <Header />
            <CategoryPage />
            <Outlet />
            <Explore />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Category