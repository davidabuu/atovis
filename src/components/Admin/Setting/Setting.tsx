
import { Button, Input, Row } from 'antd';
import React from 'react';
import LayoutSearch from '../LayoutSearch';
import SideNav from '../SideNav';
const AdminSettings = () => {
  
  return (
    <div>
      <div className='dash'>
        <LayoutSearch />
        <SideNav />
        <div>
            <h1>Settings</h1>
            <h3>Update Feature</h3>
            <h3>Social Media</h3>
            <h3>Currency</h3>
            <div>
                <h4>Change Cover Image</h4>
                <Row justify='space-around'>
                    <input type='file'/>
                    <Button>Save</Button>
                </Row>
            </div>
            <div>
                <h4>Change add sides Page and add product link</h4>
                <Row justify='space-around'>
                    <Input type='file'/>
                  <Input placeholder='Add Link'/>
                </Row>
                <Row justify='space-around'>
                    <Input type='file'/>
                  <Input placeholder='Add Link'/>
                </Row>
                <Row justify='space-around'>
                    <Input type='file'/>
                  <Input placeholder='Add Link'/>
                  <Button>Save</Button>
                </Row>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
