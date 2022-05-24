import { Button, Row, Col } from 'antd';
import BeautyStars from 'beauty-stars';
import React from 'react';
import { useEffect } from 'react';
import { RawProuducts } from './RawProduct';
import { FeaturedProductStyled } from './UserStyled';
import 'aos/dist/aos.css';
import Aos from 'aos';
const FeaturedProduct = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <FeaturedProductStyled>
      <div className='feature'>
        <p>FeaturedProduct</p>
        <p className='text-color'>See All</p>
      </div>
      <div className='ft'>
        <Row gutter={2} justify='space-around'>
          {RawProuducts.map(({ id, info, price }) => (
            <Row gutter={12} >
              <Col key={id} xl={6} lg={6} sm={12} xs={6}>
                <div className='ft'>
                  <img src='/imh.png' className='.img' alt='Home' />
                  <p>{info}</p>
                  <div>
                    <div>
                      <p>{price}</p>
                      <div>
                        <BeautyStars
                          size='12px'
                          gap='7px'
                          activeColor='#ffaf38'
                          inactiveColor='#ddd'
                          value={5}
                        />
                      </div>
                    </div>
                    <Button className='but-ton'>Add To Cart</Button>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Row>
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
