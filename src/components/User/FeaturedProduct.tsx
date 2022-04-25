import { Button, Row, Col } from 'antd';
import React from 'react';
import { RatingIcon } from 'semantic-ui-react';
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
                    <RatingIcon selected />
                    <RatingIcon selected />
                    <RatingIcon selected />
                  </div>
                </div>
                <Button>Add To Cart</Button>
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
