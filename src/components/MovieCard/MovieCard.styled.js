import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieItem = styled.div`
  text-align: center;
  border: 2px solid #e1e1e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: #e6dada;
  &:hover {
    transform: translateY(-4px);
    background-color: #ddd6f3;
  }
`;

export const StyledMovieItemImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const StyledCardInfo = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold; /* Додаємо жирність */
  padding: 15px;
  height: 79px;
  color: #333;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  color: #333;
  background-color: #ddd6f3;
  text-decoration: none;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  &:hover {
    text-decoration: underline;
    background-color: #e6dada;
  }
`;
