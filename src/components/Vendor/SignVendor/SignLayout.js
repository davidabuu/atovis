import { ArrowForward } from '@material-ui/icons';
import React from 'react';
import { Layout } from './SignStyled';

const SignLayout = ({ info }) => {
  return (
    <div>
      <Layout>
        <h1>{info}</h1>
        <ul>
          <a>
            <li>Seller Details</li> <ArrowForward />
          </a>
          <a>
            <li>Bussiness Details</li> <ArrowForward />
          </a>
          <a>
            <li>Payment Details</li> <ArrowForward />
          </a>
          <a>
            {' '}
            <li>Summary</li> <ArrowForward />
          </a>
        </ul>
      </Layout>
    </div>
  );
};

export default SignLayout;
