import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'

const Item = ({ product }) => {
    return (
        <div className='bottom-12 relative max-w-full'>
            {/* image */}
            <Link to={`/product/${product._id}`} className='flexCenter relative top-12 overflow-hidden m-2 rounded-xl'>
                <img src={product.image[0]} alt="" className='w-full h-auto object-cover' />
            </Link>

            {/* info */}
            <div className='p-3 rounded-lg pt-12 bg-white w-full'>
                <h4 className='text-base md:text-[15px] mb-2 font-bold line-clamp-1 !my-0'>{product.name}</h4>
                <div className='flex justify-between items-center pt-1' >
                    <h5 className='pr-2 text-sm md:text-[13px] mb-2 font-bold'>${product.price}.00</h5>
                    <div className='flex items-baseline gap-x-1'>
                        <FaStar className='text-orange-500 text-sm' />
                        <h5 className='relative bottom-0.5 text-xs md:text-[13px] mb-2 font-bold'>4.8</h5>
                    </div>
                </div>
                <p className='line-clamp-2 py-1 leading-[1.3] text-xs md:text-sm text-gray-30'>{product.description}</p>
            </div>
        </div>
    )
}
Item.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
}

export default Item