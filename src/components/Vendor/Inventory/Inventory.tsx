// import React from 'react';
// import UserWebLayout from '../../WebLayout/UserWebLayout';
// import { DashboardStyled } from '../Dashboard/DashboardStyled';
// import Header from '../Header';
// import { Row, Col, Select, Button } from 'antd';
// import SideNav from '../SideNav';
// import { Table } from 'antd';
// const Dashboard = () => {
//   const dataSource = [
//     {
//       key: '1',
//       name: 'Mike',
//       age: 32,
//       address: '10 Downing Street',
//     },
//     {
//       key: '2',
//       name: 'John',
//       age: 42,
//       address: '10 Downing Street',
//     },
//     {
//         key: '3',
//         name: 'John',
//         age: 42,
//         address: '10 Downing Street',
//       },
//       {
//         key: '4',
//         name: 'John',
//         age: 42,
//         address: '10 Downing Street',
//       },
//   ];

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//       },
//       {
//         title: 'Qty',
//         dataIndex: 'qty',
//         key: 'address',
//       },
//   ];
//   return (
//     <UserWebLayout webtitle='Inventory'>
//       <DashboardStyled>
//         <SideNav />
//         <div className='header'>
//           <div className='head'>
//             <Header />
//           </div>
     
//         <div style={{marginTop:'15px'}}>
//           <Row justify='space-between'>
//             <Col xs={12} xl={12} lg={12}>
//               <p>INVENTORY</p>
//             </Col>
//             <Col xs={6} xl={6} lg={6} style={{ textAlign: 'right' }}>
//               <Button>ALL PRODUCTS</Button>
//             </Col>
//           </Row>
//           <Table dataSource={dataSource} columns={columns} />
//         </div>
//         </div>
//       </DashboardStyled>
//     </UserWebLayout>
//   );
// };

// export default Dashboard;
import React from 'react'

const Inventory = () => {
  return (
    <div>Inventory</div>
  )
}

export default Inventory