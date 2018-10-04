import axios from 'axios';
export const api = axios.create({
    baseURL: `http://localhost:8082/`,
    headers: {
    	Authorization: 'Bearer {token}'//tttttttt
    }
  })