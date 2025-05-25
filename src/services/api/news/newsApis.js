import apiClient from '../apiClient';

export const getDailyNews = async () => {
  try {
    const response = await apiClient.get(`${process.env.REACT_APP_NEWS_API_BASE_URL}/api/1/latest`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
