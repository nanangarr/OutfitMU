import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import login from '../../assets/login.png'

const Login = () => {
    const {token, setToken, navigate} = useContext(ShopContext)
    const [currState, setCurrState] = useState('Masuk')

    const toggleForm = () => {
        setCurrState(currState === 'Daftar' ? 'Masuk' : 'Daftar')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Simulasi proses login/register
        if (currState === 'Masuk') {
            // Proses login
            setToken('dummy-token') // Nanti diganti dengan token asli dari backend
            navigate('/') // Redirect ke home setelah login
        } else {
            // Proses register
            // Setelah register berhasil, otomatis login
            setToken('dummy-token')
            navigate('/') // Redirect ke home setelah register
        }
    }

    return (
        <div className='h-screen w-screen fixed top-0 left-0 grid grid-cols-1 md:grid-cols-2'>
            {/* image side */}
            <div className='hidden md:block'>
                <img src={login} alt="" className='h-screen w-full object-cover'/>
            </div>

            {/* Form Side */}
            <div className='flex items-center justify-center bg-white p-4 overflow-hidden'>
                <div className='w-full max-w-md'>
                    <form onSubmit={handleSubmit} className='space-y-4 bg-white rounded-lg shadow-lg p-6'>
                        <div className='text-center mb-4'>
                            <h3 className='text-2xl font-bold text-gray-800'>{currState}</h3>
                        </div>
                        
                        {currState === 'Daftar' && (
                            <div className='space-y-1'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Nama Lengkap</label>
                                <input 
                                    type="text" 
                                    placeholder='Masukkan nama lengkap Anda' 
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition'
                                    required
                                />
                            </div>
                        )}
                        
                        <div className='space-y-1'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                            <input 
                                type="email" 
                                placeholder='Masukkan email Anda' 
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition'
                                required
                            />
                        </div>
                        
                        <div className='space-y-1'>
                            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Kata Sandi</label>
                            <input 
                                type="password" 
                                placeholder='Masukkan kata sandi Anda' 
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition'
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className='w-full py-2.5 px-4 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition mt-4'
                        >
                            {currState}
                        </button>

                        <div className='text-center text-sm pt-2'>
                            <p className='text-gray-600'>
                                {currState === 'Masuk' ? "Belum punya akun? " : "Sudah punya akun? "}
                                <button 
                                    type="button"
                                    onClick={toggleForm}
                                    className='text-secondary font-medium hover:text-opacity-80'
                                >
                                    {currState === 'Masuk' ? 'Daftar' : 'Masuk'}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login