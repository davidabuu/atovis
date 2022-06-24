import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { ProductDetailsStyled } from '../../../src/components/User/UserStyled';
import { useDispatch, useSelector } from 'react-redux';
import { singleProductInfo } from '../../../src/redux/User/Product/ProductDetailSlice';
import UserWebLayout from '../../../src/components/WebLayout/UserWebLayout';
import Layout from '../../../src/components/Layout/Layout';
import {
  addToCart,
  decreaseItemFromCart,
} from '../../../src/redux/User/Cart/CartSlice';
import Header from '../../../src/components/Header/Header';
import FooterDiv from '../../../src/components/Footer/FooterDiv';
// import { addToUserCart } from '../../../src/redux/User/Cart/CartSlice';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const productRedux = useSelector((state) => state.singleProduct);
  // const cartRedux = useSelector((state) => state.cartSlice);
  const [loading, setLoading] = useState(false);
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  const { productDetails, isLoading } = productRedux;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState('');
  let id;
  let quantity;
  useEffect(() => {
    //The id is to get a particular product based on the id
    id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    dispatch(singleProductInfo(id));
    setLoading(false);
    console.log(productDetails);
  }, [setLoading, dispatch]);
  // const AddToCart = (cartItem) => {
  //   dispatch(addToCart(cartItem));
  // };
  // const onMinus = (cartItem) => {
  //   dispatch(decreaseItemFromCart(cartItem));
  // };
  const AddToCart = (data) => {
    dispatch(addToCart(data));
  };
  return (
    <UserWebLayout webtitle='Product Detail'>
      <ProductDetailsStyled>
      <div className='img'>
          <img src='/logo2.png' alt='Log' />
        </div>
        <div className='header'>
        <Header/>
        </div>
        {isLoading ? (
          <div className='flexx' style={{ minHeight: '80vh' }}>
            <Spin />
            <p>Fetching Data</p>
          </div>
        ) : (
          <ProductDetailsStyled>
            <h1 className=''>PRODUCT OVERVIEW</h1>
            <div className='product-info'>
              <div>
                <img src={productDetails.data.imageUrl} alt='ProductIMage' />
              </div>
              <div className='product-details'>
                <div className='product-name'>
                  <b>{`${productDetails.data.name}`}</b>
                </div>
                <div className='description'>
                  <b>Beautiful and attractive product</b>
                </div>
                <div>
                  <h2>{`${productDetails.data.price}`}</h2>
                </div>
                <div className='btn'>
                  <Button
                    onClick={() => AddToCart(productDetails.data)}
                    loading={loading}
                    className='btn-sign'>
                    {loading ? 'Adding' : 'Add To Cart'}
                  </Button>
                </div>
              </div>
            </div>
          </ProductDetailsStyled>
        )}
        <FooterDiv/>
      </ProductDetailsStyled>
    </UserWebLayout>
  );
};

export default ProductDetails;
