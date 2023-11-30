import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper, StyledLabel, StyledTitle, StyledText, StyledButton } from './NotPage.styled';

export const NotFoundTitle = () => {
  return (
    <StyledWrapper>
      <StyledLabel>404</StyledLabel>
      <StyledTitle>You have found a secret place.</StyledTitle>
      <StyledText>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </StyledText>
      <Link to="/">
        <StyledButton>Take me back to the home page</StyledButton>
      </Link>
    </StyledWrapper>
  );
};
