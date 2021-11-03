import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from '../Container/Container';
import Bar from '../Bar/Bar';
import Footer from '../Footer/Footer';
import MovieDetailsPage from '../../Pages/MovieDetailsPage/MovieDetailsPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// ==============

const HomePage = lazy(() =>
  import('../../Pages/HomePage' /*webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../../Pages/MoviesPage/' /*webpackChunkName: "movies-page" */),
);

const NotFoundPage = lazy(() =>
  import(
    '../../Pages/NotFoundPage/NotFoundPage' /*webpackChunkName: "not-found-page" */
  ),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <ToastContainer autoClose={2500} />
        <Bar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          {/* Добавил сюда */}
          <Route path="/movie/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/error">
            <NotFoundPage />
          </Route>

          {/* Компонент Redirect */}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Container>
    </Suspense>
  );
}

export default App;
