import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';

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
      <form action="" className={styles['form']}>
        <div className={styles['form-container']}>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/barsIcon.svg" alt="barsicon" />
            <input type="text" placeholder="Event Name" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/barsIcon.svg" alt="barsicon" />
            <input type="select" placeholder="Category" />
            {/* Put Category Select */}
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Location.svg" alt="Location" />
            <input type="text" placeholder="Location" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Calender.svg" alt="kalender" />
            <input
              name="startDate"
              type="datetime-local"
              defaultValue={currentTime.toISOString().slice(0, 16)}
            />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Calender.svg" alt="kalender" />
            <input
              name="endDate"
              type="datetime-local"
              defaultValue={currentTime.toISOString().slice(0, 16)}
            />
          </div>

          <div className={styles['aboutInputDiv']}>
            <img src="src/assets/img/barsIcon.svg" alt="barsicon" />
            <textarea placeholder="About"></textarea>
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
