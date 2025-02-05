import React from 'react'
import PropTypes from 'prop-types'

const Tittle = ({title1, title2, titleStyles, title1Styles, paraStyles}) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h3 className={`${title1Styles} text-2xl leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold` }>
        { title1 }
        <span className='text-secondary !font-bold'>{ title2 }</span>
      </h3>
      <p className={`${paraStyles} leading-[1.3] text-sm text-gray-30` }>
        Temukan koleksi terbaru produk kami, dibuat dengan bahan berkualitas terbaik.
      </p>
    </div>
  )
}
Tittle.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
  titleStyles: PropTypes.string,
  title1Styles: PropTypes.string,
  paraStyles: PropTypes.string,
}

export default Tittle