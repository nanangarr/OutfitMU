import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Home/Item'
import Tittle from '../Home/Tittle'

const RelatedProducts = () => {
  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const currentProduct = products.find(item => item._id === productId)
    if (currentProduct) {
      const related = products.filter(item =>
        item.category === currentProduct.category && item._id !== currentProduct._id
      ).slice(0, 8)
      setRelatedProducts(related)
    }
  }, [products, productId])

  if (relatedProducts.length === 0) return null

  return (
    <section className='pt-16  rounded-2xl mt-8'>
      <Tittle 
        title1={'Produk'} 
        title2={' Sesuai'} 
        title1Styles={'pb-1'} 
        paraStyles={'!block'} 
      />
      
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          },
        }}
        modules={[Autoplay]}
        className="h-[600px] sm:h-[400px] md:h-[450px]"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default RelatedProducts