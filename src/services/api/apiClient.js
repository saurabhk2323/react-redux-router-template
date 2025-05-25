import axios from 'axios';

// create an axios instance
const apiClient = axios.create({
  timeout: 10000,
});

// interceptor to add authentication token and headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    const secretKey = process.env.REACT_APP_NEWS_API_SECRET_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // additional headers if required
    if (config.url.includes('news')) {
      config.headers['X-ACCESS-KEY'] = secretKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// interceptor to use handle responses and errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
