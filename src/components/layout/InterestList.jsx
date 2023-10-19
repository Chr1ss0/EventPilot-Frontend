import style from './InterestList.module.css';

function InterestList({ children }) {
  return <div className={style.list}>{children}</div>;
}

export default InterestList;
