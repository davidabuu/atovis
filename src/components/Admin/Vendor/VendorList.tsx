import { ExitToAppSharp } from '@material-ui/icons';
import { Table } from 'antd';
import BeautyStars from 'beauty-stars';
import React from 'react';
import LayoutSearch from '../LayoutSearch';
import SideNav from '../SideNav';
const AdminVendorList = () => {
  const dataSource = [
    {
      key: '1',
      vendor: 'Mike',
      category: 'Male',
      products: 'Lagos',
      merchandise: 'Apo',
      sales: '23',
      rating: <BeautyStars value={4} />,
      comments: '03',
    },
    {
      key: '2',
      vendor: 'John',
      category: 'Male',
      products: 'Lagos',
      merchandise: 'Apo',
      sales: '23',
      rating: <BeautyStars value={4} />,
      comments: '03',
    },
    {
      key: '3',
      vendor: 'John',
      category: 'Male',
      products: 'Lagos',
      merchandise: 'Apo',
      sales: '23',
      rating: <BeautyStars value={4} />,
      comments: '03',
    },
    {
      key: '4',
      vendor: 'John',
      category: 'Male',
      products: 'Lagos',
      merchandise: 'Apo',
      sales: '23',
      rating: <BeautyStars value={4} />,
      comments: '03',
    },
  ];

  const columns = [
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Categories',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Merchandise',
      dataIndex: 'merchandise',
      key: 'merchandise',
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },

    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];
  return (
    <div>
      <div className='dash'>
        <LayoutSearch />
        <SideNav />
        <h1>Vendor List</h1>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default AdminVendorList;
