import { useParams } from "react-router";
import { useEffect, useState } from "react";
import s from "./Reviews.module.css";
import API from "../../Services/API";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchMovieByReviews(movieId).then(setReviews);
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
