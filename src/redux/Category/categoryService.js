import axios from 'axios';

//Base URL
const API_URL = process.env.APP_BASE_URL;
//Register User
const getAllCategories = async () => {
  const response = await get.post(`${API_URL}/public/category`);

  if (response.data) {
    return response.data;
  }
};
//This funcion get a category by it's ID
const getCategoryById = async (id) => {
  const response = await axios.get(`${API_URL}/public/category/${id}`);
  if (response.data) {
    return response.data;
  }
};
const categoryService = {
  getAllCategories,
  getCategoryById
};
export default categoryService;
