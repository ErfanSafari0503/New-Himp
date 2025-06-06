import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION ;

const fullUrl = `${baseUrl}/${apiVersion}`;

const apiClient = axios.create({
  baseURL: fullUrl,
  timeout: 10000,
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

export default apiClient;