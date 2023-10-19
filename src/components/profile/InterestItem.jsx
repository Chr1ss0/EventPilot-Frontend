import style from './InterestItem.module.css';
import interestX from '../../assets/img/InterestX.svg';

function InterestItem({ children, edit = false }) {
  async function removeInterest() {}

  return (
    <>
      {edit ? (
        <button className={style.item} type="button" onClick={removeInterest}>
          {children}
          <img src={interestX} alt="remove interest" />
        </button>
      ) : (
        <div className={style.item}>{children}</div>
      )}
    </>
  );
}

export default InterestItem;
