import { useState, useEffect } from 'react';

import Api from '../../Services/API';
import PageHeading from '../../Components/PageHeading';
import MovieList from '../../Components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api.fetchTrendingMovie().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <>
      <PageHeading text="Trending Movies Today" />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
