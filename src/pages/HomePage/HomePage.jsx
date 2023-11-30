import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../utils/movies-api';
import { MoviesGallery } from 'components/GalleryOfMovies/GalleryOfMovies';
import { PageTitle } from './HomePage.styled';
import { Loader } from 'components/Load/Load';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      try {
        const result = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <MoviesGallery movies={trendingMovies} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
