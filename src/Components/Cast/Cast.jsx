import { FcWorkflow } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import API from "../../Services/API";
import ScrollToTarget from "../../utils/scrollTo";
import s from "./Cast.module.css";
import noFoundImage from "../../images/nofound.png";

export default function Cast() {
  const castUrl = "https://image.tmdb.org/t/p/w100";
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    API.fetchMovieByCast(movieId)
      .then((res) => {
        setCasts(res);
        ScrollToTarget();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [movieId]);

  return (
    <>
      {casts && casts.length > 0 ? (
        <ul className={s.castsGallery}>
          {casts.map(({ id, name, character, profile_path }) => (
            <li className={s.castGalleryItem} key={id}>
              <img
                className={s.itemImage}
                width="100"
                src={profile_path ? `${castUrl}${profile_path}` : noFoundImage}
                alt={name}
              />
              <p className={s.text}>{name}</p>
              <p className={s.textName}>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noInformation}>
          <FcWorkflow /> No information About Casts
        </p>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
