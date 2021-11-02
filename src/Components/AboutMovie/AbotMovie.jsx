import s from './AboutMovie.module.css';
import PropTypes from 'prop-types';
import moviePhoto from '../../images/movie.png';

export default function AboutMovie({ movie }) {
  const posterURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className={s.wrapper}>
      <img
        className={s.poster}
        alt={movie.title}
        src={
          movie.poster_path ? `${posterURL}${movie.poster_path}` : moviePhoto
        }
      />
      <div className={s.wrapperInfo}>
        <h3 className={s.title}>
          {movie.original_title || movie.name}(
          {movie.release_date.split('-')[0]})
        </h3>

        <span className={s.span}>User Score: {movie.vote_average * 10}%</span>
        <h2 className={s.titleOverView}>Overview</h2>
        <span className={s.review}>{movie.overview}</span>
        {<h2 className={s.titleGenre}>Genres</h2>}
        {
          <span className={s.spanGenres}>
            {movie.genres.map(genre => genre.name).join(' ')}
          </span>
        }

        {/* <hr /> */}
        <p className={s.addInfo}> ✅ Additional Information</p>
      </div>
    </div>
  );
}

AboutMovie.propTypes = {
  movie: PropTypes.object,
};
