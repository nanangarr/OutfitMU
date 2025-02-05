import React, { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const ShowSearch = () => {
    const { search, setSearch, showSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('/collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return visible && showSearch ? (
        <div className='py-4 pb-7'>
            <div className='text-center'>
                <div className='inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white overflow-hidden w-full'>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder='Cari....'
                        className='border-none outline-none w-full bg-white text-sm'
                    />
                    <div className='bg-white text-center'>
                        <FaSearch className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default ShowSearch