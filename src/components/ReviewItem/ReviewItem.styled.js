import styled from 'styled-components';

export const ReviewItemWrapper = styled.li`
  max-width: 650px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 20px; /* Змінено radius для більш красивого вигляду */
  background-color: #283142; /* Темний синій фон */
  box-shadow: 10px 10px 20px #79797985, -10px -10px 20px #79797985; /* Легкий ефект тіні */
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Author = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #c5c5c5de; /* Сірий колір для назви автора */
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #c1b7b7ed; /* Світло-сірий колір для тексту відгуку */
`;
