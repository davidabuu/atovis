import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import Card from '../Card';
import Header from '../Header';
import { Table } from 'antd';
import SideNav from '../SideNav';
import { DashboardStyled } from '../Dashboard/DashboardStyled';
import BeautyStars from 'beauty-stars';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';

const CustomerFeedback = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
          price:<div>&#8358;400</div>,
          qty: '5',
          ratings:<div><BeautyStars value={5}/></div>,
          comments:''
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
          price:<div>&#8358;400</div>,
          qty: '5',
          ratings:<div><BeautyStars value={5}/></div>,
          comments:''
        },
        {
            key: '3',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            price:<div>&#8358;400</div>,
          qty: '5',
          ratings:<div><BeautyStars value={5}/></div>,
          comments:''
          },
          {
            key: '4',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            price:<div>&#8358;400</div>,
          qty: '5',
          ratings:<div><BeautyStars value={5}/></div>,
          comments:''
          },
      ];
    
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'address',
          },
          {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
          },
      ];
  return (
    <UserWebLayout webtitle='Customer FeedBack'>
      <div>
      <div className='desktop-head'>
          <SideNav />
        </div>
          <div className='desktop-head'>
            <Header />
          </div>
          <div className='mobile-head'>
            <MobileNavHead />
            <VendorSearch />
          </div>
          <div className='cards'>
            <Card heading={'Products Sold'} number={'100'} />
            <Card heading={'Incomplete Orders'} number={'100'} />
            <Card heading={'Pending Orders'} number={'100'} />
            <Card heading={'Cancelled Orders'} number={'100'} />
          </div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
    </UserWebLayout>
  );
};

export default CustomerFeedback;

