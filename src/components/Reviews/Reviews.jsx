import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from 'services/moviesAPIService';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await API.getMovieReviews(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && toast.error('Something went wrong, please try again!')}
      <ul>
        {reviews?.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
