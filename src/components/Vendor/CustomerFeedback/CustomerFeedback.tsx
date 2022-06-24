// import React from 'react';
// import UserWebLayout from '../../WebLayout/UserWebLayout';
// import Card from '../Card';
// import Header from '../Header';
// import { Table } from 'antd';
// import SideNav from '../SideNav';
// import VendorChart from '../VendorChart';
// import { DashboardStyled } from '../Dashboard/DashboardStyled';

// const Dashboard = () => {
//     const dataSource = [
//         {
//           key: '1',
//           name: 'Mike',
//           age: 32,
//           address: '10 Downing Street',
//         },
//         {
//           key: '2',
//           name: 'John',
//           age: 42,
//           address: '10 Downing Street',
//         },
//         {
//             key: '3',
//             name: 'John',
//             age: 42,
//             address: '10 Downing Street',
//           },
//           {
//             key: '4',
//             name: 'John',
//             age: 42,
//             address: '10 Downing Street',
//           },
//       ];
    
//       const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           key: 'name',
//         },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//           key: 'age',
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//           key: 'address',
//         },
//         {
//             title: 'Price',
//             dataIndex: 'price',
//             key: 'price',
//           },
//           {
//             title: 'Qty',
//             dataIndex: 'qty',
//             key: 'address',
//           },
//       ];
//   return (
//     <UserWebLayout webtitle='Dashboard'>
//       <DashboardStyled>
//         <SideNav />
//         <div className='header'>
//           <div className='head'>
//             <Header />
//           </div>
//           <div className='cards'>
//             <Card heading={'Products Sold'} number={'100'} />
//             <Card heading={'Incomplete Orders'} number={'100'} />
//             <Card heading={'Pending Orders'} number={'100'} />
//             <Card heading={'Cancelled Orders'} number={'100'} />
//           </div>
//           <Table dataSource={dataSource} columns={columns} />
//         </div>
//       </DashboardStyled>
//     </UserWebLayout>
//   );
// };

// export default Dashboard;
import React from 'react'

export const CustomerFeedback = () => {
  return (
    <div>CustomerFeedback</div>
  )
}
