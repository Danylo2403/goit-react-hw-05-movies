import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledCardInfo, StyledMovieItem, StyledMovieItemImage, StyledLink } from './MovieCard.styled';

export const MovieCard = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      <StyledMovieItem>
        <StyledMovieItemImage
          src={
            poster
              ? `http://image.tmdb.org/t/p/w500/${poster}`
              : 'https://www.kevingage.com/assets/clapboard.png'
          }
          alt={title}
        />

        <StyledCardInfo>
          <p>{title}</p>
        </StyledCardInfo>
      </StyledMovieItem>
    </StyledLink>
  );
};
