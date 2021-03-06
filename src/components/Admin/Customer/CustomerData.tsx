import { Table } from 'antd';
import BeautyStars from 'beauty-stars';
import React from 'react';
import { CustomerDataStyle } from './CustomerStyled'
const AdminCustomerData
 = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          gender:'Male',
          state:'Lagos',
          city:'Apo',
         orders:'23'
        },
        {
          key: '2',
          name: 'John',
          gender:'Male',
          state:'Lagos',
          city:'Apo',
         orders:'23'
        },
        {
            key: '3',
            name: 'John',
            gender:'Male',
            state:'Lagos',
            city:'Apo',
         orders:'23'
          },
          {
            key: '4',
            name: 'John',
            gender:'Male',
          state:'Lagos',
          city:'Apo',
         orders:'23'
          },
      ];
    
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
          },
         
          {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
          },
      ];
  return (
    
      <CustomerDataStyle>
        <h1>Customers Data</h1>
          <Table dataSource={dataSource} columns={columns} />
        </CustomerDataStyle>
  );
};

export default AdminCustomerData;

