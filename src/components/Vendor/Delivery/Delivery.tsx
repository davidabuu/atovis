import { Radio } from 'antd'
import React from 'react'
import Header from '../Header'
import SideNav from '../SideNav'
import MobileHead from '../SignVendor/MobileHead'
import { DeliveryCss } from './DeliveryStyle'

const Delivery = () => {
  const logistic = [
    {
      id:1,
      img: '/logo.png',
      name:'Logistic Company 1',
      description:'GIG Logistics forever'
    },
    {
      id:2,
      img: '/logo.png',
      name:'Logistic Company 1',
      description:'GIG Logistics forever'
    },
    {
      id:3,
      img: '/logo.png',
      name:'Logistic Company 1',
      description:'GIG Logistics forever'
    },
    {
      id:4,
      img: '/logo.png',
      name:'Logistic Company 1',
      description:'GIG Logistics forever'
    }
  ]
  return (
    <DeliveryCss>
          <SideNav />
        <div className='desktop-head'>
        <Header />
        </div>
          <div className='mobile-head'>
            <MobileHead/>
          </div>
          <div className='logistic'>
            <h2>Select a Logistic Partner</h2>
            {
              logistic.map((item) => (
                <div className='item' key={item.id}>
                  <img src={item.img} alt='Img'/>
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Radio></Radio>
                </div>
              ))
            }
          </div>
    </DeliveryCss>
  )
}

export default Delivery