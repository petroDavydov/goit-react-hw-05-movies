import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import queryString from 'query-string';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './MoviePage.module.css';

import Api from '../../Services/API';
import PageHeading from '../../Components/PageHeading';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));
const MovieList = lazy(() => import('../../Components/MovieList'));

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const path = useRouteMatch();

  const changeHandler = evt => {
    const inputQuery = evt.target.value;
    setQuery(inputQuery);
  };

  const submitHandler = async evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.info('Enter correct request');
      return;
    }

    history.push({ ...location, search: `?query=${query}` });
    reset();
  };

  const reset = () => setQuery('');

  useEffect(() => {
    const movie = queryString.parse(location.search).query;
    if (!movie) {
      setMovies([]);
    }
    if (movie) {
      Api.fetchSearchMovies(movie).then(res => setMovies(res));
      setQuery('');
    }
  }, [location.search]);

  return (
    <Suspense fallback={<Loader />}>
      <PageHeading text="You Can Search For a Movie " />

      <Switch>
        <Route path={`${path}/:movieId`} component={MovieDetailsPage} />

        <Route
          exact
          path="/movies"
          render={() => (
            <>
              <form className={s.searchForm} onSubmit={submitHandler}>
                <input
                  value={query}
                  onChange={changeHandler}
                  placeholder="Search Movie"
                />

                <button type="submit">👀 Search</button>
              </form>
              <>
                <MovieList movies={movies} />
              </>
            </>
          )}
        />
      </Switch>
    </Suspense>
  );
};

export default MoviesPage;
