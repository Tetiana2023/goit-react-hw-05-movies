import {Link} from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({movies}) => {
return (
    <>
    <ul className={css.moviesList}>
       {movies.map(({id, title, name }) => (
        <li key={id} className={css.item}>
            <Link className={css.movieLink} to={`/movies/${id}`}>{title || name}</Link>


        </li>
       ))}
    </ul>

    </>
)
}