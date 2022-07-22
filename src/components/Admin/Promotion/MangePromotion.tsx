import React from 'react'
import { ArrowForwardIos } from '@material-ui/icons';
import { ManageStyle } from './PromotionStyled';
const MangePromotion = () => {
  return (
    <ManageStyle>
    <div>
        <h1>Manage Promotion</h1>
     <div className='arrow'>
     <ArrowForwardIos/>
     </div>
    </div>
      <div>
      <h1>Ads Revenue</h1>
      <div className='arrow'>
     <ArrowForwardIos/>
     </div>
  </div>
  </ManageStyle>
  )
}

export default MangePromotion