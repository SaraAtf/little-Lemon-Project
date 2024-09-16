import React from 'react'
import "../css/header.css"

import bannerImage from '../images/restauranfood.jpg'
export function Header() {
    return (
        <header className='header sectionBG p-5'>
            <section className='container'>
                <div>
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                    <p>
                        We are a family owned Meditor Restaurant , focused on traditional recipes severed with a modern twist
                    </p>
                    <button aria-label='On Click' className='btn btn-warning'>Reserve a table</button>
                </div>
                <div className='bannerImg'>
                    <img src={bannerImage} alt="banner image" />
                </div>
            </section>
        </header>
    )
}
