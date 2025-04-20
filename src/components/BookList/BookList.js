import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/BookContext';


const BookList = ({ onEdit, filter, search }) => {
  const { books, deleteBook } = useContext(BookContext);

  const filteredBooks = books.filter((book) => {
    const matchStatus = filter === 'semua' || book.status === filter;
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  if (filteredBooks.length === 0) {
    return <p>Tidak ada buku yang sesuai.</p>;
  }

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> oleh {book.author} [{book.status}]
          <br />
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default BookList;
