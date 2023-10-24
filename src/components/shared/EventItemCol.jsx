import styles from './EventItemCol.module.css';
import guitar from '../../assets/img/guitar.jpg';
import BookmarkButton from '../ui/BookmarkButton.jsx';
import LocationIcon from '../../assets/img/Location.svg';
import { Link } from 'react-router-dom';

function EventItemCol({ event }) {
  // console.log(event);
  const startDate = new Date(event.eventInfo.startDate);
  const startDateDisplay = startDate.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  // const startDateDisplay = `${}`
  return (
    <>
      <div
        to={`/events/details/${event._id}`}
        className={styles.eventDiv}>
        <Link
          to={`/events/details/${event._id}`}
          className={styles.picDiv}>
          <img
            className={styles.eventPic}
            src={event.cover.secure_url}
            loading='lazy'
          />
        </Link>
        <Link
          to={`/events/details/${event._id}`}
          className={styles.eventText}>
          <p className={styles.startingText}>{startDateDisplay}</p>
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
        </Link>
        <div className={styles.bookmark}>
          <BookmarkButton event={event} />
        </div>
      </div>
    </>
  );
}

export default EventItemCol;
