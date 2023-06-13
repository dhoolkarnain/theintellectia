import React, { useState } from 'react';
import { GiBrain } from 'react-icons/gi';
import { Link } from "react-router-dom"


const Header = () =>
{
    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState( false );

    const handleToggleMobileNav = () =>
    {
        setIsMobileNavOpen( !isMobileNavOpen );
    };
    return (
        <header className="header">
            <div className="logo">
                <Link className='Link' to="/">TheIntellectia<GiBrain className="super" style={{ fill: 'white' }} />
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className='Link' to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className='Link' to="/moreblogs">Blogs</Link>
                    </li>
                    <li className="nav__item">
                        <Link className='Link' to="/category">Category</Link>
                    </li>

                    <li className="nav__item">
                        <Link className='Link' to="/about">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link className='Link' to="/contacts">Contact</Link>
                    </li>
                    <li className="nav__item nav__item-special1">
                        <Link className='Link' to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav__item nav__item-special2">
                        <Link className='Link' to="/login">Login</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleToggleMobileNav}>
                    &#9776;
                </div>
                {isMobileNavOpen && (
                    <ul className="nav__list--mobile">
                        <li className="nav__item--mobile">
                            <Link className='Link' to="/">Home</Link>
                        </li>
                        <li className="nav__item--mobile">
                            <Link className='Link' to="/moreblogs">Blogs</Link>
                        </li>
                        <li className="nav__item--mobile">
                            <Link className='Link' to="/category">Category</Link>
                        </li>
                        <li className="nav__item--mobile">
                            <Link className='Link' to="/about">About</Link>
                        </li>
                        <li className="nav__item--mobile">
                            <Link className='Link' to="/contacts">Contact</Link>
                        </li>
                        <li className="nav__item--mobile nav__item-special1">
                            <Link className='Link' to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav__item--mobile nav__item-special2">
                            <Link className='Link' to="/login">Login</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header
