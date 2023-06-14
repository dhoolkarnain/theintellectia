import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Subscribe = () =>
{
    const form = useRef();

    const sendEmail = ( e ) =>
    {
        e.preventDefault();

        emailjs.sendForm( 'service_0vrnqpq', 'template_i5ivxxp', form.current, 'No2jpxEdaIpJrWLdA' )
            .then( ( result ) =>
            {
                console.log( result.text );
            }, ( error ) =>
            {
                console.log( error.text );
            } );
    };
    return (
        <div className="subscribe-section">
            <h2 className="subscribe-heading">Subscribe to our newsletter</h2>
            <p className="subscribe-text">We value your privacy and are committed to protecting your personal information. When you subscribe to our newsletter, we want you to feel confident that your data is in safe hands.</p>
            <p className="subscribe-text"> Get the latest news and updates straight to your inbox.</p>
            <form ref={form} onSubmit={sendEmail} className="subscribe-form" >
                <label htmlFor="email" className="subscribe-label">Email:</label>
                <input type="email" id="email" name="user_email" placeholder="Your email address" className="subscribe-input" />
                <button type="submit" className="subscribe-button" value="Send">Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe
