import axios from 'axios'
import React from 'react'

const AllProducts = () => {
    //Base URL
const API_URL = process.env.APP_BASE_URL;
  return (
    <div>AllProducts</div>
  )
}


AllProducts.getInitalProps = async ()  => {
    //Fetch Product API
    const res = await axios.get(`${API_URL}/public/`)
}
export default AllProducts

