import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getYear from 'utils/getYear';
import getUserScore from 'utils/getUserScore';
import {
  BackLink,
  Content,
  ContentWrapper,
  Wrapper,
} from './MovieDetails.styled';

const MovieDetails = ({ movieDetails }) => {
  const { poster_path, title, genres, vote_average, overview, release_date } =
    movieDetails;

  const location = useLocation();

  return (
    <Wrapper>
      <BackLink to={location.state?.from ?? '/'}>Go Back</BackLink>

      <ContentWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width={300}
          height={450}
        />
        <Content>
          <h2>
            {title} <span>{getYear(release_date)}</span>
          </h2>
          <span>User Score: {getUserScore(vote_average)}%</span>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
