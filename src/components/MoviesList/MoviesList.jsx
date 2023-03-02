import PropTypes from 'prop-types';
import { MoviesItem } from 'components/MoviesItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
