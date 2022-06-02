import { Button, Row, Col, Spin } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { RawProuducts } from './RawProduct';
import BeautyStars from 'beauty-stars';
import { FeaturedProductStyled } from './UserStyled';
import axios from 'axios';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Link from 'next/link';
const FeaturedProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
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
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);
  console.log(product);
  return (
    <FeaturedProductStyled data-aos='zoom-in'>
      {loading ? (
        <div className='flexx'>
          <Spin />
          <br></br>
          <p>Fetching Products</p>
        </div>
      ) : (
        <div>
          <div className='feature'>
            <p>FeaturedProduct</p>
            <p className='text-color'>See All</p>
          </div>
          <div className='ft'>
            <Row gutter={2} justify='space-around'>
              {product.map(({ _id, name, price, imageUrl }) => (
                <Row gutter={12} key={_id}>
                  <Col xl={6} lg={6} sm={12} xs={6}>
                    <Link href={`/user/product/${_id}`}>
                      <div className='ft product-card'>
                        <img src={imageUrl} className='img' alt='Home' />
                        <div>
                          <p>{name}</p>
                          <p>{price}</p>
                          <BeautyStars
                            size='12px'
                            gap='7px'
                            activeColor='#ffaf38'
                            inactiveColor='#ddd'
                            value={5}
                          />
                        </div>
                        <div>
                          <Button className='but-ton'>Add To Cart</Button>
                        </div>
                      </div>
                    </Link>
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
