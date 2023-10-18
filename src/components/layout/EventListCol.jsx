import style from './EventListCol.module.css';

function EventListCol({ children }) {
  return <div className={style.col}>{children}</div>;
}

export default EventListCol;
