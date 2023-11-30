import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'utils/movies-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesGallery } from 'components/GalleryOfMovies/GalleryOfMovies';
import { Loader } from 'components/Load/Load';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params] = useSearchParams();

  const query = params.get('query') ?? '';

  useEffect(() => {
    const getMoviesByQuery = async () => {
      setIsLoading(true);

      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        setMovies(fetchedMovies);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== '') {
      getMoviesByQuery();
    }
  }, [query]);

  return (
    <section>
      <SearchBar query={query} />
      {movies && <MoviesGallery movies={movies} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default Movies;
