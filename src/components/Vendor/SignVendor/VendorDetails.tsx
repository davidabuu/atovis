import React from 'react';
import { useState, useEffect } from 'react';
import UserWebLayout from '../../WebLayout/UserWebLayout';
import { LogoHolders, Layout } from './SignStyled';
import { ArrowForward } from '@material-ui/icons';
import Seller from './Seller';
import { useForm } from 'react-hook-form';
import Bussiness from './Bussiness';
import Accounts from './Accounts';
import Image from 'next/image';
const VendorDetails = () => {
  const [seller, showSeller] = useState(false);
  const [bussiness, showBussiness] = useState(false);
  const [accounts, showAccounts] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    showSeller(true);
  }, []);
  const changeCategory = (tab: string) => {
    if (tab === 'seller') {
      showSeller(true);
      showBussiness(false);
      showAccounts(false);
    } else if (tab === 'bussiness') {
      showBussiness(true);
      showSeller(false);
      showAccounts(false);
    } else if (tab === 'accounts') {
      showAccounts(true);
      showSeller(false);
      showBussiness(false);
      console.log(accounts);
    }
  };
  return (
    <UserWebLayout webtitle={'Vendor Details'}>
      <div>
        <LogoHolders>
          <div className='img'>
          <Image src='/logo2.png' alt='Log' />
          </div>
        </LogoHolders>
        <Layout>
          <h1>Seller Details</h1>
          <ul>
            <a>
              <li
                style={{ color: 'var(--primary-color)' }}
                onClick={() => changeCategory('seller')}
                onKeyDown={() => changeCategory('seller')}>
                Seller Details
              </li>{' '}
              <ArrowForward />
            </a>
            <a>
              <li
                onClick={() => changeCategory('bussiness')}
                onKeyDown={() => changeCategory('bussiness')}>
                Bussiness Details
              </li>{' '}
              <ArrowForward />
            </a>
            <a>
              <li
                onClick={() => changeCategory('accounts')}
                onKeyDown={() => changeCategory('accounts')}>
                Payment Details
              </li>{' '}
              <ArrowForward />
            </a>
            <a>
              <li>Summary</li> <ArrowForward />
            </a>
          </ul>
        </Layout>
        {seller ? (
          <>
            <Seller />
          </>
        ) : (
          ''
        )}
      </div>
      {bussiness ? (
        <>
        <h1 className='center'>Bussiness Details</h1>
          <Bussiness />
        </>
      ) : (
        ''
      )}
      {accounts ? (
        <>
        <h1 className='center'>Accounts Details</h1>
          <Accounts />
        </>
      ) : (
        ''
      )}
    </UserWebLayout>
  );
};

export default VendorDetails;
