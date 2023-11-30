// Header.jsx
import React from 'react';
import { StyledHeader, NavContainer, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavContainer>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </NavContainer>
      </nav>
    </StyledHeader>
  );
};
