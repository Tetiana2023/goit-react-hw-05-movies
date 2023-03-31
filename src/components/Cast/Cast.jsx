import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieCredits } from 'components/servises/fetch';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [actor, setActor] = useState([]);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getActor = async movieId => {
      try {
        const response = await getMovieCredits(movieId);
        setActor(response.cast);
        // console.log(response.cast)
      } catch (error) {
        setError(error.message);
      }
    };
    getActor(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        {actor.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path ? (
                  `https://image.tmdb.org/t/p/w200/${profile_path}`
                ) : (
                  <p>Soryy? we don't have photo</p>
                )
              }
              alt={name}
            />
            <p> {name}</p>
            <p> {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
