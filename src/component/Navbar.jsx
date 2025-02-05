import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Navbar = ({ containerStyles, menuOpened, toggleMenu }) => {
    const location = useLocation();
    const [isActive, setActive] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        if (menuOpened) {
            toggleMenu();
        }
    }, [location]);

    const navLink = [
        { path: '/', name: 'Beranda' },
        { path: '/collection', name: 'Koleksi' },
        { path: '/testimoni', name: 'Testimoni' },
        { path: '/contact', name: 'Kontak' },
    ]

    return (
        <nav className={`${containerStyles}`}>
            {navLink.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                        isActive
                            ? 'px-3 py-2 rounded-full bg-secondary text-white'
                            : 'px-3 py-2 rounded-full hover:bg-gray-100'
                    }
                >
                    <div className='flexCenter gap-x-1'>
                        {link.name}
                    </div>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar