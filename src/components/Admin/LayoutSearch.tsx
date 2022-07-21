import React from 'react'
import {Input} from 'antd'
import { ExitToAppSharp } from '@material-ui/icons'
import { SearchStyle } from './LayoutSearchStyle'
const LayoutSearch = () => {
  return (
    <SearchStyle>
        <Input.Search placeholder='Search products and Categories'/>
        <p> <ExitToAppSharp/> Logout</p>
    </SearchStyle>
  )
}

export default LayoutSearch