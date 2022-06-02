import { useRouter } from 'next/router';
// import axios from 'axios';
// import React, {useEffect} from 'react';
// const SingleProductInfo = () => {
//   // const router = useRouter();
//   // console.log(router.query._id);
//   // const API_URL = process.env.APP_BASE_URL;
//   // useEffect(() => {
//   //   //Fetch All Products
//   //   const fetchAllProducts = async () => {
//   //     try {
//   //       const res = await axios.get(`${API_URL}/public/products/${router.query._id}`);

//   //       console.log(res.data.data);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   fetchAllProducts();
//   // }, []);
//   return <div></div>;
// };

// export default SingleProductInfo;
import React, { useEffect, useState } from 'react';
import { Button, Layout, Spin } from 'antd';
import { PlusOneOutlined } from '@material-ui/icons';
import { ProductDetailsStyled } from '../../../src/components/User/UserStyled';
import { useDispatch, useSelector } from 'react-redux';
import { singleProductInfo } from '../../../src/redux/User/Product/ProductDetailSlice';
const ProductDetails = () => {
  const router = useRouter();
  let id = router.query._id;
  const dispatch = useDispatch();
  const { productDetails, isError, isLoading, message } = useSelector(
    (state) => state.singleProduct
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }else {
    dispatch(singleProductInfo(id))
    };
  }, [isLoading, dispatch, id]);
  const { name, description, price, quantity, imageUrl } = productDetails;
  return (
    <>
      <div>
        {loading ? (
          <div className='flexx' style={{minHeight:'80vh'}}>
            <Spin />
            <p>Fetching Data</p>
          </div>
        ) : (
          <div>
            <h1 className='center text-color h'>PRODUCT OVERVIEW</h1>
            <ProductDetailsStyled>
              <img src={imageUrl} alt='Alt' />
              <div className='product-info'>
                <p>{`${name}${description}`}</p>
                <h1>${price}</h1>
                <br></br>
                <div className='quantity'>
                  <div className='qty'>
                    <PlusOneOutlined />
                  </div>
                  {quantity}
                  <div className='qty'>-</div>
                </div>
                <br></br>
                <Button className='btn'>Proceed To Checkout</Button>
                <Button className='btn'>CHECKOUT</Button>
              </div>
            </ProductDetailsStyled>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
