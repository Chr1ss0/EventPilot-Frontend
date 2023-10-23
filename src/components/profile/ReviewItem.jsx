import guitar from '../../assets/img/guitar.jpg';
import starIcon from '../../assets/img/star.svg';
import style from './ReviewItem.module.css';

function ReviewItem() {
  return (
    <>
      <div className={style.reviewOverall}>
        <div className={style.picDiv}>
          <img className={style.profilePic} src={guitar} alt="Profil Picture" />
        </div>
        <div>
          <div className={style.reviewerDiv}>
            <div className={style.nameDiv}>
              <h2 className={style.name}>Name</h2>
              <div className={style.dateDiv}>
                <p className={style.date}>Datum</p>
              </div>
            </div>
            <div className={style.stars}>
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
              <img src={starIcon} alt="star" />
            </div>
          </div>
          <article className={style.review}>
            <p className={style.reviewText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In atque
              ea provident soluta ipsam deserunt totam ipsum officiis ad fuga?
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default ReviewItem;
