import React from 'react'
import CartContainer from '../../src/components/User/Cart/CartContianer'
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout'

const Cart = () => {
  return (
    <UserWebLayout webtitle='Cart'>
      <CartContainer/>
    </UserWebLayout>
  )
}

export default Cart