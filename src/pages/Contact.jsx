import React from 'react'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
      <section className="container ">
        <div className='mx-auto px-6 lg:px-12 py-12'>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form Section */}
            <div className="bg-primary p-8 shadow rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-gray-600 mb-8">Punya pertanyaan? Kami senang mendengar dari Anda.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Depan</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Budi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Belakang</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Santoso"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="budi@contoh.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button className='w-full h-full medium-14 bg-secondary ring-1 ring-secondary text-white px-7 py-2.5 rounded-full transition-all duration-300 flexCenter gap-x-2'>Kirim</button>
              </form>
            </div>

            {/* Map and Info Section */}
            <div className="space-y-8">
              <div className="h-[400px] lg:h-[600px] w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2684466474703!2d106.82704841476884!3d-6.175392095527887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1647660089946!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default Contact