import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

const Home = () => {
  const [filter, setFilter] = useState('semua');
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleFinishForm = () => {
    setSelectedBook(null); 
  };

  return (
    <div>
      <h1>📚 Manajemen Buku Pribadi</h1>

      <BookForm selectedBook={selectedBook} onFinish={handleFinishForm} />

      <hr />

      <BookFilter
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      <BookList
        onEdit={handleEdit}
        filter={filter}
        search={search}
      />
    </div>
  );
};

export default Home;
