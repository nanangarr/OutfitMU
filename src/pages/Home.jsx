import React from 'react'
import Hero from '../component/Home/Hero'
import Features from '../component/Home/Features'
import NewArrivals from '../component/Home/NewArrivals'
import PopulerProduct from '../component/Home/PopulerProduct'
import Banner from '../component/Home/Banner'
import Blog from '../component/Home/Blog'
import Footers from '../component/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopulerProduct />
      <Banner />
      <Footers />
    </>
  )
}

export default Home