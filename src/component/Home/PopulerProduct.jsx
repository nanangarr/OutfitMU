import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Tittle from './Tittle'
import Item from './Item'

const PopulerProduct = () => {
  const { products } = useContext(ShopContext)
  const [popularProduct, setPopularProduct] = useState([])

  useEffect(() => {
    const popularProduct = products.filter(item => item.popular)
    setPopularProduct(popularProduct.slice(0, 5))
  }, [products])

  return (
    <section className='container py-16'>
      <Tittle title1={'Produk'} title2={' Populer'} titleStyles={'pb-10'} paraStyles={'!block'} />

      {/* Container */}
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {popularProduct.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopulerProduct