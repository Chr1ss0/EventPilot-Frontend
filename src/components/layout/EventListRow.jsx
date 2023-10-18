import style from './EventListRow.module.css';

function EventListRow({ children }) {
  return <div className={style.row}>{children}</div>;
}

export default EventListRow;
