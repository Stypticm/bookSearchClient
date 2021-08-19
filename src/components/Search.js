// React
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useBooksStore } from "../BooksContext";

export const Search = () => {
  // Input - useRef
  const bodyInput = React.useRef();
  // Store
  const booksStore = useBooksStore();

  const handleSearch = () => {
    booksStore.searchBook(bodyInput.current.value);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Search</InputGroup.Text>
      <FormControl
        aria-label="searchBook"
        ref={bodyInput}
        onChange={handleSearch}
      />
    </InputGroup>
  );
};
