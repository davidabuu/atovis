import { ArrowForward } from '@material-ui/icons';
import React from 'react';
import { Layout } from './SignStyled';

const SignLayout = ({ info }) => {
  return (
    <div>
      <Layout>
        <h1>{info}</h1>
        <ul>
          <li>Seller Details</li> <ArrowForward/>
          <li>Bussiness Details</li> <ArrowForward />
          <li>Payment Details</li> <ArrowForward />
          <li>Summary</li> <ArrowForward />
        </ul>
      </Layout>
    </div>
  );
};

export default SignLayout;
