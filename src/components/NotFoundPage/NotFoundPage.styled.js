import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 8rem 10rem;
  text-align: center;
`;

export const StyledLabel = styled.p`
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
  margin-bottom: 5rem;
  color: #9ca3af;
`;

export const StyledTitle = styled.p`
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #96adf1;
`;

export const StyledText = styled.p`
  max-width: 500px;
  margin: auto;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #96adf1;
`;

export const StyledButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  padding: 1rem;
  color: #46a1e9;

  &:hover {
    background-color: rgba(34, 139, 230, 0.2);
  }
`;
