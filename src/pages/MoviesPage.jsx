import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from 'services/moviesAPIService';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    (async () => {
      try {
        const { results } = await API.getMovieByQuery(query);

        if (results.length === 0) {
          return toast.info(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }

        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <>
      {error && toast.error('Something went wrong, please try again!')}
      {isLoading && <Loader />}
      <SearchBar onSubmit={handleSubmit} query={query} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
