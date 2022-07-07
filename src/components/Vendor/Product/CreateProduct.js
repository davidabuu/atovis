import React from 'react';
import { CreateProductStyled } from './CreateProductStyled';
import { Button, Input, Row, Select, Col } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import SideNav from '../SideNav';
import MobileNavHead from '../SignVendor/MobileHead';
import VendorSearch from '../SignVendor/VendorSearch';
import Header from '../Header';
import Link from 'next/link';
import UserWebLayout from '../../WebLayout/UserWebLayout';
const CreateProduct = () => {
  const { Option } = Select;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <UserWebLayout webtitle='Create Product'>
      <CreateProductStyled>
        <div className='desktop-head'>
          <SideNav />
        </div>
        <div className='head'>
          <div className='desktop-head'>
            <Header />
          </div>
          <div className='mobile-head'>
            <MobileNavHead />
            <VendorSearch />
          </div>
          <form>
            <div className='file'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input type='file' onChange={onChange} className='input' />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='text'
                    placeholder='Name of product'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div className='file'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <select defaultValue='Category'>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    placeholder='Quantity'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div className='file'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <textarea placeholder='Enter Product Description' />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    placeholder='Weight In KG'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div className='file'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    placeholder='Price in Naira'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='date'
                    placeholder='Expiry Date'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <div className='file'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    placeholder='Minimum Product Order'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='number'
                    placeholder='Handling Fee'
                    className='input'
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}
            </div>
            <p>
              Click{' '}
              <Link href='/'>
                <a className='a'>Here</a>
              </Link>{' '}
              to import spreadsheet if avaliable
            </p>
            <div className='btn'>
              <Button className='add-product'>Add Product</Button>
            </div>
          </form>
        </div>
      </CreateProductStyled>
    </UserWebLayout>
  );
};

export default CreateProduct;
