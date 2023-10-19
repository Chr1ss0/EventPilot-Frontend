import styles from './EventItemCol.module.css';
import guitar from '../../assets/img/guitar.jpg';
import BookmarkButton from '../ui/BookmarkButton.jsx';
import LocationIcon from '../../assets/img/Location.svg';

function EventItemCol({ event }) {
  return (
    <>
      <div className={styles.eventDiv}>
        <div className={styles.picDiv}>
          <img className={styles.eventPic} src={guitar} />
        </div>
        <div className={styles.eventText}>
          <p className={styles.startingText}>starting at</p>
          <h2 className={styles.eventName}>Event Name</h2>
          <div className={styles.locationDiv}>
            <img
              className={styles.icon}
              src={LocationIcon}
              alt="location icon"
            />
            <p className={styles.locationText}>Location</p>
          </div>
        </div>
        <div className={styles.bookmark}>
          <BookmarkButton />
        </div>
      </div>
    </>
  );
}

export default EventItemCol;
