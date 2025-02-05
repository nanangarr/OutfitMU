import React, { useState } from 'react'

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description')

  const tabContent = {
    description: (
      <div>
        <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Detail</h5>
        <p className='leading-[1.3] text-sm text-gray-30'>Pakaian ini terbuat dari bahan berkualitas tinggi yang nyaman digunakan sehari-hari. Dengan desain yang modern dan stylish, produk ini cocok untuk berbagai kesempatan, baik formal maupun casual. Jahitan yang rapi dan bahan yang tahan lama menjamin kualitas produk ini.</p>
        <p className='leading-[1.3] text-sm text-gray-30'>Tersedia dalam berbagai pilihan warna yang menarik, sehingga Anda bisa memilih sesuai dengan gaya pribadi Anda.</p>
        <div className='mt-3'>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Keunggulan</h5>
          <ul className='list-disc list-inside text-sm text-gray-30 flex flex-col gap-1'>
            <li>Bahan berkualitas premium yang nyaman dipakai</li>
            <li>Desain modern yang cocok untuk berbagai acara</li>
            <li>Jahitan rapi dan tahan lama</li>
          </ul>
        </div>
      </div>
    ),
    care: (
      <div>
        <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Petunjuk Perawatan</h5>
        <ul className='list-disc list-inside text-sm text-gray-30 flex flex-col gap-1'>
          <li>Cuci dengan mesin menggunakan air dingin</li>
          <li>Jangan menggunakan pemutih</li>
          <li>Keringkan dengan suhu rendah</li>
          <li>Setrika dengan suhu rendah jika diperlukan</li>
          <li>Jangan dicuci kering</li>
        </ul>
      </div>
    ),
    size: (
      <div>
        <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Panduan Ukuran</h5>
        <div className='text-sm text-gray-30'>
          <p className='mb-2'>Silakan gunakan ukuran berikut untuk mendapatkan fit terbaik:</p>
          <ul className='list-disc list-inside flex flex-col gap-1'>
            <li>S: Lingkar Dada 91-96 cm, Lingkar Pinggang 71-76 cm</li>
            <li>M: Lingkar Dada 96-101 cm, Lingkar Pinggang 76-81 cm</li>
            <li>L: Lingkar Dada 101-106 cm, Lingkar Pinggang 81-86 cm</li>
            <li>XL: Lingkar Dada 106-111 cm, Lingkar Pinggang 86-91 cm</li>
            <li>XXL: Lingkar Dada 111-116 cm, Lingkar Pinggang 91-96 cm</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className='ring-1 ring-slate-200 rounded-lg'>
      <div className='flex gap-3'>
        <button 
          onClick={() => setActiveTab('description')}
          className={`text-[14px] font-[500] p-3 w-32 ${activeTab === 'description' ? 'border-b-2 border-secondary' : ''}`}
        >
          Description
        </button>
        <button 
          onClick={() => setActiveTab('care')}
          className={`text-[14px] font-[500] p-3 w-32 ${activeTab === 'care' ? 'border-b-2 border-secondary' : ''}`}
        >
          Care Guide
        </button>
        <button 
          onClick={() => setActiveTab('size')}
          className={`text-[14px] font-[500] p-3 w-32 ${activeTab === 'size' ? 'border-b-2 border-secondary' : ''}`}
        >
          Size Guide
        </button>
      </div>
      <hr className='h-1 w-full'/>
      <div className='flex flex-col gap-3 p-3'>
        {tabContent[activeTab]}
      </div>
    </div>
  )
}

export default ProductDescription