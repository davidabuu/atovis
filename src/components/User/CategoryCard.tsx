import React from 'react'
import CatCard from './CatCard'
import { CardStyled } from './UserStyled'

const CategoryCard = () => {
  return (
    <CardStyled>
        <h3 className='text-color'>Category Overview</h3>
        <div className='card'>
            <CatCard cat={'Mobile'}/>
            <CatCard cat={'Furnitures'}/>
        </div>
        <div className='card'>
            <CatCard cat={'Laptops'}/>
            <CatCard cat={'For Women'}/>
        </div>
        <div className='card'>
            <CatCard cat={'Electronics'}/>
            <CatCard cat={'For men'}/>
        </div>
        <div className='card'>
            <CatCard cat={'Accesscories'}/>
            <CatCard cat={'Jewlery'}/>
        </div>
    </CardStyled>
  )
}

export default CategoryCard