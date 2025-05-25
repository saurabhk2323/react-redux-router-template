import { useEffect } from 'react';
import { getDailyNews } from '../services/api/news/newsApis';

const Home = () => {
  useEffect(() => {
    const fetchDailyNews = async () => {
      try {
        const response = await getDailyNews();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDailyNews();
  }, []);

  return (
    <div>
      <h2>Welcome to Home Page</h2>
    </div>
  );
};

export default Home;
