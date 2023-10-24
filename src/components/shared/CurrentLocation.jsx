import styles from './CurrentLocation.module.css'

function CurrentLocation() {
  return( 
  <div className={styles['currentLocationWrapper']}>
    <p>Current Location</p>
    <p>Miami, USA</p>
  </div>);
}
export default CurrentLocation;
