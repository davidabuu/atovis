import React, { useState } from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
//import { DashboardStyled } from '../Dashboard/DashboardStyled';
import Header from '../Header';
import { Row, Col, Select, Button } from 'antd';
import SideNav from '../SideNav';
import OverView from './OverViewCard';
import CatCard from './CatCard';
import { Table } from 'antd';
import Link from 'next/link';
import { InevStyled } from './InevStyle';
import MobileNavHead from '../SignVendor/MobileHead';
import { Menu } from '@material-ui/icons';
import VendorSearch from '../SignVendor/VendorSearch';
const Inventory = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      qty: 4,
      price: 500,
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      qty: 4,
      price: 500,
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      qty: 4,
      price: 500,
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      qty: 4,
      price: 500,
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'radio',
    },
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
  ];
  const [nav, setNav] = useState(false);
  const SetNav = () => setNav(!nav);
  return (
    <UserWebLayout webtitle='Inventory'>
      <InevStyled>
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
          <div className='table-div'>
            <div className='produc'>
              <div className=''>
                <h3 className='p'>INVENTORY</h3>
                <p className='promote'>Promote Products</p>
               <Link href='/vendor/create-product'>
               <a>
               <p className='add'>Add Products</p>
               </a>
               </Link>
              </div>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </div>
            <div className='over-view'>
              <OverView />
              <div className='cat'>
                <CatCard />
              </div>
            </div>
          </div>
        </div>
      </InevStyled>
    </UserWebLayout>
  );
};

export default Inventory;
