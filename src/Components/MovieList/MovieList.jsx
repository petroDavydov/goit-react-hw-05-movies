import s from "./MovieList.mmodule.css";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={{
            pathname: `/movie/${movie.id}`,
            state: { from: location },
          }}
          className={s.link}
        >
          <li className={s.title}>{movie.title || movie.name}</li>
        </Link>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape),
};
