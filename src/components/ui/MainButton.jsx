import React from 'react';
import styles from './MainButton.module.css';
import ArrowIcon from '../../assets/img/Arrow.svg';

function MainButton({ children, showArrow = true }) {
  return (
    <>
      <button className={styles.mainButton}>
        <div className={styles.mainButtonDiv}>
          <p
            className={
              showArrow ? styles.mainButtonText : styles.mainButtonWithoutArrow
            }
          >
            {children}
          </p>
          {showArrow && (
            <img className={styles.arrowIcon} src={ArrowIcon} alt="arrow" />
          )}
        </div>
      </button>
    </>
  );
}

export default MainButton;
