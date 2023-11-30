import {
  ReviewItemWrapper, Author, Text
} from 'components/ReviewItem/ReviewItem.styled';

export const ReviewItem = ({ author, text }) => {
  return (
    <ReviewItemWrapper>
    <Author>Author: {author}</Author>
    <Text>{text}</Text>
  </ReviewItemWrapper>
  );
};