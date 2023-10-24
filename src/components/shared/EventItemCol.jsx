import styles from './EventItemCol.module.css';
import guitar from '../../assets/img/guitar.jpg';
import BookmarkButton from '../ui/BookmarkButton.jsx';
import LocationIcon from '../../assets/img/Location.svg';
import { Link } from 'react-router-dom';

function EventItemCol({ event }) {
  return (
    <>
      <Link
        to={`/events/details/${event._id}`}
        className={styles.eventDiv}>
        <div className={styles.picDiv}>
          <img
            className={styles.eventPic}
            src={event.cover.secure_url}
          />
        </div>
        <div className={styles.eventText}>
          <p className={styles.startingText}>{event.eventInfo.startDate}</p>
          <h2 className={styles.eventName}>{event.eventInfo.title}</h2>
          <div className={styles.locationDiv}>
            <img
              className={styles.icon}
              src={LocationIcon}
              alt='location icon'
            />
            <p className={styles.locationText}>
              {event.eventInfo.location.placeName}
            </p>
          </div>
        </div>
        <div className={styles.bookmark}>
          <BookmarkButton event={event} />
        </div>
      </Link>
    </>
  );
}

export default EventItemCol;
