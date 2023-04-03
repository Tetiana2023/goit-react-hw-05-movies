import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

 const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={css.item}>
            <Link
              className={css.movieLink}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesList;
