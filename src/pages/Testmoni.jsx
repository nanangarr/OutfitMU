import React from 'react';
import { FaStar } from 'react-icons/fa';
import Footer from '../component/Footer';

const testimonials = [
  {
    name: "Putri Rahayu",
    role: "Pecinta Fashion",
    message: "OutfitMU benar-benar mengubah pengalaman belanja saya. Rekomendasi pakaian yang diberikan sangat sesuai dengan gaya saya!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Mahasiswa",
    message: "Mencari pakaian yang cocok jadi lebih mudah dengan OutfitMU. Kualitas dan modelnya selalu keren dan mengikuti tren!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    name: "Dewi Kusuma",
    role: "Model Profesional",
    message: "Sebagai seseorang yang berkecimpung di dunia fashion, saya sangat terkesan dengan detail dan pilihan tren fashion di OutfitMU.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  },
  {
    name: "Adi Pratama",
    role: "Fashion Blogger",
    message: "OutfitMU menjadi rekomendasi utama saya untuk siapa saja yang ingin meningkatkan koleksi pakaiannya dengan gaya yang trendy.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5
  }
];

const Testmoni = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="container h-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl leading-tight md:text-[35px] md:leading-[1.3] font-bold text-tertiary mb-4">Apa Kata Pelanggan Kami</h2>
              <p className="text-[15px] font-[400] text-gray-600 mb-6">
                Temukan mengapa pecinta fashion mempercayakan gaya mereka pada OutfitMU.
                Simak cerita pengalaman dan kesuksesan pelanggan kami.
              </p>
              <div className="flexStart">
                <button className="bg-secondary ring-1 ring-secondary text-white px-7 py-2.5 rounded-full">Baca Ulasan Lainnya</button>
              </div>
            </div>

            {/* Right Section - Scrollable Testimonials */}
            <div className="h-[70vh] overflow-y-auto pr-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-primary ml-4 p-6 rounded-xl  mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="text-lg md:text-[17px] mb-2 font-bold text-tertiary">{testimonial.name}</h4>
                      <p className="text-[15px] font-[400] text-gray-500">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[15px] font-[400] text-gray-600">{testimonial.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testmoni;