import React from 'react'
import heroImg from '../../assets/hero1.png'
import { BsFire } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative'>
      <div className='bg-white p-3 rounded-3xl max-w-[228px] relative top-8 xl:top-12'>
        <div>
          <img src={heroImg} alt="" height={211} width={211} className='rounded-3xl mb-3' />
          <span className='absolute top-1/2 left-1/2 flexCenter -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-secondary rounded-full cursor-pointer'>
            <span className='absolute h-full w-full rounded-full bg-white opacity-50 animate-ping'></span>
            <FaPlay className='text-sm relative left-[1px] text-white'/>
          </span>
        </div>
        <p className='leading-[1.3] text-sm text-gray-30'>
          <b className='uppercase'>Temukan</b> Gaya terbaikmu dengan sekali klik, Tingkatkan penampilanmu, belanja sekarang!</p>
      </div>
      <div className='mt-12 sm:mt-20  max-w-[777px]'>
        <h5 className='flex items-baseline gap-x-2 uppercase text-secondary text-[18px]  text-sm  mb-1 font-bold'>KOLEKSI MODERN <BsFire /></h5>
        <h1 className='capitalize max-w-[722px] text-3xl leading-tight md:text-4xl md:leading-[1.3] mb-4 font-bold'>Setiap klik membawamu lebih dekat dengan kesempurnaan gaya! Belanja Sekarang!</h1>
        <div className='flex'>
          <Link className='bg-white text-sm font-medium pl-3 rounded-full pr-1 py-1  flexCenter gap-x-1 hover:bg-gray-100' to='/collection'>
            Lihat Koleksi Modern Kami
            <FaArrowRight className='bg-secondary text-white rounded-full h-8 w-8 p-2 m-[3px] border border-white group-hover:-rotate-2 transition-all duration-500' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero