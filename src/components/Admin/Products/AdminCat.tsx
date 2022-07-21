import { Table } from 'antd';
import React from 'react';
import { CatStyle } from '../../Vendor/Inventory/InevStyle';
const AdminCat = () => {
  const dataSource = [
    {
      key: '1',
      category: 'Category 1',
      products: '344',
      quantity: 32,
    },
    {
      key: '2',
      category: 'John',
      products: '344',
      quantity: 42,
    },
    {
      key: '3',
      category: 'John',
      products: '344',
      quantity: 42,
    },
  ];
  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];
  return (
    <CatStyle>
      <h2 style={{ color: 'var(--primary-color)' }}>Categories</h2>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </CatStyle>
  );
};

export default AdminCat;
