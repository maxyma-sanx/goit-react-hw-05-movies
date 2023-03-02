import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movieAPI';
import { CastDescr, CastImg, CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCredits(id);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCredits();
  }, [id]);

  return (
    <>
      {movieCast.length === 0 && !isLoading ? (
        <h2>Cast not found!</h2>
      ) : (
        <CastList>
          {movieCast.map(actor => {
            return (
              <CastItem key={actor.credit_id}>
                <CastImg
                  src={
                    actor.profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt=""
                />
                <CastDescr>
                  <p>
                    <b>Actor:</b> {actor.name}
                  </p>
                  <p>
                    <b>Character:</b> {actor.character}
                  </p>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}

      <Loader loading={isLoading} />
    </>
  );
};

export default Cast;
