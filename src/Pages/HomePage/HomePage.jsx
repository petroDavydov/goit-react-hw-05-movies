import { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import API from "../../Services/API";
import PageHeading from "../../Components/PageHeading";
import MovieList from "../../Components/MovieList";

const MovieDetailsPage = lazy(() => import("../MovieDetailsPage"));

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovie().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <PageHeading text="Trending Movies Today" />
      <Switch>
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/" render={() => <MovieList movies={movies} />} />
      </Switch>
    </Suspense>
  );
}
