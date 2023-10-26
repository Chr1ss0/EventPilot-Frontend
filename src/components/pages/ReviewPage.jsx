import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../ui/BackButton.jsx';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/userContext.jsx';
import ProfileInfo from '../profile/ProfileInfo.jsx';
import MainButton from '../ui/MainButton.jsx';
import Rating from '../ui/Rating.jsx';
import style from './ReviewPage.module.css';
import star from '../../assets/img/starGrey.svg';

function ReviewPage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const { user, updateUser, setUser } = useContext(userContext);
  const [rating, setRating] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/api/user/single/${id}`,
        { credentials: 'include' },
      );
      const result = await response.json();
      if (!response.ok) return console.error(result);
      if (result.message === 'Token invalid.') return navigate('/signin');
      console.log(result);
      setProfile(result);
    }
    getProfile();
  }, []);

  async function review(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append('rating', rating);
    form.append('receiver', profile._id);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/api/user/review`,
      { method: 'POST', credentials: 'include', body: form },
    );
    const result = await response.json();
    if (!response.ok) return console.error(result);
    if (result.message === 'Token invalid.') return navigate('/signin');
    console.log(result);
    navigate(`/user/${profile._id}/reviews`);
  }

  if (!profile) return;

  return (
    <>
      <article className={style.upper}>
        <div className={style.top}>
          <BackButton />
          <h1>
            Review{' '}
            {`${profile.userInfo.firstName} ${profile.userInfo.lastName}`}
          </h1>
        </div>
        <div>
          <ProfileInfo
            vertical={false}
            user={profile}
          />
        </div>
      </article>
      <article className={style.middle}>
        <div className={style.rating}>
          <Rating
            rating={rating}
            setRating={setRating}
          />
        </div>
        <form
          className={style.form}
          onSubmit={review}>
          <div className={style.textInput}>
            <img
              className={style.greyStar}
              src={star}
              alt='greystar Icon'
            />
            <textarea
              placeholder='Your Review'
              className={style.textArea}
              name='content'
              id=''
              rows='18'></textarea>
          </div>
          <div>
            <MainButton>Submit</MainButton>
          </div>
        </form>
      </article>
    </>
  );
}

export default ReviewPage;
