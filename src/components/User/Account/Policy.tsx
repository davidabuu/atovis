import React from 'react';
import { LogoHolder } from '../../Vendor/SignVendor/SignStyled';
import UserWebLayout from '../../WebLayout/UserWebLayout';

const Policy = () => {
  return (
    <UserWebLayout>
      <div>
      <LogoHolder>
          <div className='img'>
            <img src='/logo2.png' alt='Log' />
          </div>
        </LogoHolder>
        <div className='center'>
            <h1>POLICY</h1>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        distinctio assumenda voluptatibus quaerat non ut eligendi veniam,
        numquam voluptatem error ducimus eaque, tempora autem nam dolores id
        iste commodi libero. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Beatae quaerat dicta debitis at quae a hic enim fugiat! Maiores,
        beatae. Doloremque quis possimus sunt ipsum voluptatum dolores, velit a
        perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error accusantium ad laboriosam repellendus earum explicabo! Qui
        quibusdam, nulla corrupti vero laboriosam suscipit earum! Quaerat ex
        harum impedit temporibus ipsa id.
      </div>
    </UserWebLayout>
  );
};

export default Policy;
