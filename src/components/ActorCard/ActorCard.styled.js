import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const PhotoLayout = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardInfo = styled.div`
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

export const Character = styled.p`
  font-size: 14px;
  color: #666;
`;
