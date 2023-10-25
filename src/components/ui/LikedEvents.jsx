import { useState } from 'react';
import styles from './LikedEvents.module.css';

function LikedEvents({ state, setState }) {
  function clickButton() {
    setState((current) => !current);
  }

  return (
    <div className={styles['likedEventsWrapper']}>
      <button
        type='button'
        onClick={clickButton}
        className={state ? styles.right : styles['pastEventsWrapper']}>
        REGISTERED
      </button>
      <button
        type='button'
        onClick={clickButton}
        className={state ? styles['upcomingEventsWrapper'] : styles.left}>
        BOOKMARKED
      </button>
    </div>
  );
}

export default LikedEvents;
