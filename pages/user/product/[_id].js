import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import BeautyStars from 'beauty-stars';
import { ProductDetailsStyled } from '../../../src/components/User/UserStyled';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { singleProductInfo } from '../../../src/redux/User/Product/ProductDetailSlice';
import UserWebLayout from '../../../src/components/WebLayout/UserWebLayout';
import {
  addToCart, decreaseItemFromCart
} from '../../../src/redux/User/Cart/CartSlice';
import Header from '../../../src/components/Header/Header';
import FooterDiv from '../../../src/components/Footer/FooterDiv';
import { Add, Remove } from '@material-ui/icons';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const productRedux = useSelector((state) => state.singleProduct);
  const [loading, setLoading] = useState(false);
  //const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  const { productDetails, isLoading } = productRedux;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState('');
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  useEffect(() => {

  const id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    dispatch(singleProductInfo(id));
    setLoading(false)
  }, [setLoading, dispatch]);
  const AddToCart = (data) => {
    dispatch(addToCart(data));
  };
  const decrease = (item) => {
    dispatch(decreaseItemFromCart(item));
  };
  const increase = (item) => {
    console.log('Hello');
    dispatch(addToCart(item));
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
             <div className='head'>
           <Link href='/user/landing-page'>
           <a>
           <p className='p'>&lt;</p>
           </a>
           </Link>
            <p>PRODUCT DETAIL</p>
          </div>
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
                  <h2>&#8358;{`${productDetails.data.price}`}</h2>
                </div>
                <BeautyStars
                              size='12px'
                              gap='7px'
                              activeColor='#ffaf38'
                              inactiveColor='#ddd'
                              value={5}
                            />
                <div className='quantity'>
                      <div className='qty' onClick={() => increase(productDetails.data)}>
                        <Add />
                      </div>
                      <div>{item.quantity}</div>
                      <div className='qty' onClick={() => decrease(productDetails.data)}>
                        <Remove />
                      </div>
                    </div>
                    <p className='price'>
                      Price: &#8358;{item.price * item.quantity}
                    </p>
                  </div>
                  </div>
                <div className='btn'>
                  <Button
                    onClick={() => AddToCart(productDetails.data)}
                    loading={loading}
                    className='btn-sign'>
                    {loading ? 'Adding' : 'Add To Cart'}
                  </Button>
                </div>
          </ProductDetailsStyled>
        )}
        <FooterDiv/>
      </ProductDetailsStyled>
    </UserWebLayout>
  );
};

export default ProductDetails;
