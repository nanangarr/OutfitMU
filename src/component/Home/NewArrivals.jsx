import React, { useEffect, useState, useContext } from 'react'
import Tittle from './Tittle'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Item from './Item'
import { ShopContext } from '../../context/ShopContext'

const NewArrivals = () => {

  const { products } = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    const data = products.slice(0, 10)
    setNewArrivals(data)
  }, [products])

  return (
    <section className='container pt-16 pb-16 bg-primary'>
      <Tittle 
        title1={'Produk'} 
        title2={' Terbaru'} 
        title1Styles={'pb-1'} 
        paraStyles={'!block'} 
      />
      {/* Swipper Container */}

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 3,
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
        modules={[Autoplay, Pagination]}
        className="h-[450px] sm:h-[400px] md:h-[450px]"
        style={{
          '--swiper-pagination-bottom': '0px',
          '--swiper-pagination-color': '#000',
        }}
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default NewArrivals