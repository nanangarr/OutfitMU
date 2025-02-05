import React from 'react'
import { GiClothes, GiSewingNeedle } from 'react-icons/gi'
import { FaTruck, FaRuler } from 'react-icons/fa'

const WhyChooseData = [
  {
    id: 1,
    tittle: 'Desain Personal',
    desc: 'Kami menyediakan layanan desain personal untuk membantu menciptakan pakaian sesuai keinginan Anda.',
    icon: <GiSewingNeedle />,
    bgColor: '#0063ff',
    delay: 0.3,
  },
  {
    id: 2,
    tittle: 'Kualitas Premium',
    desc: 'Menggunakan bahan berkualitas tinggi untuk memastikan kenyamanan dan ketahanan pakaian.',
    icon: <GiClothes />,
    bgColor: '#ff0000',
    delay: 0.6,
  },
  {
    id: 3,
    tittle: 'Pengiriman Cepat',
    desc: 'Layanan pengiriman cepat ke seluruh Indonesia dengan packaging yang aman.',
    icon: <FaTruck />,
    bgColor: '#00ff00',
    delay: 0.9,
  },
  {
    id: 4,
    tittle: 'Size Custom',
    desc: 'Tersedia layanan custom size untuk memastikan pakaian pas dengan ukuran Anda.',
    icon: <FaRuler />,
    bgColor: '#fe6baa',
    delay: 1.2,
  }
]

const Features = () => {
  return (
    <>
      <div>
        <div className='container pb-16'>
          {/* Header Section */}
          <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'

          >
            <h1 className='uppercase font-semibold text-yellow-500'>Mengapa Memilih Kami?</h1>
            <p className='font-semibold text-3xl'>Kami memberikan beberapa alasan mengapa anda harus memilih kami.</p>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6' >
            {WhyChooseData.map((item) => {
              return (
                <div key={item.id} className='space-y-4 p-6 rounded-xl'

                >
                  {/* icon section */}
                  <div style={{ backgroundColor: item.bgColor }} className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
                    <div className='text-2xl'>{item.icon}</div>
                  </div>
                  <p className='font-semibold'>{item.tittle}</p>
                  <p className='text-sm text-gray-600'>{item.desc}</p>
                </div>
              );
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Features