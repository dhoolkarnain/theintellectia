import React from 'react'
import { BsFillPhoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'

const ContactsPage = () =>
{

    return (
        <div className='contact'>
            <div className='contact-upper'>
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className='contact-lower'>
                <h2>Reach to us</h2>
                <div className="contact-methods">
                    <div className="contact-method">
                        <a href="mailto: dhoolkarnain@gmail.com"><AiOutlineMail className='contact-icon' /><span>dhoolkarnain@gmail.com</span></a>
                    </div>
                    <div className="contact-method">
                        <a href="tel:+91 9905223834"><BsFillPhoneFill className='contact-icon' /><span>9905223834</span></a>
                    </div>
                    <div className="contact-method">
                        <a href="tel:+91 9905223834"><MdLocationPin className='contact-icon' /><span>Address: 123 Main St, City, State</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage
