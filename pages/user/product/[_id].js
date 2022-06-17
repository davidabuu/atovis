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
    console.log(productDetails);
  }, [setLoading, dispatch]);
  // const AddToCart = (cartItem) => {
  //   dispatch(addToCart(cartItem));
  // };
    var AddToCart = () => {
      dispatch(addToCart(productDetails));
    };
  // const onMinus = (cartItem) => {
  //   dispatch(decreaseItemFromCart(cartItem));
  // };
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
              <div>
                <img src={productDetails.data.imageUrl} alt='Alt' />
              </div>
              <div className='product-info'>
                <div className='p'>
                  <b>Product Name: </b>
                  {`${productDetails.data.name}`}
                </div>
                <div className='description p'>
                  <b>Description: </b>
                  {`${productDetails.data.description}`}
                </div>
                <div>
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
