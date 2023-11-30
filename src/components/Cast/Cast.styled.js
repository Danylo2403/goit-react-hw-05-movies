import styled from 'styled-components';

export const ActorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  grid-row-gap: 32px;
`;

export const NoInfo = styled.b`
  font-size: 18px;
  color: #ff0000;
  margin-top: 20px;
`;