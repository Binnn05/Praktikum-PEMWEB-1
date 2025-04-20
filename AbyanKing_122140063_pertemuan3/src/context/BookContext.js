import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage'; // Import custom hook

const BookContext = createContext();

const BookProvider = ({ children }) => {
  // Menyimpan data buku ke dalam localStorage dan state
  const [books, setBooks] = useLocalStorage('books', []);

  const bookReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, action.payload];
      case 'UPDATE_BOOK':
        return state.map(book =>
          book.id === action.payload.id ? action.payload : book
        );
      case 'DELETE_BOOK':
        return state.filter(book => book.id !== action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(bookReducer, books);

  // Update localStorage setiap state berubah
  useEffect(() => {
    setBooks(state);
  }, [state, setBooks]);

  const addBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };

  const updateBook = (book) => {
    dispatch({ type: 'UPDATE_BOOK', payload: book });
  };

  const deleteBook = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  return (
    // Menyediakan BookContext untuk diakses oleh komponen lain
    <BookContext.Provider value={{ books: state, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BookProvider, BookContext };
