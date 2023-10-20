import titlePicture from '../../assets/img/EventImg.svg'
import styles from './EventItemRow.module.css'

function EventItemRow() {
  return (
  <div>
    <div className={styles['eventContainer']}>
      <div className={styles['eventContentContainer']}>
        <img src={titlePicture} alt="titlepicture" />
        <p>Lorem Date</p>
          </div>
          <div className={styles['eventRowInfoContainer']}>
          <h4>Lorem Ipsum Party</h4>
          <div className={styles['eventDateVisitorContainer']}>
          <p>Lorem Guesst</p>
          <img src="" alt="" />
          <p>Lorem, Ort</p>
          </div>
          </div>
        <div>
      </div>
    </div>
  </div>
  )
}

export default EventItemRow;
