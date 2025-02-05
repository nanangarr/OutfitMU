import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Tittle from '../Home/Tittle'

// eslint-disable-next-line react/prop-types
const CartTotal = ({ children }) => {
    const { products, currency, cartItems } = useContext(ShopContext)

    const calculateTotal = () => {
        let total = 0
        for (const items in cartItems) {
            for (const size in cartItems[items]) {
                if (cartItems[items][size] > 0) {
                    const product = products.find(p => p._id === items)
                    if (product) {
                        total += product.price * cartItems[items][size]
                    }
                }
            }
        }
        return total.toFixed(2)
    }

    return (
        <div className="bg-white shadow-md p-6">
            <Tittle title1={'Order'} title2={' Summary'} title1Styles={'pb-1'} paraStyles={'!block'} />
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">{currency}{calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-500">Free</span>
                </div>
                <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-secondary">{currency}{calculateTotal()}</span>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default CartTotal