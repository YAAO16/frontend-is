import axios from 'axios';
import md5 from 'md5';

const baseUrl = "http://localhost:3001/usuarios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.get(baseUrl, { params: { username, password: md5(password) } });
    return response.data[0];
  } catch (error) {
    throw error;
  }
};
