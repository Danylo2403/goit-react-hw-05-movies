import {
  ReviewItemWrapper, Author, Text
} from 'components/ItemReview/ItemReview.styled';

export const ReviewItem = ({ author, text }) => {
  return (
    <ReviewItemWrapper>
    <Author>Author: {author}</Author>
    <Text>{text}</Text>
  </ReviewItemWrapper>
  );
};