import { Link } from 'react-router-dom';
import titlePicture from '../../assets/img/EventImg.svg';
import styles from './EventItemRow.module.css';
import pin from '../../assets/img/Location.svg';
import BookmarkButton from '../ui/BookmarkButton';
import RegisteredUsers from '../shared/RegisteredUsers.jsx';

function EventItemRow({ event }) {
  const startDate = new Date(event.eventInfo.startDate);
  console.log(startDate);
  return (
    <div>
      <div className={styles['eventContainer']}>
        <div className={styles['eventContentContainer']}>
          <div className={styles['bookmarkButtonContainer']}>
            <BookmarkButton event={event} />
          </div>
          <img
            src={titlePicture}
            alt='titlepicture'
          />
          <div className={styles['EventDateContainer']}>
            <p>
              {startDate.getDate()}{' '}
              <span>
                {startDate.toLocaleString(undefined, { month: 'short' })}
              </span>
            </p>
          </div>
        </div>
        <Link
          to={`/events/details/${event._id}`}
          className={styles['eventRowInfoContainerWraper']}>
          <h4>{event.eventInfo.title}</h4>
          <div className={styles['eventPlaceVisitorContainer']}>
            <RegisteredUsers event={event} />
            <div className={styles['eventPlaceContainer']}>
              <img
                src={pin}
                alt='Pin'
              />
              <p>{event.eventInfo.location.placeName}</p>
            </div>
          </div>
        </Link>
        <div></div>
      </div>
    </div>
  );
}

export default EventItemRow;
