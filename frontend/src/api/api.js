import axios from 'axios';
import md5 from 'md5';

const baseUrl = "https://itpsoftback-production.up.railway.app/auth/signin";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(baseUrl, {  email, password});
    localStorage.setItem('token', response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    throw error;
  }
};
