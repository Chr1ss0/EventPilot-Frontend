import { useRef } from 'react';
import styles from './FilterMenuTime.module.css';

function FilterMenuTime({ filters, setFilters }) {
  const date = new Date();
  const startDate = new Date();
  const lastday = date.getDate() - (date.getDay() - 1) + 6;
  const endDate = new Date(date.setDate(lastday));
  endDate.setMilliseconds(0);
  endDate.setSeconds(0);
  endDate.setMinutes(59);
  endDate.setHours(23);
  const dateRef = useRef();

  function setDate() {
    const currentDate = new Date();
    const userDate = new Date(dateRef.current.value);
    if (userDate.getTime() >= currentDate.getTime()) {
      const futureDate = new Date(dateRef.current.value);
      futureDate.setFullYear(futureDate.getFullYear() + 100);
      setFilters((prev) => {
        return {
          ...prev,
          startDate: userDate.toISOString(),
          endDate: futureDate.toISOString(),
        };
      });
    }
  }

  return (
    <div className={styles['filterMenuTimeWrapper']}>
      <div className={styles['headlineWrapper']}>
        <p>Time & Date</p>
      </div>
      <div className={styles['filterDayWrapper']}>
        <button
          className={
            filters.startDate === 'today'
              ? styles['filterDayActive']
              : styles['filterDay']
          }
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, startDate: 'today', endDate: '' };
            })
          }>
          <p>Today</p>
        </button>
        <button
          className={
            filters.startDate === 'tomorrow'
              ? styles['filterDayActive']
              : styles['filterDay']
          }
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, startDate: 'tomorrow', endDate: '' };
            })
          }>
          <p>Tomorrow</p>
        </button>
        <button
          className={
            filters.endDate === endDate.toISOString()
              ? styles['filterDayActive']
              : styles['filterDay']
          }
          onClick={() =>
            setFilters((prev) => {
              return {
                ...prev,
                startDate: startDate,
                endDate: endDate.toISOString(),
              };
            })
          }>
          <p>This week</p>
        </button>
      </div>
      <div className={styles['DateWrapper']}>
        <form>
          <div>
            <input
              ref={dateRef}
              onChange={setDate}
              type='date'
              placeholder='Choose from calendar'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterMenuTime;
