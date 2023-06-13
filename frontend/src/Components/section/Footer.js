import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className='footer-left'>
                <div className="logo">
                    <Link className='Link' to="/">TheIntellectia<GiBrain className="super" style={{ fill: 'white' }} />
                    </Link>
                </div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/carterusmani/"><AiFillInstagram style={{ fill: 'white' }} /></a>
                    <a href="https://www.youtube.com/channel/UC2jMiHJPxLYLmr96bkJugkA"><AiFillYoutube style={{ fill: 'white' }} /></a>
                    <a href="https://www.linkedin.com/in/dhoolkarnain/"><FaLinkedin style={{ fill: 'white' }} /></a>
                </div>
            </div>
            <div className="footer-text">
                <p>copyright &copy; 2023 Ethereon. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
