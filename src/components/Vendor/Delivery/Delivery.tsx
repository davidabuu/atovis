import { Radio } from 'antd';
import React from 'react';
import Header from '../Header';
import SideNav from '../SideNav';
import MobileNavHead from '../SignVendor/MobileHead';
import MobileHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
import { DeliveryCss } from './DeliveryStyle';
import Orders from './Orders';

const Delivery = () => {
  const logistic = [
    {
      id: 1,
      img: '/logo.png',
      name: 'Logistic Company 1',
      description: 'GIG Logistics forever',
    },
    {
      id: 2,
      img: '/logo.png',
      name: 'Logistic Company 1',
      description: 'GIG Logistics forever',
    },
    {
      id: 3,
      img: '/logo.png',
      name: 'Logistic Company 1',
      description: 'GIG Logistics forever',
    },
    {
      id: 4,
      img: '/logo.png',
      name: 'Logistic Company 1',
      description: 'GIG Logistics forever',
    },
  ];
  return (
    <DeliveryCss>
       <div className='desktop-head'>
          <SideNav />
        </div>
        <div className='head'>
          <div className='desktop-head'>
            <Header />
          </div>
          <div className='mobile-head'>
            <MobileNavHead />
            <VendorSearch />
          </div>
          </div>
      <div>
        <img src='/log.png' alt='Logistics'/>
      </div>
        <div className='logistic'>
          <h2>Select a Logistic Partner</h2>
          {logistic.map((item) => (
            <div className='item' key={item.id}>
              <img src={item.img} alt='Img' />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <Radio></Radio>
            </div>
          ))}
          <div className='order-div'>
            <Orders />
          </div>
        </div>
    </DeliveryCss>
  );
};

export default Delivery;
