import { Link } from 'react-router-dom';
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
      <Link
        to={`/user/${review.postUser._id}`}
        className={style.reviewOverall}>
        <div className={style.picDiv}>
          <img
            className={style.profilePic}
            src={review.postUser.userInfo.avatar.secure_url}
            alt='Profil Picture'
          />
        </div>
        <div className={style.reviewContent}>
          <div className={style.nameDiv}>
            <h2 className={style.name}>{review.postUser.userInfo.firstName}</h2>
            <div className={style.dateDiv}>
              <p className={style.date}>{displayDate}</p>
            </div>
          </div>
          <div className={style.stars}>
            {[...Array(review.rating)].map((point, index) => (
              <img
                key={index}
                src={starIcon}
                alt='star'
              />
            ))}
            {/* <img
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
              /> */}
          </div>
          <article className={style.review}>
            <p className={style.reviewText}>{review.content}</p>
          </article>
        </div>
      </Link>
    </>
  );
}

export default ReviewItem;
