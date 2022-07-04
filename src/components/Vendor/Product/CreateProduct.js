import React from 'react';
import { CreateProductStyled } from './CreateProductStyled';
import { Button, Input, Row } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import SideNav from '../SideNav';
const CreateProduct = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <SideNav />
      <Row>
        <CreateProductStyled>
          <input type='file' />
          <Row>
            <div className='product-info-one'>
              <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    type='text'
                    placeholder='Name of product'
                    className='input-product'
                    required
                  />
                )}
              />
              {errors.email && (
                <span className='error'>This field is required</span>
              )}

              <div className='product-info-two'>
                <div>
                  <Controller
                    control={control}
                    name='type'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <select id='select' onChange={onChange}>
                        <option value='typ1' className='option'>
                          Type 1
                        </option>
                        <option value='typ2'>Type 2</option>
                      </select>
                    )}
                  />
                  {errors.type && (
                    <span className='error'>This field is required</span>
                  )}
                </div>
                <div>
                  <Controller
                    control={control}
                    name='type'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <input type='number' placeholder='Quantity' required />
                    )}
                  />
                  {errors.type && (
                    <span className='error'>This field is required</span>
                  )}
                </div>
                <div>
                  <Controller
                    control={control}
                    name='type'
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <input type='number' placeholder='Weight (KG)' required />
                    )}
                  />
                </div>
              </div>
            </div>
          </Row>
          <div>
            <div>
              <Controller
                control={control}
                name='type'
                rules={{ required: true }}
                render={({ field: { onChange } }) => <textarea />}
              />
            </div>
            <div className='price-div'>
              <div>
                <Controller
                  control={control}
                  name='type'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      type='number'
                      placeholder='Price In Naira'
                      required
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name='type'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input type='date' placeholder='Expiry Date' required />
                  )}
                />
              </div>
            </div>
            <div className='fee-div'>
              <div>
                <Controller
                  control={control}
                  name='type'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      type='number'
                      placeholder='Price In Naira'
                      required
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name='type'
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input type='date' placeholder='Expiry Date' required />
                  )}
                />
              </div>
            </div>
          </div>
        </CreateProductStyled>
      </Row>
    </div>
  );
};

export default CreateProduct;
