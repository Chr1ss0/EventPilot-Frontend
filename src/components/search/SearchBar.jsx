import { useRef } from 'react';
import style from './SearchBar.module.css';

function SearchBar({ updateSearch, setFilters }) {
  const searchRef = useRef();

  function search() {
    setFilters((prev) => {
      return { ...prev, title: searchRef.current.value };
    });
    updateSearch();
  }

  return (
    <>
      <div className={style['searchBarWrapper']}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z'
            stroke='#fff'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            opacity='1'
            d='M17.5 17.5L13.875 13.875'
            stroke='#fff'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <input
          ref={searchRef}
          onChange={search}
          type='text'
          placeholder='Search...'
        />
      </div>
    </>
  );
}

export default SearchBar;
