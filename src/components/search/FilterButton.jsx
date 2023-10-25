import React from 'react';
import styles from './FilterButton.module.css';
import FilterIcon from '../../assets/img/FilterIcon.svg';

const FilterButton = ({ onClick }) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={onClick}>
        <img
          src={FilterIcon}
          alt='filter icon'
        />
        <p className={styles.text}>Filter</p>
      </button>
    </>
  );
};

export default FilterButton;
