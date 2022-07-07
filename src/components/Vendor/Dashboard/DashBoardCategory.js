import React from 'react';
import {CatStyleDash} from './DashboardStyled'
const DashBoardCategory = () => {
  const fakeCat = [
    {
      id: 1,
      color: 'red',
      cat: 'Category 1',
    },
    {
        id: 2,
        color: 'orange',
        cat: 'Category 2',
      },
      {
        id: 3,
        color: 'lightblue',
        cat: 'Category 3',
      },
      {
        id: 4,
        color: 'blue',
        cat: 'Category 4',
      },
      {
        id: 5,
        color: 'green',
        cat: 'Category 5',
      },
      {
        id: 6,
        color: 'purple',
        cat: 'Category 6',
      },
  ];
  return (
    <CatStyleDash>
      <h1>Today's Sales</h1>
      <h1>&8358;93,120</h1>
      <h2>Order Details</h2>
      <p>Category of Product Sold</p>
      <div>
        {
            fakeCat.map((item) => (
                <div className='cat-items' key={item.id}>
                    <h2>{item.cat}</h2>
                    <div className='div'>
                        <div className='inner-div' style={{backgroud:`${item.color}`}}></div>
                    </div>
                </div>
            ))
        }
      </div>
    </CatStyleDash>
  );
};

export default DashBoardCategory;
