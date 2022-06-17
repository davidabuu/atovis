import { Button, Row, Col, Spin } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import BeautyStars from 'beauty-stars';
import { FeaturedProductStyled } from './UserStyled';
import axios from 'axios';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Link from 'next/link';
import { storeInLocalStorage } from '../utils/usableFunction';
import { addToCart, clearCart } from '../../redux/User/Cart/CartSlice';
import { useDispatch } from 'react-redux';
const FeaturedProduct = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_URL = process.env.APP_BASE_URL;
  useEffect(() => {
    Aos.init({ duration: 300 });
    //Fetch All Products
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/public/products`);
        setProduct(res.data.data);
        console.log(res.data.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);
  const onClick = (_id) => {
    storeInLocalStorage('id', _id);
  };
  const AddToCart = (data) => {
    console.log(data);
    dispatch(addToCart(data));
  };
  const clear = () => {
    dispatch(clearCart());
  };
  console.log(product);
  return (
    <FeaturedProductStyled data-aos='zoom-in' data-aos-once='true'>
      {loading ? (
        <div className='flexx'>
          <Spin />
          <p>Fetching Products</p>
        </div>
      ) : error ? (
        <div className='flexx'>
          <h1>Error: Something went wrong</h1>
          <Button onClick={() => window.location.reload()}>Refresh</Button>
        </div>
      ) : (
        <div>
          <div className='feature'>
            <p onClick={clear}>FeaturedProduct</p>
            <p className='text-color'>See All</p>
          </div>
          <div className='ft'>
            <Row gutter={2} justify='space-around'>
              {product.map((data) => (
                <Row gutter={12} key={data._id}>
                  <Col xl={6} lg={6} sm={12} xs={6}>
                    <div className='ft product-card'>
                      <Link
                        href={`/user/product/${data._id}`}
                        onClick={onClick(data._id)}>
                        <a style={{color:'#333'}}>
                          <img src={data.imageUrl} className='img' alt='Home' />
                          <div>
                            <p>{data.name}</p>
                            <p>{data.price}</p>
                            <BeautyStars
                              size='12px'
                              gap='7px'
                              activeColor='#ffaf38'
                              inactiveColor='#ddd'
                              value={5}
                            />
                          </div>
                        </a>
                      </Link>
                      <div>
                        <Button
                          onClick={() => AddToCart(data)}
                          className='but-ton'>
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              ))}
            </Row>
          </div>
        </div>
      )}
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
