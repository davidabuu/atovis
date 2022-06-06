import React from 'react';
import CatCard from './CatCard';
import { CardStyled } from './UserStyled';

const CategoryCard = () => {
  return (
    <CardStyled>
      <div className='desktop-card'>
        <h3 className='text-color'>Category Overview</h3>
        <div className='card'>
          <CatCard cat={'Mobile'} />
          <CatCard cat={'Furnitures'} />
        </div>
        <div className='card'>
          <CatCard cat={'Laptops'} />
          <CatCard cat={'For Women'} />
        </div>
        <div className='card'>
          <CatCard cat={'Electronics'} />
          <CatCard cat={'For men'} />
        </div>
        <div className='card'>
          <CatCard cat={'Accesscories'} />
          <CatCard cat={'Jewlery'} />
        </div>
      </div>
      <div className='mobile-card'>
        <h3 className='text-color'>Category Overview</h3>
        <div className='card'>
         {/* <div> <CatCard cat={'Mobile'} /></div> */}
          <CatCard cat={'Furnitures'} />
          <CatCard cat={'Laptops'} />
          <CatCard cat={'For Women'} />
        </div>
        <div className='card'>
          {/* <CatCard cat={'Electronics'} /> */}
          <CatCard cat={'For men'} />
          <CatCard cat={'Accesscories'} />
          <CatCard cat={'Jewlery'} />
        </div>
      </div>
    </CardStyled>
  );
};

export default CategoryCard;
