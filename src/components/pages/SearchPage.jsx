import EventItemCol from '../shared/EventItemCol';
import styles from './Searchpage.module.css';

function SearchPage() {
  return (
    <>
      <div className={styles.eventItem}>
        <EventItemCol />
      </div>
    </>
  );
}

export default SearchPage;
