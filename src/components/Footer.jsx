import React from 'react'
import '../css/footer.css'
import logo from '../images/Logo .svg'
export function Footer() {
    return (
        <footer className='bg-dark text-light footerContainer p-5'>
            <section className='container d-flex mt-5'>
                <div className='foot company-info'>
                    <img src={logo} alt="" className='mb-4' />
                    <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reprehenderit veniam aut</p>
                </div>
                <div className='foot'>
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className='foot'>
                    <h4>Contacts</h4>
                    <ul>
                        <li>Address : <br /> 123 Towncity , USA</li>
                        <li>Phone : <br /> ++ -123 456 789</li>
                        <li>Email : <br />little@lemon.com</li>
                    </ul>
                </div>
                <div className='foot'>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
