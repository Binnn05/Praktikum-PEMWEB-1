import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

// Custom hook untuk mendapatkan statistik buku berdasarkan status
const useBookStats = () => {
  const { books } = useContext(BookContext); // Mengakses data buku dari context

  // Menghitung jumlah buku berdasarkan status
  const owned = books.filter((book) => book.status === 'milik').length;
  const reading = books.filter((book) => book.status === 'baca').length;
  const toBuy = books.filter((book) => book.status === 'beli').length;

  return { owned, reading, toBuy }; // Mengembalikan statistik buku
};

export default useBookStats;
