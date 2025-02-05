import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { products } from '../Data/data'
import { createContext } from 'react'
import { toast } from 'react-toastify'


// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const currency = "$"
  const delivery_charges = 10
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(true)
  const [token, setToken] = useState('')
  const [cartItems, setCartItems] = useState({})

  // cart
  const addToCart = async (itemId, size, quantity = 1) => {
    if (!size) {
      toast.error('Please select a size')
      return;
    }
    let cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += quantity
      } else {
        cartData[itemId][size] = quantity
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = quantity
    }

    setCartItems(cartData)
    toast.success('Added to cart successfully!')
  }

  const updateQuantity = (itemId, size, newQuantity) => {
    setCartItems(prev => {
      const updated = { ...prev };
      if (!updated[itemId]) {
        updated[itemId] = {};
      }
      updated[itemId][size] = newQuantity;
      return updated;
    });
  };

  // get cart count
  const getCartCount = () => {
    let count = 0;
    Object.keys(cartItems).forEach(productId => {
      Object.values(cartItems[productId]).forEach(sizeQuantity => {
        count += sizeQuantity;
      });
    });
    return count;
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
  }

  useEffect(() => {
    // console.log(cartItems)
  }, [cartItems])

  const value = { 
    currency, 
    delivery_charges, 
    products, 
    navigate, 
    search, 
    setSearch, 
    showSearch, 
    setShowSearch, 
    token, 
    setToken,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount, 
    updateQuantity,
    handleLogout,
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ShopContextProvider