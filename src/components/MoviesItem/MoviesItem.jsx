import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieDesc, MovieImg, MovieItem } from './MoviesItem.styled';

export const MoviesItem = ({
  movie: { id, poster_path, original_title, original_name, release_date },
}) => {
  const location = useLocation();

  return (
    <MovieItem>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <MovieImg
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={original_title || original_name}
        />
        <MovieDesc>
          <h3>{original_title || original_name}</h3>
          <p>
            Release year: {new Date(release_date).getFullYear() || 'Unknown'}
          </p>
        </MovieDesc>
      </Link>
    </MovieItem>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
