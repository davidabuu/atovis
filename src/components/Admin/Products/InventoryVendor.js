import { Table } from 'antd';
import React, { useState } from 'react';
import CatCard from '../../User/CatCard';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import LayoutSearch from '../LayoutSearch';
import SideNav from '../SideNav';
import { AdminInevStyle } from './AdminInevStyled';
const InventoryVendor = () => {
  const dataSource = [
    {
      key: '1',
      img: 'Img',
      name: 'Mike',
      description: '10 Downing Street',
      cat: 'Category 1',
      qty: 24,
      price: '300',
      status: 'status',
    },
    {
      key: '2',
      img: 'Img',
      name: 'John',

      description: '10 Downing Street',
      cat: 'Category 1',
      qty: 24,
      price: '300',
      status: 'status',
    },
    {
      key: '3',
      img: 'Img',
      name: 'John',

      description: '10 Downing Street',
      cat: 'Catrgory 1',

      qty: 24,
      price: '300',
      status: 'status',
    },
    {
      key: '4',
      img: 'Img',
      name: 'John',

      description: '10 Downing Street',
      cat: 'Category 1',
      qty: 24,
      price: '300',
      status: 'status',
    },
  ];

  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'cat',
      key: 'cat',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  const [nav, setNav] = useState(false);
  const SetNav = () => setNav(!nav);
  return (
    <UserWebLayout webtitle='Inventory'>
      <></>
      <LayoutSearch/>
      <AdminInevStyle>
        <div className='dash'>
        <SideNav />
        <div>
          <div className='table-div'>
            <div className='produc'>
              <div className=''>
                <h3 className='p'>Vendor Inventories</h3>
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
        </div>
      </AdminInevStyle>
    </UserWebLayout>
  );
};

export default InventoryVendor;
