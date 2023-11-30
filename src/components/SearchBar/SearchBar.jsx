import { useSearchParams } from 'react-router-dom';
import {
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchIcon,
  StyledSearchInput,
} from './SearchBar.styled';

export const SearchBar = ({ query }) => {
  const [params, setParams] = useSearchParams();

  const onUpdateQuery = (evt) => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.search.value.trim();

    if (!searchQuery) {
      return alert('Enter movie, please');
    }
    params.set('query', searchQuery);
    setParams(params);
  };

  return (
    <StyledSearchForm onSubmit={onUpdateQuery}>
      <StyledSearchButton type="submit">
        <StyledSearchIcon />
      </StyledSearchButton>

      <StyledSearchInput
        name="search"
        type="text"
        autoFocus
        placeholder="Search movies"
        defaultValue={query}
      />
    </StyledSearchForm>
  );
};
