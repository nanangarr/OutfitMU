import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaRegWindowClose } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Tittle from '../component/Home/Tittle'
import CartTotal from '../component/cart/CartTotal'
import Footer from '../component/Footer'

const Cart = () => {

    const { products, currency, cartItems, getCartCount, navigate, updateQuantity } = useContext(ShopContext)
    const [cartData, setCartData] = useState([])
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        if (products.length > 0) {
            const tempData = []
            const initialQuantities = {}
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item],
                        })
                        initialQuantities[`${items}-${item}`] = cartItems[items][item]
                    }
                }
            }
            setCartData(tempData)
            setQuantities(initialQuantities)
        }
    }, [cartItems, products])

    const updateQuantityHandler = (id, size, newValue) => {
        if (newValue >= 1) {
            updateQuantity(id, size, newValue);
        }
    }

    const increment = (id, size) => {
        const currentQty = cartItems[id]?.[size] || 0;
        updateQuantityHandler(id, size, currentQty + 1);
    }

    const decrement = (id, size) => {
        const currentQty = cartItems[id]?.[size] || 0;
        if (currentQty > 1) {
            updateQuantityHandler(id, size, currentQty - 1);
        }
    }

    return (
        <section>
            <div className="container mx-auto px-4 py-8 bg-[#c1e8ef36] min-h-screen">
                {/* Header Section */}
                <div className="mb-8">
                    <Tittle
                        title1={'Shopping Cart'}
                        titleStyles="border-b border-[#43c2d1]/20"
                    />
                    <p className="text-[#272626] mt-2">({getCartCount()} Items)</p>
                </div>

                {/* Cart Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        {cartData.map((item, index) => {
                            const productData = products.find(product => product._id === item._id);
                            const key = `${item._id}-${item.size}`;

                            return (
                                <div key={index} className="bg-white rounded-lg shadow-md mb-4 p-4 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-24">
                                            <img
                                                src={productData.image[0]}
                                                alt={productData.name}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h5 className="font-semibold text-lg text-[#272626]">
                                                    {productData.name}
                                                </h5>
                                                <button className="text-red-500 hover:text-red-600 transition-colors">
                                                    <FaRegWindowClose size={20} />
                                                </button>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3">Size: {item.size}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-white rounded-lg p-2 border border-[#43c2d1]/20">
                                                    <button
                                                        onClick={() => decrement(item._id, item.size)}
                                                        className="p-1 text-white bg-secondary rounded-full hover:bg-[#224F34] transition-colors w-6 h-6 flex items-center justify-center"
                                                    >
                                                        <FaMinus size={12} />
                                                    </button>
                                                    <p className="font-medium w-8 text-center text-[#272626]">
                                                        {cartItems[item._id]?.[item.size] || 0}
                                                    </p>
                                                    <button
                                                        onClick={() => increment(item._id, item.size)}
                                                        className="p-1 text-white bg-secondary rounded-full hover:bg-[#224F34] transition-colors w-6 h-6 flex items-center justify-center"
                                                    >
                                                        <FaPlus size={12} />
                                                    </button>
                                                </div>
                                                <h4 className="font-bold text-secondary">
                                                    {currency}{productData.price}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <CartTotal>
                            <button
                                onClick={() => navigate('/place-order')}
                                className="w-full bg-secondary text-white py-3 mt-6 font-semibold hover:bg-[#224F34] transition-colors"
                            >
                                Proceed to Checkout
                            </button>
                        </CartTotal>
                    </div>
                </div>

                {/* Empty Cart Message */}
                {cartData.length === 0 && (
                    <div className="text-center py-16 ">
                        <h3 className="text-2xl font-bold text-[#272626] mb-4">Your cart is empty</h3>
                        <p className="text-gray-500 mb-8">Add some products to your cart to proceed</p>
                        <button
                            onClick={() => navigate('/collection')}
                            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-[#224F34] transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>


            <Footer />
        </section>
    )
}

export default Cart