import styles from './LikedEvents.module.css'

function LikedEvents() {
  return (
  <div className={styles['likedEventsWrapper']}>
    <div className={styles['upcomingEventsWrapper']}>
    <p>UPCOMING</p>
    </div>
    <div className={styles['pastEventsWrapper']}>
    <p>PAST EVENENTS</p>
    </div>
  </div>
  );
}

export default LikedEvents;
