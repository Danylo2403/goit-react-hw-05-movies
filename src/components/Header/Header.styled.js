import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #274046; 
  border-radius: 20px; 
  border: 2px solid #e1e1e1;
  margin: 0 auto;
  width: 95vw;
  height: 80px; 
  padding: 16px;
  margin-bottom: 40px;
  box-shadow: 0px 8px 40px -8px #333; 
`;

export const NavContainer = styled.ul`
  margin: 0 auto;
  width: 200px;
  display: flex;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #b9b9b9; 
  transition: color 0.3s ease-in-out; 

  &:hover {
    color: #6b5b95; 
  }

  &.active {
    color: #ff7675; 
  }
`;