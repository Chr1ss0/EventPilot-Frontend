import guitar from '../../assets/img/guitar.jpg';
import starIcon from '../../assets/img/star.svg';
import style from './ReviewItem.module.css';

function ReviewItem({ review }) {
  const date = new Date(review.creationDate);
  const displayDate = date.toLocaleDateString(undefined, {
    dateStyle: 'medium',
  });
  return (
    <>
      <div className={style.reviewOverall}>
        <div className={style.picDiv}>
          <img
            className={style.profilePic}
            src={review.postUser.userInfo.avatar.secure_url}
            alt='Profil Picture'
          />
        </div>
        <div>
          <div className={style.reviewerDiv}>
            <div className={style.nameDiv}>
              <h2 className={style.name}>
                {review.postUser.userInfo.firstName}
              </h2>
              <div className={style.dateDiv}>
                <p className={style.date}>{displayDate}</p>
              </div>
            </div>
            <div className={style.stars}>
              <img
                src={starIcon}
                alt='star'
              />
              <img
                src={starIcon}
                alt='star'
              />
              <img
                src={starIcon}
                alt='star'
              />
              <img
                src={starIcon}
                alt='star'
              />
              <img
                src={starIcon}
                alt='star'
              />
            </div>
          </div>
          <article className={style.review}>
            <p className={style.reviewText}>{review.content}</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default ReviewItem;
