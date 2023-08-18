import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://staging-api.hellothematic.com/api/v2/account', // Set your API base URL here
});

// Set the authentication token in the headers
const authToken = '7c1f179572751f21c89bc42c7724fe5c'; // Replace with your actual token
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

export default axiosInstance;
