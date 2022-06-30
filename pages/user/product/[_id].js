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
  const { productDetails, isLoading, isError } = productRedux;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState('');
  const { cartItems, totalAmount } = useSelector((state) => state.cartSlice);
  const [qty, setQty] = useState(0)
  let id;
  //console.log(productDetails)
  useEffect(() => {

  id = (JSON.parse(localStorage.getItem('id')));
    dispatch(singleProductInfo(id));
    console.log(productDetails);
    setLoading(false)
  }, [setLoading, dispatch]);
  const AddToCart = (data) => {
    setQty(qty+ 1)
    dispatch(addToCart(data));
  };
  const decrease = (item) => {
    console.log('Holaa')
    setQty(qty - 1)
    if(qty <= 0){
      setQty(0)
    }
    dispatch(decreaseItemFromCart(item));
  };
  const increase = (item) => {
    setQty(qty + 1)
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
          isError ? <div className='error'>
            <h2>Errror</h2>
            <Button onClick={() => window.location.reload()}>REFRESH OR RELOAD</Button>
          </div> :
          <ProductDetailsStyled>
             <div className='head'>
           <Link href='/user/landing-page'>
           <a style={{color:'#fff'}}>
           <p className='p'>&lt;</p>
           </a>
           </Link>
            <p>PRODUCT DETAILS</p>
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
                      <div>{qty}</div>
                      <div className='qty' onClick={() => decrease(productDetails.data)}>
                        <Remove />
                      </div>
                    </div>
                    <p className='price'>
                      Price: &#8358;{productDetails.data.price * productDetails.data.quantity}
                    </p>
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
                  <FooterDiv/>
          </ProductDetailsStyled>
        )}
      
     
      </ProductDetailsStyled>
    </UserWebLayout>
  );
};

export default ProductDetails;
