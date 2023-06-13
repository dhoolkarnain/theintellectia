import React from 'react'
import Header from '../section/Header'
import Explore from '../section/Explore'
import Subscribe from '../section/Subscribe'
import Footer from '../section/Footer'
import ContactsPage from './Contacts/ContactsPage'

const Contacts = () =>
{
    return (
        <div>
            <Header />
            <ContactsPage />
            <Explore />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Contacts
