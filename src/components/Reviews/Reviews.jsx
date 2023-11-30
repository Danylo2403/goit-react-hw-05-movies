import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/movies-api';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      setIsLoading(true);

      try {
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error); // Обробка помилок у функції fetchReviews
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <ul>
      {isLoading && <Loader />}

      {reviews.length > 0 ? (
        reviews.map(({ id, author_details, content }) => (
          <ReviewItem key={id} author={author_details.username} text={content} />
        ))
      ) : (
        <b>There are no reviews</b>
      )}
    </ul>
  );
};
