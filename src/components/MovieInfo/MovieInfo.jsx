import PropTypes from 'prop-types';
import { GoBack } from 'components/GoBack';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  CastLinkStyled,
  GenresDesc,
  GenresTitle,
  MovieImg,
  MovieTitle,
  MovieWrapper,
  OverviewDesc,
  OverviewTitle,
  ReviewLinkStyled,
  Score,
} from './MovieInfo.styled';

export const MovieInfo = ({
  movieInfo: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres = [],
  },
  goBackLink,
}) => {
  const location = useLocation();

  return (
    <>
      <MovieWrapper>
        <MovieImg
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={original_title}
        />
        <GoBack goBackLink={goBackLink} />
        <MovieTitle>
          {original_title || 'Unknown'} (
          {new Date(release_date).getFullYear() || 'Unknown'})
        </MovieTitle>
        <Score>User score: {vote_average || 'Unknown'}</Score>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewDesc>{overview || 'Unknown'}</OverviewDesc>
        <GenresTitle>Genres</GenresTitle>
        <GenresDesc>
          {genres.length > 0
            ? genres.map(genre => genre.name).join(' | ')
            : 'Unknown'}
        </GenresDesc>
        <CastLinkStyled
          state={{ from: location.state?.from ?? '/movies' }}
          to="cast"
        >
          Cast
        </CastLinkStyled>
        <ReviewLinkStyled
          state={{ from: location.state?.from ?? '/movies' }}
          to="review"
        >
          Review
        </ReviewLinkStyled>
      </MovieWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
  goBackLink: PropTypes.object.isRequired,
};
