import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API from 'services/moviesAPIService';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/MovieList/MovieList.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await API.getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <>
      {error && toast.error('Something went wrong, please try again!')}
      <Title>Trending today</Title>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
