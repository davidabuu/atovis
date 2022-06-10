import axios from 'axios';
//Base URL
const API_URL = process.env.APP_BASE_URL;

//Get User's Cart
const getCartItems = async () => {
  const response = await axios.get(`${API_URL}/buyer/cart`);
  if (response.data) {
    return response.data;
  }
};
//Add To Cart
const addToCart = async (productId, quantity) => {
  const cartDetails = {
    productId,
    quantity,
  };
  const response = await axios.put(`${API_URL}/buyer/cart`, cartDetails);

  if (response.data) {
    return response.data;
  }
};
//Delete an item from cart
const deleteFromCart = async (id) => {
  const response = await axios.post(`${API_URL}/buyer/login`, id);
  if (response.data) {
    return response.data;
  }
};
const cartService = {
  getCartItems,
  addToCart,
  deleteFromCart,
};
export default cartService;
