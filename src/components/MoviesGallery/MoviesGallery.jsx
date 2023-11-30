import React from 'react';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledMoviesContainer } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <StyledMoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieCard key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </StyledMoviesContainer>
  );
};
