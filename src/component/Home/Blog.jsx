import React from 'react'
import Tittle from './Tittle'
import { blogs } from '../../Data/data'

const Blog = () => {
  return (
    <section className='container py-16'>
      <Tittle title1='Our Export' title2={'Blog'} titleStyles={'pb-10'} paraStyles={'!block'} />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        {blogs.map((blog) => (
          <div key={blog.title} className='rounded-3xl border-[11px] border-primary overflow-hidden relative'>
            <img src={blog.image} alt={blog.title} />
            <div className='absolute top-0 left-0 w-full h-full bg-black/25'>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <h3 className='text-xl leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold'>{blog.title}</h3>
                <h4 className='text-lg md:text-[17px] mb-2 font-bold'>{blog.category}</h4>
                <button className=' medium-14 bg-secondary ring-1 ring-secondary text-white px-7 py-2.5 rounded-full'>Continue Reading</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog