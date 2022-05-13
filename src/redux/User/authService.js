import axios from 'axios'

const API_URL = process.env.APP_BASE_URL


//Register User
const register = async (userData) =>{
    const response = await axios.post(`${API_URL}/buyer/register`, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data.token))
    }
    return response.data
}

const authSevice = {
    register
}
export default authSevice;