import React from 'react';
import PropTypes from 'prop-types';
import { BsFillImageFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { Item } from './MovieItem.styled';

const MovieItem = ({ id, title, image, name }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {image ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${image}`}
            width={300}
            height={450}
            alt={title}
          />
        ) : (
          <BsFillImageFill size={300} fill="#000000" />
        )}
        <h2>{title ?? name}</h2>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default MovieItem;
