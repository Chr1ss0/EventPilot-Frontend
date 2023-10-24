import { useState } from 'react';
import styles from './LikedEvents.module.css';

function LikedEvents() {
  const [active, setActive] = useState(false);
  function clickButton() {
    event.preventDefault();
    setActive((current) => !current);
  }

  return (
    <div className={styles['likedEventsWrapper']}>
      {active ? (
        <button
          onClick={clickButton}
          className={styles['upcomingEventsWrapper']}>
          BOOKMARKED
        </button>
      ) : (
        <button
          onClick={clickButton}
          className={styles.left}>
          BOOKMARKED
        </button>
      )}
      {/* <div className={styles['upcomingEventsWrapper']}>
        <p>UPCOMING</p>
      </div> */}
      {active ? (
        <button
          onClick={clickButton}
          className={styles.right}>
          REGISTERED
        </button>
      ) : (
        <button
          onClick={clickButton}
          className={styles['pastEventsWrapper']}>
          REGISTERED
        </button>
      )}
      {/* <div className={styles['pastEventsWrapper']}>
        <p>PAST EVENENTS</p>
      </div> */}
    </div>
  );
}

export default LikedEvents;
