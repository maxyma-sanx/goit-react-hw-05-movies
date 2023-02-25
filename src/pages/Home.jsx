import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/movieAPI';

import { Header } from 'components/Header';
import { Container } from 'components/Container';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {}
    };

    getMovies();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
