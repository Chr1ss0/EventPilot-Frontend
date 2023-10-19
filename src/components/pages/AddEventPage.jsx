import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';

import barsIcon from '../../assets/img/barsIcon.svg';
import locationIcon from '../../assets/img/Location.svg';
import calenderIcon from '../../assets/img/Calender.svg';
import imageIcon from '../../assets/img/ImageIcon.svg';

function AddEventPage() {
  const currentTime = new Date();
  const timezoneoffset = currentTime.getTimezoneOffset();
  console.log(timezoneoffset);
  currentTime.setMinutes(
    currentTime.getMinutes() - currentTime.getTimezoneOffset() + 60,
  );
  currentTime.setMinutes(30);
  currentTime.setMilliseconds(null);
  currentTime.setSeconds(null);

  return (
    <div>
      <div className={styles['addevent-container']}>
        <h1>
          Add <span>Event</span>
        </h1>
      </div>
      <form className={styles['form']}>
        <div className={styles['form-container']}>
          <div className={styles['inputDiv']}>
            <img src={barsIcon} alt="barsicon" />
            <input type="text" placeholder="Event Name" />
          </div>
          <div className={styles['inputDiv']}>
            <img src={barsIcon} alt="barsicon" />
            <select name="category" id="category">
              <option value=""></option>
              <option value="sport">Sport</option>
              <option value="music">Music</option>
              <option value="art">Art</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div className={styles['inputDiv']}>
            <img src={locationIcon} alt="Location" />
            <input type="text" placeholder="Location" />
          </div>
          <div className={styles['inputDiv']}>
            <img src={calenderIcon} alt="kalender" />
            <input
              name="startDate"
              type="datetime-local"
              defaultValue={currentTime.toISOString().slice(0, 16)}
            />
          </div>
          <div className={styles['inputDiv']}>
            <img src={calenderIcon} alt="kalender" />
            <input
              name="endDate"
              type="datetime-local"
              defaultValue={currentTime.toISOString().slice(0, 16)}
            />
          </div>

          <div className={styles['aboutInputDiv']}>
            <img src={barsIcon} alt="barsicon" />
            <textarea placeholder="About"></textarea>
          </div>
          <div className={styles['inputDiv']}>
            <img src={imageIcon} alt="file" />
            <label htmlFor="eventImage">Click to upload your file</label>
            <input type="file" name="image" id="eventImage" />
          </div>
        </div>
        <div className={styles['button-container']}>
          <div className={styles['button-signin']}>
            <MainButton showArrow={true}>Add </MainButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEventPage;
