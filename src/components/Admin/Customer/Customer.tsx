import React from 'react'
import { GeneralSummary } from '../GenaralSummary'
import LayoutSearch from '../LayoutSearch'
import SideNav from '../SideNav'
import AdminCustomerFeedback from './AdminCustomer'
import AdminCustomerData from './CustomerData'
import { AdminCustomerDataStyled } from './CustomerStyled'
const Customer = () => {
  return (
    <AdminCustomerDataStyled>
      <LayoutSearch/>
      <div className='dash'>
        <SideNav/>
        <div>
          <GeneralSummary/>
          <div className='customer-info'>
            <AdminCustomerFeedback/>
            <div>
              <AdminCustomerData/>
            </div>
          </div>
        </div>

      </div>
    </AdminCustomerDataStyled>
  )
}

export default Customer