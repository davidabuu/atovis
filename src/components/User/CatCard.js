
import React from 'react'

const CatCard = ({cat}) => {
  return (
    <div>
        <img src='/imh.png'alt='Alt' className='cat-img'/>
        <p className='text-color'>{cat}</p>
    </div>
  )
}

export default CatCard