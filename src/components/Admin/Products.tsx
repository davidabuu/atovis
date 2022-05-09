import React from 'react';
import { Table } from 'antd';
import UserWebLayout from '../WebLayout/UserWebLayout';
import { DashboardStyled } from './Dashboard/DashboardStyled';
import SideNav from './SideNav';

const Products = () => {
    const dataSource = [
        {
          key: '1',
          img: 'Product Img',
          name: 'Product Name',
          description: 'Best product description',
          address: '10 Downing Street',
          qty: 24,
          price:'$299',
          status: 'Status'
        },
        {
          key: '2',
          name: 'Product Name',
          description: 'Best product description',
          address: '10 Downing Street',
          qty: 24,
          price:'$299',
          status: 'Status'
        },
        {
            key: '3',
          
            name: 'Product Name',
          description: 'Best product description',
          address: '10 Downing Street',
          qty: 24,
          price:'$299',
          status: 'Status'
          },
          {
            key: '4',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '12',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '5',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
           {
            key: '6',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '7',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '8',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '9',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '10',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
          {
            key: '11',
            
            name: 'Product Name',
            description: 'Best product description',
            address: '10 Downing Street',
            qty: 24,
            price:'$299',
            status: 'Status'
          },
      ];
    
      const columns = [
        {
          title: 'Product Image',
          dataIndex: 'img',
          key: 'img',
        },
        {
          title: 'Product Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Qty',
            dataIndex: 'quantity',
            key: 'qty',
          },
          {
              title:'Status',
              dataIndex:'status',
              key:'status'
          }
      ];
  return (
    <UserWebLayout webtitle='Inventory'>
      <DashboardStyled>
        <SideNav />
          <Table dataSource={dataSource} columns={columns} />
      </DashboardStyled>
    </UserWebLayout>
  );
};

export default Products;
