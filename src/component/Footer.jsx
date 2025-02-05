import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footers = () => {
  const contactInfo = [
    { icon: <FaLocationDot />, title: 'Lokasi', content: 'Jl. Contoh No. 123' },
    { icon: <FaPhone />, title: 'Telepon', content: '+0123456789' },
    { icon: <FaMailBulk />, title: 'Email', content: 'info@outfiro.com' }
  ]

  const footerLinks = [
    {
      title: 'Layanan Pelanggan',
      links: [
        { name: 'Pusat bantuan', path: '/' },
        { name: 'Metode pembayaran', path: '/' },
        { name: 'Kontak', path: '/contact' },
        { name: 'Status pengiriman', path: '/' },
        { name: 'Keluhan', path: '/' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Kebijakan Privasi', path: '/' },
        { name: 'Pengaturan Cookie', path: '/' },
        { name: 'Syarat & Ketentuan', path: '/' },
        { name: 'Pembatalan', path: '/' },
        { name: 'Tentang Kami', path: '/' }
      ]
    },
    {
      title: 'Lainnya',
      links: [
        { name: 'Tim Kami', path: '/' },
        { name: 'Keberlanjutan', path: '/' },
        { name: 'Pers', path: '/' },
        { name: 'Karir', path: '/' },
        { name: 'Buletin', path: '/' }
      ]
    }
  ]

  return (
    <footer className='pt-8'>
      <div className='container flex items-start justify-between flex-col lg:flex-row gap-6 py-6 mb-7 bg-primary'>
        <div>
          <h4 className='text-lg md:text-[17px] mb-2 font-bold'>Kami Selalu Siap Membantu</h4>
          <p>Temukan kemudahan berbelanja dengan layanan pelanggan terbaik kami.</p>
        </div>
        <div className='flexStart flex-wrap gap-8'>
          {contactInfo.map((info, index) => (
            <div key={index} className='flexCenter gap-x-6'>
              {info.icon}
              <div>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>{info.title}</h5>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container flex flex-col lg:flex-row items-start justify-between gap-8 mt-12'>
        <div className='flex flex-col max-w-sm gap-y-5'>
          <div className='text-[32px] font-[700] leading-[120%]'>
            Outfit<span className='text-secondary'>MU</span>
          </div>
          <p>Temukan gaya fashion terbaikmu bersama OutfitMU, solusi fashion untuk tampil lebih percaya diri.</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto'>
          {footerLinks.map((section, index) => (
            <ul key={index} className='min-w-[170px]'>
              <h4 className='text-lg md:text-[17px] font-bold mb-3'>{section.title}</h4>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className='my-2'>
                  <Link
                    to={link.path}
                    className='text-gray-30 regular-14 hover:text-secondary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className='container medium-14 py-2 px-8 rounded flexCenter mt-6 gap-1'>
        <span>© 2025 OutfiMU.</span>
        <span> Hak Cipta Dilindungi.</span>
      </p>
    </footer>
  )
}

export default Footers