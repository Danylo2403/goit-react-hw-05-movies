import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledInformationLayout = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  border: 1px solid #d7d4cd;
  margin: 40px 0;
  padding: 20px 48px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  width: 150px;
  height: 3rem;
  color: #252525;
  background-color: #dfdfdf;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0c0c0;
  }

  &.active {
    background-color: #a9a9a9;
    color: #ffffff;
  }
`;
