import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

const ProductFeatures = () => {
  return (
    <section className='bg-primary rounded-xl mt-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
        <div className='flex items-center justify-center gap-3 p-2 rounded-3xl'>
          <div className='text-3xl'><TbArrowBackUp className='mb-3 text-yellow-500'/></div>
          <div>
            <h4 className='text-lg md:text-[17px] mb-2 font-bold capitalize'>Pengembalian Mudah</h4>
            <p className='leading-[1.3] text-sm text-gray-30'>Kami menerima pengembalian produk dalam waktu 7 hari jika terdapat cacat produk atau kesalahan pengiriman dari pihak kami.</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3 p-2 rounded-3xl'>
          <div className='text-3xl'><TbTruckDelivery className='mb-3 text-red-500'/></div>
          <div>
            <h4 className='text-lg md:text-[17px] mb-2 font-bold capitalize'>Pengiriman Cepat</h4>
            <p className='leading-[1.3] text-sm text-gray-30'>Pengiriman pesanan dilakukan dalam 1-3 hari kerja dengan jasa ekspedisi terpercaya ke seluruh wilayah Indonesia.</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3 p-2 rounded-3xl'>
          <div className='text-3xl'><RiSecurePaymentLine className='mb-3 text-secondary'/></div>
          <div>
            <h4 className='text-lg md:text-[17px] mb-2 font-bold capitalize'>Pembayaran Aman</h4>
            <p className='leading-[1.3] text-sm text-gray-30'>Transaksi aman dengan berbagai metode pembayaran yang tersedia, termasuk transfer bank, e-wallet, dan pembayaran virtual.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures