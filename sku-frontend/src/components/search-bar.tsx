
import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, update } from '../app/filterSlice';

export function SearchBar () {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Container className="searchBar">
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
          size="lg"
          type="text"
          placeholder="Search for a product"
          onChange={e => dispatch(update(e.target.value))}
          value={filter}
        />
        <span><FontAwesomeIcon icon={faFilter} /></span>
      </InputGroup>
    </Container>
  )
}