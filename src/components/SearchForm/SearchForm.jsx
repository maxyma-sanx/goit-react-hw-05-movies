import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Form,
  FormBtn,
  FormInput,
  InputContainer,
  SearchIcon,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <SearchIcon size={20} />
        <FormInput
          type="text"
          name="search"
          placeholder="Enter movie name..."
          onChange={e => setValue(e.target.value)}
        />
      </InputContainer>

      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
