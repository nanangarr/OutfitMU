import Navbar from './Navbar'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaRegCircleUser, FaBasketShopping } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { RiUserLine } from 'react-icons/ri'
import { ShopContext } from '../context/ShopContext'

const Header = () => {

    const { token, getCartCount, navigate, handleLogout } = useContext(ShopContext)
    const [menuOpened, setMenuOpened] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const profileRef = useRef(null)

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close dropdown when window resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // mobile breakpoint
                setIsProfileOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => setMenuOpened((prev) => !prev)

    return (
        <header className='container'>
            <div className='flexBetween py-4'>
                {/* Logo left side */}
                <Link to={"/"} className='flex flex-1'>
                    <div className='text-2xl sm:text-3xl font-bold'>
                        Outfit<span className='text-secondary'>MU</span>
                    </div>
                </Link>

                {/* Navbar right side */}
                <div className='flex-1'>
                    <Navbar
                        containerStyles={`${menuOpened ? 'flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50' : 'hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1'}`}
                        menuOpened={menuOpened}
                        toggleMenu={toggleMenu}
                    />
                </div>

                {/* Button Right side */}
                <div className='flex flex-1 items-center justify-end gap-x-4 xs:gap-x-5'>
                    {/* Menu Toggle */}
                    <FaBarsStaggered onClick={toggleMenu} className='xl:hidden cursor-pointer text-xl' />

                    {/* Search Icons */}
                    <FaSearch className='hidden sm:block text-lg cursor-pointer' />

                    {/* cart Icons */}
                    <Link to={"/cart"} className='flex relative'>
                        <FaBasketShopping className='text-[27px]' />
                        <span className='bg-secondary text-white text-sm font-semibold absolute left-1/2 flexCenter w-4 h-4 rounded-full shadow-inner'>{getCartCount()}</span>
                    </Link>

                    {/* User Icons */}
                    <div className='relative' ref={profileRef}>
                        {token ? (
                            <>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className='w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-opacity-90'
                                >
                                    <RiUserLine className='text-lg' />
                                </button>

                                {isProfileOpen && (
                                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 md:block'>
                                        <div className='flex flex-col'>
                                            <Link
                                                to='/profile'
                                                className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                Profilku
                                            </Link>
                                            <Link
                                                to='/order'
                                                className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                Riwayat Order
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    handleLogout()
                                                    setIsProfileOpen(false)
                                                }}
                                                className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                                            >
                                                Keluar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <button onClick={() => navigate('/login')} className='medium-14 bg-primary ring-1 ring-primary px-4 sm:px-7 py-2.5 rounded-full transition-all duration-300 flexCenter gap-x-2'>
                                Masuk/Daftar <RiUserLine className='text-lg' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header