import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from '../Icons/SearchButton/SearchButton';
import PropTypes from 'prop-types';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  @media (max-width: 37.5em) {
    margin-top: 10rem;
  }
`;

export const Input = styled.input`
  color: #191414;
  background-color: #f4f2f2;
  font-size: 1.6rem;
  border: none;
  padding: 1rem 4rem;
  border-radius: 10rem;
  width: 35%;
  transition: all .2s;
  margin-right: -5rem;

  &:focus {
    outline: none;
    width: 45%;
    background-color: #f0eeee;
  }

  &::-web-kit-input-placeholder {
    font-weight: 100;
    color: #ccc;
  }
`;

const SearchBar = ({ handleSearch }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (term) => {
    setTerm(term);
    handleSearch(term);
  }

  return (
    <SearchBarWrapper>
      <Input
        type="text"
        value={term}
        placeholder="Search an artist or song ..."
        onChange={event => onInputChange(event.target.value)}
      />
      <SearchButton />
    </SearchBarWrapper>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func
}

export default SearchBar;
