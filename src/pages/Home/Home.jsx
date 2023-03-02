import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList';
import { fetchTrendingMovies } from 'services/movieAPI';
import { Container } from 'components/Container';
import { MoviesTitle } from './Home.styled';
import { Loader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <Container>
        <MoviesTitle>Trending today</MoviesTitle>
        <MoviesList movies={movies} />
      </Container>
      <Loader loading={isLoading} />
    </>
  );
};

export default Home;
