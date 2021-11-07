import s from './MovieList.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  const imgSrcBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li className={s.item} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
            className={s.link}
          >
            <h2 className={s.title}> {movie.title || movie.name}</h2>
            <img
              src={`${imgSrcBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className={s.image}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
