import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillImageFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import API from 'services/moviesAPIService';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await API.getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && toast.error('Something went wrong, please try again!')}
      <CastList>
        {cast?.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
                width={100}
              />
            ) : (
              <BsFillImageFill size={100} />
            )}
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
