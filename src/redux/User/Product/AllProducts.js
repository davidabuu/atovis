import axios from 'axios'
import React from 'react'

const AllProducts = ({json}) => {
  console.log(json)
    //Base URL

  return (
    <div>AllProducts</div>
  )
}

const API_URL = process.env.APP_BASE_URL;

export default AllProducts;

export const getStaicProps = async () => {
  const res = await fetch(`${API_URL}/public/products`)
  const json = await res.json()
  return {
    props: {
      json
    }
  }
}

