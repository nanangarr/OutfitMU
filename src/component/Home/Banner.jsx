import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import banner from '../../assets/banner1.png'

const Banner = () => {
  return (
    <section className='mx-auto max-w-[1440px]'>
      <div className='flex flex-col-reverse lg:flex-row bg-white'>
        {/* Left Side */}
        <div className='flex-1 px-6 xl:px-12 py-8 lg:py-12 lg:max-w-[600px] xl:max-w-[700px] lg:flex lg:flex-col lg:justify-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[35px] leading-tight lg:leading-snug mb-4 font-bold uppercase'>
            Gaya Terjangkau, Tampilan Memukau
          </h2>
          <h3 className='text-sm leading-tight md:text-[20px] md:leading-[1.3] mb-4 font-bold text-gray-30 uppercase'>
            Perbarui Lemari Pakaianmu Sekarang
          </h3>
          <div className='flex mt-5'>
            <Link to={'/collection'} className='medium-14 bg-secondary ring-1 ring-secondary text-white px-7 rounded-full !py-0  !pr-0 flex items-center justify-center gap-x-2'>
              Lihat Koleksi
              <FaArrowRight className='bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] group-hover:-rotate-[20deg] transition-all duration-500 '/>
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className='w-full lg:w-[45%]'>
          <img 
            src={banner} 
            alt="Banner" 
            className='w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 
            object-cover object-center rounded-tl-3xl rounded-bl-3xl' 
          />
        </div>
      </div>
    </section>
  )
}

export default Banner