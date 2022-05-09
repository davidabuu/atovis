import React from 'react'
import { Input, Space } from 'antd';
import { HeaderStyled } from './AdminStyled';

const { Search } = Input;
const AdminSearch = () => {
  return (
    <HeaderStyled>
    <Space direction="vertical"/>
    <Search placeholder="Search Products and Categories" style={{ width: 200 }} />
    <div>
        <h2>Log out</h2>
    </div>
    </HeaderStyled>
  )
}

export default AdminSearch