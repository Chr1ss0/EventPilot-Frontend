import React from 'react';
import styles from './FilterButton.module.css';
import FilterIcon from '../../assets/img/FilterIcon.svg';

const FilterButton = () => {
  return (
    <>
      <button className={styles.button}>
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
