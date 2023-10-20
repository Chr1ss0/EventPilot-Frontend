import titlePicture from '../../assets/img/EventImg.svg'
import styles from './EventItemRow.module.css'
import pin from '../../assets/img/Location.svg'
import BookmarkButton from '../ui/BookmarkButton'


function EventItemRow() {
  return (
  <div>
    <div className={styles['eventContainer']}>
      <div className={styles['eventContentContainer']}>
        <div className={styles['bookmarkButtonContainer']}>
          <BookmarkButton/>
        </div>
        <img src={titlePicture} alt="titlepicture" />
          <div className={styles['EventDateContainer']}>
            <p>18 <span>July</span></p>
            {/* Date Lgoic */}
          </div>
      </div>
          <div className={styles['eventRowInfoContainerWraper']}>
            <h4>Lorem Ipsum Party</h4>
              <div className={styles['eventPlaceVisitorContainer']}>
                <p>99+</p>
                {/* Visitors Logic */}
                <div className={styles['eventPlaceContainer']}>
                  <img src={pin} alt="Pin" />
                  <p>Lorem, Place</p>
                  {/* Place Logic */}
                </div>
              </div>
          </div>
        <div>
      </div>
    </div>
  </div>
  )
}

export default EventItemRow;
