import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/servises/fetch';
import { NavLink, Link } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';

export const MovieInfo = () => {
  const [film, setFilm] = useState({});
  const [, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getFilmInfo = async movieId => {
      try {
        const response = await getMovieDetails(movieId);
        setFilm(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      }
    };
    getFilmInfo(movieId);
  }, [movieId]);

  console.log(film);

  return (
    <main>
      <Link to="/">Go back</Link>
      <img
        width={400}
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${film.poster_path}`}
        alt={film.title}
      />
      <h2>
        {film.title} {film.release_date}
      </h2>
      <p>User score: {Math.round(film.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <p>{film.genres?.map(genre => genre.name).join(' ')}</p>

      <h4> Additional information</h4>
      <ul>
        <li key={film.id}>
          <NavLink to={`/movies/${film.id}/cast`}>Cast</NavLink>
        </li>
        <li key={film.vote_average}>
          <NavLink to={`/movies/${film.id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */
    
