import { Container } from 'components/Container';
import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movieAPI';
import { ErrorTitle, SearchContainer } from './MovieSearch.styled';
import { GoBack } from 'components/GoBack';
import { Loader } from 'components/Loader';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isResults, setIsResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const movie = searchParams.get('movie');

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    if (!movie) {
      return;
    }

    const getSearchMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchSearchMovies(movie);

        if (results.length < 1) {
          setMovies([]);
          setIsResults(true);
        } else {
          setMovies(results);
          setIsResults(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchMovies();
  }, [movie]);

  const handleSubmit = movie => {
    setSearchParams(movie !== '' ? { movie: movie.toLowerCase() } : {});
  };
  return (
    <>
      <Container>
        <SearchContainer>
          <GoBack goBackLink={goBackLink} />
          <SearchForm onSubmit={handleSubmit} />
        </SearchContainer>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {isResults && (
          <ErrorTitle>
            Movie {movie} not found! Please enter something else.
          </ErrorTitle>
        )}
      </Container>
      <Loader loading={isLoading} />
    </>
  );
};

export default MovieSearch;
