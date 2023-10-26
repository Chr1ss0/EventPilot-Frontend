import { useContext, useEffect, useState } from 'react';
import BackButton from '../ui/BackButton.jsx';
import ProfilButton from '../ui/ProfileButton.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileInfo from '../profile/ProfileInfo.jsx';
import { userContext } from '../../context/userContext.jsx';
import EventListCol from '../layout/EventListCol.jsx';
import ReviewItem from '../profile/ReviewItem.jsx';
import InterestList from '../layout/InterestList.jsx';
import InterestItem from '../profile/InterestItem.jsx';
import style from './ProfilePage.module.css';
import EventItemCol from '../shared/EventItemCol.jsx';

function ProfilePage() {
  const { id, profileTab } = useParams();
  console.log(profileTab);
  const { user, updateUser, setUser } = useContext(userContext);
  const [profile, setProfile] = useState(null);
  const [tab, setTab] = useState(profileTab || 'about');
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/api/user/single/${id}`,
        { credentials: 'include' },
      );
      const result = await response.json();
      if (result.message === 'Token invalid.') return navigate('/signin');
      if (!response.ok) return console.error(result);
      console.log(result);
      setProfile(result);
    }
    getProfile();
  }, [update, id]);

  async function follow() {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/user/follow/' + profile._id,
      { method: 'POST', credentials: 'include' },
    );
    // console.log(response);
    const result = await response.json();
    console.log(result);
    if (result.message === 'Token invalid.') return navigate('/signin');
    if (!response.ok) return;
    updateUser();
    setUpdate((prev) => !prev);
  }

  function review() {
    navigate(`/user/${id}/review`);
  }

  function editProfile() {
    navigate('/profile/edit');
  }

  async function logout() {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/api/user/logout`,
      { credentials: 'include' },
    );
    console.log(response);
    const result = await response.json();

    if (!response.ok) return console.error(result.message);
    console.log(result);
    navigate('/signin');
  }

  if (!profile) return;

  return (
    <div className={style.pageWrapper}>
      <div className={style.headerWrapper}>
        <BackButton />
        <p className={style.userName}>
          {profile.userInfo.firstName} {profile.userInfo.lastName}
        </p>
        <div>{/*don't delete for allignment */}</div>
      </div>
      <div>
        <ProfileInfo
          user={profile}
          vertical={true}
        />
      </div>
      {id === user._id ? (
        <div className={style.buttonsWrapper}>
          {/* edit, star, follow und lock icon hinterlegt */}
          <ProfilButton
            onClick={editProfile}
            edit={true}>
            Edit Profile
          </ProfilButton>
          <ProfilButton
            onClick={logout}
            loggout={true}>
            Logout
          </ProfilButton>
        </div>
      ) : (
        <div className={style.buttonsWrapper}>
          {/* edit, star, follow und lock icon hinterlegt */}
          <ProfilButton
            onClick={follow}
            follow={true}
            followActive={user.connections.following.includes(profile._id)}>
            {user.connections.following.includes(profile._id)
              ? 'Followed'
              : 'Follow'}
          </ProfilButton>
          <ProfilButton
            onClick={review}
            review={true}>
            Review
          </ProfilButton>
        </div>
      )}
      <div className={style.tabsWrapper}>
        <nav className={style.navWrapper}>
          <button
            className={
              style.navButton + ' ' + (tab === 'about' && style.navButtonActive)
            }
            type='button'
            onClick={() => setTab('about')}>
            About
          </button>
          <button
            className={
              style.navButton +
              ' ' +
              (tab === 'events' && style.navButtonActive)
            }
            type='button'
            onClick={() => setTab('events')}>
            Events
          </button>
          <button
            className={
              style.navButton +
              ' ' +
              (tab === 'reviews' && style.navButtonActive)
            }
            type='button'
            onClick={() => setTab('reviews')}>
            Reviews
          </button>
        </nav>
        {tab === 'about' ? (
          <>
            <div className={style.aboutToping}>
              <h2 className={style.aboutHeading}>Interests</h2>
              <InterestList>
                {profile.userInfo.interest.map((interest, index) => (
                  <InterestItem key={interest + index}>{interest}</InterestItem>
                ))}
              </InterestList>
            </div>
            <div className={style.aboutToping}>
              <h2 className={style.aboutHeading}>About Me</h2>

              <p className={style.aboutMeText}>{profile.userInfo.aboutMe}</p>
            </div>
          </>
        ) : tab === 'events' ? (
          <EventListCol>
            {profile.createdEvents.map((event) => (
              <EventItemCol
                event={event}
                key={event._id}
              />
            ))}
          </EventListCol>
        ) : tab === 'reviews' ? (
          <EventListCol>
            {profile.reviews.map((review) => (
              <ReviewItem
                key={review._id}
                review={review}
              />
            ))}
          </EventListCol>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
