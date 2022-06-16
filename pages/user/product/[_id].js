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
  }, [setLoading, dispatch]);
  const AddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const onAdd = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const onMinus = (cartItem) => {
    dispatch(decreaseItemFromCart(cartItem));
  };
  return (
    <UserWebLayout webtitle='Product Detail'>
      <Layout>
        {isLoading ? (
          <div className='flexx' style={{ minHeight: '80vh' }}>
            <Spin />
            <p>Fetching Data</p>
          </div>
        ) : (
          <div>
            <h1 className='center text-color product-overview'>
              PRODUCT OVERVIEW
            </h1>
            <ProductDetailsStyled>
              <img src={productDetails.data.imageUrl} alt='Alt' />
              <div className='product-info'>
                <p>
                  <b>Product Name: </b>
                  {`${productDetails.data.name}`}
                </p>
                <p>
                  <b>Description: </b>
                  {`${productDetails.data.description}`}
                </p>
                <p>
                  <b>Quantity Left: </b>
                  {` ${productDetails.data.quantityLeft}`}
                </p>
                <h2>Price: &#8358;{productDetails.data.price}</h2>

                <br></br>
                <div className='quantity'>
                  <div className='qty' onClick={onAdd(cartItems)}>
                    +
                  </div>
                  <div>{count}</div>
                  <div className='qty' onClick={onMinus(cartItems)}>
                    -
                  </div>
                </div>
                <div className='center'>
                  {' '}
                  <Button
                    onClick={AddToCart}
                    className='cart-btn'
                    loading={loading}>
                    {loading ? 'Adding' : 'Add To Cart'}
                  </Button>
                </div>
              </div>
            </ProductDetailsStyled>
          </div>
        )}
      </Layout>
    </UserWebLayout>
  );
};

export default ProductDetails;
