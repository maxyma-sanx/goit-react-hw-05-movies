import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movieAPI';
import {
  ReviewDescr,
  ReviewDescrInfo,
  ReviewImg,
  ReviewItem,
  ReviewList,
} from './Review.styled';

const Review = () => {
  const [movieReview, setMovieReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(id);
        setMovieReview(results);
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
      {movieReview.length === 0 && !isLoading ? (
        <h3>Review not found!</h3>
      ) : (
        <ReviewList>
          {movieReview.map(review => {
            return (
              <ReviewItem key={review.id}>
                <ReviewImg />
                <ReviewDescr>
                  <ReviewDescrInfo>
                    <p>
                      <b>Name:</b> {review.author_details.name}
                    </p>
                    <p>
                      <b>Username:</b> {review.author_details.username}
                    </p>
                    <p>
                      <b>Rating:</b> {review.author_details.rating}
                    </p>
                  </ReviewDescrInfo>
                  <p>
                    <b>Overview:</b> {review.content}
                  </p>
                </ReviewDescr>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}

      <Loader loading={isLoading} />
    </>
  );
};

export default Review;
