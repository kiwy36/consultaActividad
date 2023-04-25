import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='nav' className='navbar'>
            <div className="logo">Tienda de bicis</div>
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Inicio</a></li>
                <li className="nav-item"><a href="/about">Acerca de</a></li>
                <li className="nav-item"><a href="/contact">Contacto</a></li>
                <li>🛒7</li>
            </ul>
        </nav>
    )
}

export default Navbar
