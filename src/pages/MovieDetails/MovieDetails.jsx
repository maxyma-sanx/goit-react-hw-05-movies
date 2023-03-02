import { Container } from 'components/Container';
import { Loader } from 'components/Loader';
import { MovieInfo } from 'components/MovieInfo';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movieAPI';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieDetails(id);

        setMovieDetail(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  return (
    <>
      <Container>
        <MovieInfo movieInfo={movieDetail} goBackLink={goBackLink} />
      </Container>
      <Loader loading={isLoading} />
    </>
  );
};

export default MovieDetails;
