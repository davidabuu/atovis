import React from 'react';
import Link from 'next/link';
import { CartContainerStyled } from './CartContainerStyled';
//import { PlusSquareIcon, MinusIcon } from '@chakra-ui/icons';
import { Delete } from '@material-ui/icons';
import { RawProuducts } from '../RawProduct';
import Layout from '../../Layout/Layout';
export default function CartContainer() {
  return (
    <Layout>
      <CartContainerStyled>
        <div className='product-cart'>
          <h2 className='desktopHeading'>Your Shopping Cart</h2>
          <h4 className='mobileHeading'>USERS CART</h4>
          <div className='wrapper'>
            <table className='cart-collection'>
              <tr>
                <th>Product Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>PRICE</th>
                <th>Remove</th>
              </tr>
              {RawProuducts.map(({ info, price, id }) => (
                <tr key={id}>
                  <td>{info}</td>

                  <td>
                    <div className='quantity'>
                      <div className='qty'>
                        {/* <PlusSquareIcon /> */}
                      </div>
                      1
                      <div className='qty'>
                        {/* <MinusIcon /> */}
                      </div>
                    </div>
                  </td>
                  <td>{price}</td>
                  <td>$3000</td>
                  <td>
                    <div>
                      <Delete className='deletebutton' />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className='checkHide'>
            <div className='checkout-flex cart-action-button'>
              <Link href='/'>
                <a className='btn-main'>Continue Shopping</a>
              </Link>
              <Link href={'checkout'}>
                <a className='btn-main fill'>Checkout</a>
              </Link>
            </div>
          </div>
        </div>

        <div className='cartMobile'>
          {RawProuducts.map(({ info, price, id }) => (
            <div key={id}>
              <div className='cartMobileWrapper'>
                <div className='productFlex'>
                  <h3>{info}</h3>
                  <img src='/imh.png' alt='null' />
                </div>
                <div className='productFlex'>
                  <h3>Quantity</h3>
                  <div className='cart-increment'>
                    <div className='qty'>
                      +
                    </div>
                    1
                    <div className='qty'>
                    -
                    </div>
                  </div>
                </div>
                <div className='productFlex'>
                  <h3>Unit Price</h3>
                  <div className='price'>{price}</div>
                </div>
                <div className='productFlex'>
                  <h3>Sub Total</h3>
                  <div className='price'>{price}</div>
                </div>
                <div className='productFlex'>
                  <h3>Delete</h3>
                  <div>
                    <Delete className='deletebutton' />
                  </div>
                </div>
              </div>
            </div>
          ))}
           <div className='cart-action-button'>
              <Link href='/'>
                <a className='btn-main'>Continue Shopping</a>
              </Link>
              <Link href={'checkout'}>
                <a className='btn-main fill'>Checkout</a>
              </Link>
            </div>
        </div>
      </CartContainerStyled>
    </Layout>
  );
}
