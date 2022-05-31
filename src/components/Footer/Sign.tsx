import { Input} from 'antd';
import React from 'react';

const Sign = () => {
  const { Search } = Input;
  return (
    <div className='sign'>
      <h4 style={{ color: '#fff' }}>Sign Up To Recieve Our Emails</h4>
      <div className='search'>
        <div className='search'>
          <Search type={'text'} placeholder='Sign To Recieve Mails' enterButton='Sign In' />
        </div>
      </div>
    </div>
  );
};

export default Sign;
