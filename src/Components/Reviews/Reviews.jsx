import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Reviews.module.css';
import Api from '../../Services/API';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Api.fetchMovieByReviews(movieId).then(res => {
      setReviews(res);
      window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: 'smooth',
      });
    });
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2 className={s.title}>{author}</h2>
              <span className={s.text}>{content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noReviewsText}> 💤 No Reviews for this Movie.</p>
      )}
    </>
  );
}
