import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // Menggunakan uuid untuk menghasilkan ID unik
import { BookContext } from '../../context/BookContext'; // Mengimpor BookContext
import { useContext } from 'react';

const BookForm = ({ selectedBook, onFinish }) => {
  const { addBook, updateBook } = useContext(BookContext); // Mengakses fungsi dari context
  const [title, setTitle] = useState(selectedBook ? selectedBook.title : '');
  const [author, setAuthor] = useState(selectedBook ? selectedBook.author : '');
  const [status, setStatus] = useState(selectedBook ? selectedBook.status : 'milik');
  
  // Menggunakan useEffect untuk mengisi form saat editing
  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
      setStatus(selectedBook.status);
    }
  }, [selectedBook]);

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4(), title, author, status }; // Membuat objek buku baru dengan id unik

    if (selectedBook) {
      updateBook({ ...selectedBook, ...newBook }); // Jika sedang edit, update buku yang ada
    } else {
      addBook(newBook); // Jika tambah buku baru, panggil addBook
    }
    onFinish(); // Panggil onFinish setelah form selesai
    setTitle('');
    setAuthor('');
    setStatus('milik');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedBook ? 'Edit Buku' : 'Tambah Buku'}</h2>
      <label>
        Judul:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Penulis:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </label>
      <button type="submit">Simpan</button>
    </form>
  );
};

BookForm.propTypes = {
  selectedBook: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }),
  onFinish: PropTypes.func.isRequired,
};

export default BookForm;
