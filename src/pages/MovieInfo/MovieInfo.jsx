import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/servises/fetch';
import { NavLink, Link, useLocation, useParams, Outlet  } from 'react-router-dom';
import { Suspense } from 'react';

import css from './MovieInfo.module.css';

const MovieInfo = () => {
  const [film, setFilm] = useState({});
  const [, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';

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
      <Link className={css.back} to={backLinkLocation}>
        Go back
      </Link>
      <div className={css.box}>
        <img
          width={400}
          src={`https://www.themoviedb.org/t/p/original/${film.poster_path}`}
          alt={film.title}
        />
        <div>
          <h2>
            {film.title}
            {film.release_date}
          </h2>
          <p>User score: {Math.round(film.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <p>{film.genres?.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <h4> Additional information</h4>
      <ul className={css.additionalList}>
        <li key={film.id}>
          <NavLink className={css.linktitle} to={`/movies/${film.id}/cast`}>
            Cast
          </NavLink>
        </li>
        <li key={film.vote_average}>
          <NavLink className={css.linktitle} to={`/movies/${film.id}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieInfo;
