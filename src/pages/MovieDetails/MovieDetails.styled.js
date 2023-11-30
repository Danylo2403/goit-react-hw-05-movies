import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLayout = styled.div`
  display: flex;
  justify-content: center; 
  gap: 24px;
  margin: 0 auto;
`;

export const StyledBackLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #4a90e2; 
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #007acc; 
    transform: translateY(-2px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const MovieTitle = styled.h2`
  font-family: 'Roboto', sans-serif; 
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

export const OverviewTitle = styled.h3`
  font-family: 'Roboto', sans-serif; 
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const Overview = styled.p`
  font-family: 'Roboto', sans-serif; 
  font-size: 1rem;
  max-width: 500px;
  margin-bottom: 2.5rem;
`;

export const GenresTitle = styled.h3`
  font-family: 'Roboto', sans-serif; 
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Genres = styled.ul`
  padding-left: 20px;
  list-style: none;
  display: flex;
  gap: 2rem;

  li {
    font-family: 'Roboto', sans-serif; 
    font-size: 1.2rem;
  }
`;
