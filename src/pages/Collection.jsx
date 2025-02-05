import React, { useState, useContext, useEffect } from 'react'
import ShowSearch from '../component/Collection/ShowSearch'
import { ShopContext } from '../context/ShopContext'
import Item from '../component/Home/Item'
import Footer from '../component/Footer'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)

  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const toggleFilter = (value, setState) => {
    setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
  }

  // handle filter options
  const applyFilter = () => {
    let filtered = [...products]

    // Search filter
    if (search.trim()) {
        filtered = filtered.filter((product) => 
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase()) ||
            product.subCategory.toLowerCase().includes(search.toLowerCase())
        )
    }

    // Category filter
    if (category.length) {
        filtered = filtered.filter((product) => category.includes(product.category))
    }

    // SubCategory filter
    if (subCategory.length) {
        filtered = filtered.filter((product) => subCategory.includes(product.subCategory))
    }

    return filtered
  }

  // handle sort options
  const applySort = (productsList) => {
    if (sortType === 'asc') {
      return productsList.sort((a, b) => a.price - b.price)
    } else if (sortType === 'desc') {
      return productsList.sort((a, b) => b.price - a.price)
    } else {
      return productsList
    }
  }

  // handle price range
  const applyPriceRange = (productsList) => {
    let filtered = [...productsList];

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= Number(maxPrice));
    }

    return filtered;
  }

  useEffect(() => {
    let filtered = applyFilter()
    filtered = applySort(filtered)
    filtered = applyPriceRange(filtered)
    setFilteredProducts(filtered)
    setCurrentPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory, sortType, search, minPrice, maxPrice, products, showSearch])

  // handle pagination
  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  return (
    <div className='container !px-0'>
      <div className='flex flex-col sm:flex-row gap-5 mb-16'>
        
        <div className='min-w-72 bg-secondary p-4 pt-8 pl-6 lg:pl-12 rounded-r-xl'>
          {/* Search */}
          <ShowSearch />

          {/* Category */}
          <div className='px-4 py-3 mt-4 bg-white rounded-xl'>
            <h5 className='text-[14px] md:text-[15px] mb-4 font-bold'>Kategori</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Pria", "Wanita", "Anak-anak"].map((category) => (
                <label key={category} className='flex items-center gap-3 text-[14px] font-[400] text-gray-600 cursor-pointer hover:text-gray-800'>
                  <div className="relative">
                    <input
                      onChange={(e) => toggleFilter(e.target.value, setCategory)}
                      type="checkbox"
                      value={category}
                      className='w-4 h-4 border-2 border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer'
                    />
                    <div className="absolute top-[2px] left-[2px] opacity-0 check-mark">✓</div>
                  </div>
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Sub Category */}
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='text-[14px] md:text-[15px] mb-4 font-bold'>Tipe</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Atasan", "Bawahan", "Pakaian Musim Dingin"].map((category) => (
                <label key={category} className='flex items-center gap-3 text-[14px] font-[400] text-gray-600 cursor-pointer hover:text-gray-800'>
                  <div className="relative">
                    <input
                      onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                      type="checkbox"
                      value={category}
                      className='w-4 h-4 border-2 border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer'
                    />
                    <div className="absolute top-[2px] left-[2px] opacity-0 check-mark">✓</div>
                  </div>
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='text-[14px] md:text-[15px] mb-4 font-bold '>Urutkan Berdasarkan</h5>
            <select onChange={(e) => setSortType(e.target.value)} className='w-full border-none outline-none bg-white text-sm'>
              <option value="relevant">Relevan</option>
              <option value="asc">Rendah</option>
              <option value="desc">Tiggi</option>
            </select>
          </div>

          {/* Price Range */}
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='text-[14px] md:text-[15px] mb-4 font-bold'>Rentang Harga</h5>
            <div className='flex items-center gap-2'>
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className='w-24 p-2 text-sm border rounded'
                min="0"
              />
              <span className='text-gray-500'>-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className='w-24 p-2 text-sm border rounded'
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='bg-primary p-4 rounded-l-xl flex-1'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {getPaginatedProducts().length > 0 ? getPaginatedProducts().map((product) => (
              <Item key={product._id} product={product} />
            )) : (
              <p className='uppercase leading-[1.3] text-2xl text-black font-bold'>No products found for selected</p>
            )}
          </div>

          {/* Pagination */}
          <div className='flexCenter flex-wrap gap-4 mt-14 mb-10'>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className={`${currentPage === 1 && 'opacity-50 cursor-not-allowed'} text-[14px] font-[500] bg-secondary ring-1 ring-primary !py-1 !px-3 rounded-full transition-all duration-300`}>Sebelumnya</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => setCurrentPage(index + 1)} className={`${currentPage === index + 1 ? 'bg-secondary text-white' : 'text-black'} px-3 py-1 rounded-full`}>{index + 1}</button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className={`${currentPage === totalPages && 'opacity-50 cursor-not-allowed'} text-[14px] font-[500] bg-secondary ring-1 ring-primary !py-1 !px-3 rounded-full transition-all duration-300`}>Selanjutnya</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Collection