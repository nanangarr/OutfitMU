import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStarHalfStroke, FaStar, FaHeart, FaTruckFast } from 'react-icons/fa6'
import { TbShoppingBagPlus } from 'react-icons/tb'
import ProductDescription from '../component/product/ProductDescription'
import ProductFeatures from '../component/product/ProductFeatures'
import RelatedProducts from '../component/product/RelatedProducts'
import Footer from '../component/Footer'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)


  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, products])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    if (!size) {
      toast.error('Please select a size first!');
      return;
    }
    addToCart(product._id, size, quantity);
  };

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='container mx-auto px-4 mt-3'>
        {/* product data */}
        <div className='flex gap-2 flex-col xl:flex-row bg-white p-6 rounded-2xl mb-16'>
          {/* product image */}
          <div className='flex gap-4 xl:w-[500px]'>
            {/* thumbnails */}
            <div className='flex flex-col gap-3'>
              {product.image.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => setImage(item)} 
                  className={`cursor-pointer w-16 h-16 rounded-lg border-2 overflow-hidden ${
                    image === item ? 'border-orange-400' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={item} 
                    alt='thumbnail' 
                    className='rounded-lg bg-gray-10'
                  />
                </div>
              ))}
            </div>
            {/* main image */}
            <div className='flex-1 aspect-square'>
              <img 
                src={image} 
                alt='main-product' 
                className='w-full h-full rounded-lg'
              />
            </div>
          </div>

          {/* product details */}
          <div className='flex-1 xl:pl-8'>
            <div className='space-y-4'>
              <h3 className='text-2xl md:text-3xl font-bold'>{product.name}</h3>
              
              {/* rating */}
              <div className='flex items-center gap-x-2'>
                <div className='flex text-orange-500'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className='text-sm font-medium'>(122)</span>
              </div>

              <h4 className='text-xl font-bold'>{currency}{product.price}</h4>
              <p className='text-gray-600'>{product.description}</p>

              <div className='flex flex-col gap-4 my-4 mb-5'>
                <div className='flex gap-2'>
                  {/* size */}
                  {[...product.sizes].sort((a, b) => {
                    const order = ['S', 'M', 'L', 'XL', 'XXL']
                    return order.indexOf(a) - order.indexOf(b)
                  }).map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSize(item)} 
                      className={`border rounded-full p-1 h-8 w-8 ${
                        size === item ? 'bg-orange-400 text-white' : ''
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantity("dec")}
                    className="p-2 rounded-full border hover:bg-gray-100"
                  >
                    <IoMdRemove />
                  </button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantity("inc")}
                    className="p-2 rounded-full border hover:bg-gray-100"
                  >
                    <IoMdAdd />
                  </button>
                </div>
              </div>

              {/* button add card */}
              <div className='flex items-center gap-x-4'>
                <button 
                  className='text-[14px] font-[500] bg-secondary ring-1 ring-secondary text-white px-7 py-2.5 rounded-lg'
                >
                  Beli Sekarang
                </button>
                <TbShoppingBagPlus 
                  className='text-orange-400 cursor-pointer' 
                  onClick={handleAddToCart}
                />
                <button><FaHeart/></button>
              </div>
              <div className='flex items-center gap-x-2 mt-4'>
                <FaTruckFast className='text-lg'/>
                <span className='text-[14px] font-[500] '>Free Delivery on orders over $500</span>
              </div>
              <hr className='my-3 w-2/3'/>
            </div>
          </div>
        </div>

        {/* product description */}
        <ProductDescription/>
        <ProductFeatures />
        <RelatedProducts category={product.category} subCategory={product.subCategory}/>
      </div>

      <Footer />
    </div>
  )
}
export default Product