import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from 'services/moviesAPIService';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await API.getMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && toast.error('Something went wrong, please try again!')}
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <Wrapper>
        <h2 style={{ marginBottom: '20px' }}>Additional information</h2>
        <ul style={{ marginBottom: '20px' }}>
          <li style={{ fontSize: '20px' }}>
            <Link to="cast">Cast</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default MovieDetailsPage;
