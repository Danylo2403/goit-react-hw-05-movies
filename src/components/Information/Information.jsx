import { StyledInformationLayout, StyledNavLink } from './Information.styled';

export const Information = () => {
  return (
    <StyledInformationLayout>
      <StyledNavLink to="cast">Cast</StyledNavLink>
      <StyledNavLink to="reviews">Reviews</StyledNavLink>
    </StyledInformationLayout>
  );
};