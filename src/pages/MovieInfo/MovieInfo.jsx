import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/servises/fetch';
import { NavLink }  from 'react-router-dom';
import {useParams} from 'react-router-dom';

export const MovieInfo = () => {
  const [film, setFilm] = useState({});
  const [, setError] = useState('');
  const { movieId } = useParams;


  useEffect(() => {
    const getFilmInfo = async movieId => {
      try {
        const response = await getMovieDetails(movieId);

           setFilm(response);
        console.log(response)
      } catch (error) {
        setError(error.message);
      }
    };
    getFilmInfo(movieId);
  }, [movieId]);

  console.log(film)

  return (
    <>
      <img
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${film.poster_path}`}
        alt={film.title}
      ></img>
      <h2>
        {film.title} {film.release_date}
      </h2>
      <p>User score: {Math.round(film.vote_average * 10)}%</p>
      <p>Overview {film.overview}</p>
      <p>Genres{film.genres?.map(genre => genre.name)}</p>

      <h3> Additional information</h3>
      <NavLink to={`/movies/${film.id}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${film.id}/reviews`}>Reviews</NavLink>
      
    </>
  );
};
