import React from 'react'
import Tittle from '../component/Home/Tittle'
import CartTotal from '../component/cart/CartTotal'
import { useState } from 'react';

const PlaceOrder = () => {
  const [method, setMethod] = useState('stripe');

  const handleMethodChange = (selectedMethod) => {
    setMethod(selectedMethod);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#c1e8ef36] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6">
          {/* Delivery Information */}
          <div className="bg-white shadow-md p-6">
            <Tittle title1={'Delivery'} title2={' Information'} title1Styles={'pb-1'} paraStyles={'!block'} />
            <form className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea rows="3" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input type="text" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input type="text" className="w-full p-2 border border-gray-300 focus:outline-none focus:border-secondary" />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex flex-1 flex-col space-y-6">
          <CartTotal />
          
          {/* Payment Method */}
          <div className='bg-white shadow-md p-6'>
            <Tittle title1={'Payment'} title2={' Method'} title1Styles={'pb-1'} paraStyles={'!block'} />
            <div className='flex gap-4 mt-4'>
              <button
                onClick={() => handleMethodChange('stripe')}
                className={`${
                  method === 'stripe' 
                    ? 'bg-gray-600 text-white border' 
                    : 'bg-white text-secondary border'
                } text-[14px] font-[500] px-7 py-2.5 rounded-full transition-all`}
              >
                Stripe
              </button>
              <button
                onClick={() => handleMethodChange('cod')}
                className={`${
                  method === 'cod'
                    ? 'bg-gray-600 text-white border'
                    : 'bg-white text-secondary border'
                } text-[14px] font-[500] px-7 py-2.5 rounded-full transition-all`}
              >
                Cash on Delivery
              </button>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={() => {}} 
              className="w-full bg-secondary text-white py-3 mt-6 font-semibold hover:bg-secondary transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder