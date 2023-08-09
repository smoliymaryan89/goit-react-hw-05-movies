import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import { MovieListWrapper } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <>
      <MovieListWrapper>
        {movies.map(({ id, title, name, poster_path }) => (
          <MovieItem
            key={id}
            id={id}
            image={poster_path}
            title={title}
            name={name}
          />
        ))}
      </MovieListWrapper>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
