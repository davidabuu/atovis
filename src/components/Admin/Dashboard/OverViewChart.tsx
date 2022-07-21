import React from 'react'
import { OverViewStyle } from './DashboardStyled'
import Transaction from './Transaction'

const OverViewChart = () => {
  return (
    <OverViewStyle>
        <h2>E-commerce Overview</h2>
        <div className='sale'>
           <div>
            <div><span className='gross'>''</span> Gross merchandise volume</div>
            <h3>19,00000</h3>
           </div>
           <div>
            <div><span className=''>''</span> Gross product sales</div>
            <h3>19,00000</h3>
           </div>
        </div>
        <Transaction/>
    </OverViewStyle>
  )
}

export default OverViewChart