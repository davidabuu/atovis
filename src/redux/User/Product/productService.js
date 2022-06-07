import axios from 'axios';
//Base URL
const API_URL = process.env.APP_BASE_URL;
console.log(API_URL);
//Get Product Details
const singleProductDetails = async (id) => {
    const response = await axios.get(`${API_URL}/public/products/${id}`);
    console.log(response.data)
    if(response.data){
        return response.data;
    }
}
const productService = {
    singleProductDetails
  };
export default productService;

