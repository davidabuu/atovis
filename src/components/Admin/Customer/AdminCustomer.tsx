import { Table } from 'antd';
import BeautyStars from 'beauty-stars';
import React from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { CustomerDataStyle } from './CustomerStyled'
const AdminCustomerFeedback = () => {
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
      <CustomerDataStyle>
        <h1>Customer Feedback</h1>
          <Table dataSource={dataSource} columns={columns} />
        </CustomerDataStyle>
    </UserWebLayout>
  );
};

export default AdminCustomerFeedback;

