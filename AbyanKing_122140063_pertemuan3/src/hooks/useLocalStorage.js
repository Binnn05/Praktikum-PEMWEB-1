import { useState } from 'react';

// Custom hook untuk menggunakan localStorage
const useLocalStorage = (key, initialValue) => {
  // Mengambil data dari localStorage saat aplikasi pertama kali dijalankan
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  // Menggunakan useState untuk state lokal
  const [value, setValue] = useState(parsedValue);

  const setStoredValue = (newValue) => {
    // Memperbarui state dan menyimpan ke localStorage
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // Menyimpan nilai baru ke localStorage
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
