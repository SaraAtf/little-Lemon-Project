import React, { useState } from 'react'
import logo from '../images/Logo .svg'
import "../css/nav.css"
import { NavLink, Outlet } from 'react-router-dom'
import { Main } from './Main'


export function Nav() {
    const [ openMenu, setOpenMenu ] = useState( false )

    const toggleMenu = () => {
        setOpenMenu( !openMenu )

    }
    return (
        <>
            <nav className='py-4'>
                <div className="container">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    {/* Mobile Navbar */}
                    <div className={`bars`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    {/* Navbar */}
                    <ul className={openMenu ? 'visible' : ''}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Menu</a></li>
                        <li><NavLink to="/booking">Reservations</NavLink></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
