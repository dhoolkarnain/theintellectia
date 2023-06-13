import React from 'react'
import Header from '../section/Header'
import Explore from '../section/Explore'
import Subscribe from '../section/Subscribe'
import Footer from '../section/Footer'
import AboutUsPage from './AboutUs/AboutUsPage'

const About = () =>
{
    return (
        <div>
            <Header />
            <AboutUsPage />
            <Explore />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default About
