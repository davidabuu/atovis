import React, { useEffect, useState } from 'react';
import { Button, Layout, Spin } from 'antd';
import { ProductDetailsStyled } from '../../../src/components/User/UserStyled';
import { useDispatch, useSelector } from 'react-redux';
import { singleProductInfo } from '../../../src/redux/User/Product/ProductDetailSlice';
import UserWebLayout from '../../../src/components/WebLayout/UserWebLayout';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const productRedux = useSelector((state) => state.singleProduct);
  const [loading, setLoading] = useState(false);
  const { productDetails, isLoading } = productRedux;
  useEffect(() => {
    //The id is to get a particular product based on the id
    const id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    dispatch(singleProductInfo(id));
    setLoading(false);
  }, [setLoading, dispatch]);
  return (
    <UserWebLayout webtitle='Product Detail'>
      <div>
        {isLoading ? (
          <div className='flexx' style={{ minHeight: '80vh' }}>
            <Spin />
            <p>Fetching Data</p>
          </div>
        ) : (
          <div>
            <h1 className='center text-color h'>PRODUCT OVERVIEW</h1>
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
                  <div className='qty'>+</div>
                  <div>{productDetails.data.quantity}</div>
                  <div className='qty'>-</div>
                </div>
                <Button className='cart-btn'>Add To Cart</Button>
              </div>
            </ProductDetailsStyled>
          </div>
        )}
      </div>
    </UserWebLayout>
  );
};

export default ProductDetails;
