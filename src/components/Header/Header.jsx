// Header.jsx
import React from 'react';
import { StyledHeader, NavContainer, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavContainer>
          <li>
            <StyledLink to="/" activeClassName="active">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" activeClassName="active">
              Movies
            </StyledLink>
          </li>
        </NavContainer>
      </nav>
    </StyledHeader>
  );
};
