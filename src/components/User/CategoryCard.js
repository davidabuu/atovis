import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { getAllCategory } from '../../redux/Category/categorySlice';
import CatCard from './CatCard';
import { CardStyled } from './UserStyled';

const CategoryCard = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const getAllCategories = useSelector((state) => state.categorySlice)
  console.log(getAllCategories)
  //const {category} = getALLCategories
  useEffect(() => {
    dispatch(getAllCategory())
    setLoading(false)
  }, [dispatch, setLoading])
  return (
    <CardStyled>
  
    </CardStyled>
  );
};

export default CategoryCard;
