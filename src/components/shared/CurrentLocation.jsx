import styles from './CurrentLocation.module.css';

function CurrentLocation({ light = true }) {
  return (
    <div className={styles['currentLocationWrapper']}>
      <p
        className={
          light ? styles.lightCurrentLocation : styles.darkCurrentLocation
        }>
        Current Location
      </p>
      <p className={light ? styles.lightTown : styles.darkTown}>Miami, USA</p>
    </div>
  );
}
export default CurrentLocation;
