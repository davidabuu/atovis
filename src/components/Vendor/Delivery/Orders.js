import { Button, Row } from 'antd';
import React from 'react';
import { OrderStyled } from './DeliveryStyle';

const Orders = () => {
  const fakeOrders = [
    {
      id: 1,
      name: 'Sony VR HeadSet',
      category: 'Accesories',
      address: '12. Bislha Close, lorem lorem lorem',
    },
    {
      id: 2,
      name: 'Sony VR HeadSet',
      category: 'Accesories',
      address: '12. Bislha Close, lorem lorem lorem',
    },
    {
      id: 3,
      name: 'Sony VR HeadSet',
      category: 'Accesories',
      address: '12. Bislha Close, lorem lorem lorem',
    },
    {
      id: 4,
      name: 'Sony VR HeadSet',
      category: 'Accesories',
      address: '12. Bislha Close, lorem lorem lorem',
    },
    {
      id: 5,
      name: 'Sony VR HeadSet',
      category: 'Accesories',
      address: '12. Bislha Close, lorem lorem lorem',
    },
  ];
  return (
    <OrderStyled>
      <div className='vendor-orders'>
        <h2>Active Orders</h2>
        <select defaultValue={'All'}>
          <option>All</option>
          <option>All</option>
          <option>All</option>
        </select>
      </div>
      <div>
        {fakeOrders.map((item) => (
          <div className='active-orders' key={item.id}>
            <Row>
              <div className='orders'>
                <div className='id'>
                  <h3>ID:{item.id}</h3>
                  <div>
                    <Button>Shipped</Button>
                  </div>
                </div>
                <p>{item.address}</p>
              </div>
            </Row>
          </div>
        ))}
      </div>
    </OrderStyled>
  );
};

export default Orders;
