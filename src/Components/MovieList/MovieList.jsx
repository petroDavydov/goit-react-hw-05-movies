import s from './MovieList.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={{
            pathname: `/movies/${movie.id}`,
            state: { from: location },
          }}
          className={s.link}
        >
          {/* Вот тут я не понял куда его двигать он ведь внутри 'ul'??? */}
          <li className={s.title}>{movie.title || movie.name}</li>
        </Link>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
