import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ filter, setFilter, search, setSearch }) => {
  return (
    <div>
      <label>
        Filter Status:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="semua">Semua</option>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </label>

      <label>
        Cari Judul:
        <input
          type="text"
          value={search}
          placeholder="Cari buku..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default BookFilter;
