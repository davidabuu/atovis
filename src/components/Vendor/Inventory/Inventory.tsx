import React from 'react';
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
const Dashboard = () => {
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
      title:'',
      dataIndex:'radio'
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
  return (
    <UserWebLayout webtitle='Inventory'>
      <InevStyled>
        <SideNav />
        <div>
          <Header />
          <div className='table-div'>
            <div className='product'>
              <Row justify='space-between'>
                <Col xs={12} xl={12} lg={12}>
                  <p className='p'>INVENTORY</p>
                </Col>
                <p className='promote'>Promote Products</p>
                <p className='add'>Add Products</p>
              </Row>
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

export default Dashboard;
