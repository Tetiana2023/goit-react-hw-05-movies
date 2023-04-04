import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, name }) => (
          <Link
            className={css.movieLink}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
          <li key={id} className={css.item}>
              {title || name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
