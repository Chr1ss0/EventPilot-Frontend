import styles from './FilterMenuTime.module.css';

function FilterMenuTime({ filters, setFilters }) {
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
              return { ...prev, startDate: 'today' };
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
              return { ...prev, startDate: 'tomorrow' };
            })
          }>
          <p>Tomorrow</p>
        </button>
        <button
          className={
            filters.startDate === 'week'
              ? styles['filterDayActive']
              : styles['filterDay']
          }
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, startDate: 'week' };
            })
          }>
          <p>This week</p>
        </button>
      </div>
      <div className={styles['DateWrapper']}>
        <form action=''>
          <div>
            <input
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
