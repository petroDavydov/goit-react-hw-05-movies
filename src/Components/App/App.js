import { Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from '../Container/Container';
import Bar from '../Bar';
import Footer from '../Footer/Footer';
import LoaderTriangle from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============

const HomePage = lazy(() =>
  import('../../Pages/HomePage' /*webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../../Pages/MoviesPage' /*webpackChunkName: "movies-page" */),
);

const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage' /*webpackChunkName: "not-found-page" */),
);

function App() {
  return (
    <Suspense fallback={<LoaderTriangle />}>
      <Container>
        <ToastContainer autoClose={2500} />
        <Bar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/">
            <MoviesPage />
          </Route>

          <Route exact path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Suspense>
  );
}

export default App;
