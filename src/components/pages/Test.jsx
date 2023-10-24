import React from 'react';
import FilterMenuButton from '../search/FilterMenuButton';

export default function Test() {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <FilterMenuButton category='sports' />
        <FilterMenuButton category='music' />
        <FilterMenuButton category='art' />
        <FilterMenuButton category='food' />
      </div>
    </>
  );
}
