import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainButton.module.css';
import ArrowIcon from '../../assets/img/Arrow.svg';

function MainButton({ children }) {
  return (
    <>
      <div className={styles.buttonDiv}>
        <button className={styles.mainButton}>
          <div className={styles.mainButtonDiv}>
            <p className={styles.mainButtonText}>{children}</p>
            <img className={styles.arrowIcon} src={ArrowIcon} alt="arrow" />
          </div>
        </button>
      </div>
    </>
  );
}

export default MainButton;
