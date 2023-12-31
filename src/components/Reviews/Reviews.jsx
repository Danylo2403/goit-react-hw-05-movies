import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/movies-api';
import { ReviewItem } from 'components/ItemReview/ItemReview';
import { Loader } from 'components/Load/Load';

export default function Reviews(){
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
        console.error(error); 
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
        <b>There are no reviews.</b>
      )}
    </ul>
  );
};
