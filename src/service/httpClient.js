import axios from "axios";

// Create Axios instance with base URL from environment variable
const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL from .env
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;