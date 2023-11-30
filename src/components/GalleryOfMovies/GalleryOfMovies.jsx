import React from 'react';
import { MovieCard } from 'components/CardOfMovie/CardOfMovie';
import { StyledMoviesContainer } from './GalleryOfMovies.styled';

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
