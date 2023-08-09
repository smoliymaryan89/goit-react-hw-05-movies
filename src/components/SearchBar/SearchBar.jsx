import { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import { Form } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.warning("Whoops, can't be empty!");
    }

    onSubmit(searchQuery);

    setSearchQuery('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={searchQuery}
            name="searchQuery"
            onChange={handleInputChange}
          />
          <button type="submit">
            <GoSearch size={25} />
          </button>
        </label>
      </Form>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
