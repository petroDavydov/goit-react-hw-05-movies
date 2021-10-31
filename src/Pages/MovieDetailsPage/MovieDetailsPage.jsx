import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  NavLink,
  Route,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { BiGitPullRequest } from "react-icons/bi";

import API from "../../Services/API";
import AboutMovie from "../../Components/AboutMovie";
import s from "./MovieDetailsPage.module.css";
import NotFoundMovie from "../NotFoundPage";

const Cast = lazy(() =>
  import("../../Components/Cast" /* webpackChunkName: "Cast" */)
);

const Reviews = lazy(() =>
  import("../../Components/Reviews" /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [isVisibleCast, setIsVisibleCast] = useState(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState(false);

  useEffect(() => {
    API.fetchMovieById(movieId)
      .then(setMovie)
      .catch((error) => {
        console.log(error.message);
      });
  }, [movieId]);

  const createVisibleCast = () => {
    if (isVisibleReviews === true) {
      setIsVisibleReviews(false);
    }
    setIsVisibleCast(true);
  };

  const createVisibleReviews = () => {
    if (isVisibleCast === true) {
      setIsVisibleCast(false);
    }
    setIsVisibleReviews(true);
  };

  const GoBack = () => {
    history.push(location?.state?.from ?? "./");
  };

  return (
    <>
      <button className={s.btn} onClick={GoBack} type="button">
        <BiGitPullRequest className={s.BiGitPullRequest} />
        Go-Back
      </button>

      {movie ? (
        <>
          <AboutMovie movie={movie} />

          <ul className={s.navList}>
            <li className={s.navItem}>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? "movie" },
                }}
                onClick={createVisibleCast}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? "movie" },
                }}
                onClick={createVisibleReviews}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              {movie && isVisibleCast && <Cast />}
            </Route>

            <Route path={`${path}/reviews`}>
              {movie && isVisibleReviews && <Reviews />}
            </Route>
          </Suspense>
        </>
      ) : (
        <NotFoundMovie />
      )}
    </>
  );
};

export default MovieDetailsPage;
