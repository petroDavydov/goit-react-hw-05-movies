import s from "./AboutMovie.module.css";
import PropTypes from "prop-types";
import moviePhoto from "../../images/movie.png";

export default function AboutMovie({ movie }) {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <img
        className={s.poster}
        src={
          movie.poster_path ? `${posterURL}${movie.poster_path}` : moviePhoto
        }
        alt={movie.title}
      />

      <h3 className={s.title}>
        {movie.original_title || movie.name}({movie.release_date.split("~")[0]})
      </h3>

      <span className={s.span}>User Score: {movie.vote_average * 10}%</span>
      <h2 className={s.titleOverView}>Overview </h2>
      <span className={s.review}>{movie.overview}</span>
      {<h3 className={s.titleGenre}>Genres</h3>}
      {
        <span className={s.spanGenres}>
          {movie.genres.map((genre) => genre.name).join(" ")}
        </span>
      }

      <hr />

      <p className={s.addInfo}> ✅ Additional Information</p>
    </>
  );
}

AboutMovie.propTypes = {
  movie: PropTypes.object,
};
