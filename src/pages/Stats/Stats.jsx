import React from 'react';
import useBookStats from '../../hooks/useBookStats';

const Stats = () => {
  const { owned, reading, toBuy } = useBookStats();

  return (
    <div>
      <h1>📊 Statistik Buku</h1>
      <ul>
        <li>Dimiliki: {owned} buku</li>
        <li>Sedang Dibaca: {reading} buku</li>
        <li>Ingin Dibeli: {toBuy} buku</li>
      </ul>
    </div>
  );
};

export default Stats;
