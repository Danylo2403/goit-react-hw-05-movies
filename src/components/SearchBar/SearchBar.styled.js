import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const StyledSearchForm = styled.form`
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #f5f5f5; 
  border-radius: 10px; 
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); 
`;

export const StyledSearchInput = styled.input`
  flex: 1; 
  font: inherit;
  font-size: 18px; 
  border: none;
  outline: none;
  padding: 12px; 
  background-color: transparent;
  color: #333333; 
  &::placeholder {
    color: #666666; 
  }
`;

export const StyledSearchButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.8; 
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #4a90e2; 
  border-radius: 0 10px 10px 0; 
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt2)`
  width: 24px;
  height: 24px; 
  fill: #ffffff; 
`;
