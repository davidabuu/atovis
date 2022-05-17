import { Button, Row, Col } from 'antd';
import BeautyStars from 'beauty-stars';
import React from 'react';
import { RawProuducts } from './RawProduct';
import { FeaturedProductStyled } from './UserStyled';

const FeaturedProduct = () => {
  return (
    <FeaturedProductStyled>
      <div className='feature'>
        <p>FeaturedProduct</p>
        <p className='text-color'>See All</p>
      </div>
      <div className='ft'>
        <Row gutter={25}>
          {RawProuducts.map(({ id, info, price }) => (
            <Col key={id} xs={12} xl={6} lg={6}>
              <div className='ft'>
                <img src='/imh.png' className='.img' alt='Home' />
                <p>{info}</p>
                <div className='center'>
                <div>
                  <p>{price}</p>
                  <div>
                  <BeautyStars
                    size="12px"
                    gap="7px"
                    activeColor="#ffaf38"
                    inactiveColor="#ddd"
                    value={5}
                />
                  </div>
                </div>
                <Button className='buttons'>Add To Cart</Button>
              </div>
                </div>
            </Col>
          ))}
        </Row>
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
