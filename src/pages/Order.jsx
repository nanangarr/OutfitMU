import React, { useContext, useEffect, useState } from 'react'
import Tittle from '../component/Home/Tittle'
import { ShopContext } from '../context/ShopContext'
import Footer from '../component/Footer'

const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
        case 'processing':
            return 'bg-yellow-100 text-yellow-800';
        case 'shipped':
            return 'bg-blue-100 text-blue-800';
        case 'delivered':
            return 'bg-green-100 text-green-800';
        case 'cancelled':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

const Order = () => {

    const { products, currency } = useContext(ShopContext)
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        const data = products.slice(0, 5)
        setOrderData(data)
    }, [products])

    return (
        <div>
            <div className='bg-primary mb-16'>
                {/* container */}
                <div className='container py-10'>
                    <Tittle title1={'Order'} title2={'List'} />
                    {/* container */}
                    {orderData.map((item, index) => (
                        <div key={index} className='bg-white p-3 mt-3 rounded-lg'>
                            <div className='text-gray-700 flex flex-col gap-4'>
                                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                                    {/* image */}
                                    <div className='flex-shrink-0'>
                                        <img src={item.image[0]} alt="" className='w-full sm:w-[88px] h-max rounded-lg' />
                                    </div>

                                    {/* order info */}
                                    <div className='flex-grow relative'>
                                        {/* Status and Track Order */}
                                        <div className='sm:absolute static top-0 right-0 flex sm:flex-col flex-row justify-between sm:items-end items-center mb-2 sm:mb-0'>
                                            <p className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusStyle(item.status)}`}>
                                                {item.status || 'Processing'}
                                            </p>
                                            <button className='text-xs bg-secondary ring-1 ring-secondary text-white px-4 sm:px-7 py-1.5 rounded-full mt-0 sm:mt-1'>
                                                Track Order
                                            </button>
                                        </div>

                                        <h5 className='text-[14px] md:text-[15px] font-bold capitalize line-clamp-1 mb-2'>{item.name}</h5>
                                        
                                        {/* Price, Quantity, Size */}
                                        <div className='flex flex-wrap gap-y-1 items-center gap-x-4 mb-2'>
                                            <div className='flex items-center gap-x-2'>
                                                <h5 className='text-sm font-[400] text-gray-500'>Price:</h5>
                                                <p className='text-sm'>{currency} {item.price}</p>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <h5 className='text-sm font-[400] text-gray-500'>Quantity:</h5>
                                                <p className='text-sm'>{item.quantity}</p>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <h5 className='text-sm font-[400] text-gray-500'>Size:</h5>
                                                <p className='text-sm'>{item.size}</p>
                                            </div>
                                        </div>

                                        {/* Date and Payment */}
                                        <div className='flex flex-col gap-y-1'>
                                            <div className='flex items-center gap-x-2'>
                                                <h5 className='text-sm font-[400] text-gray-500'>Date:</h5>
                                                <p className='text-sm'>{new Date(item.date).toDateString()}</p>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <h5 className='text-sm font-[400] text-gray-500'>Payment:</h5>
                                                <p className='text-sm'>{'Stripe'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Order