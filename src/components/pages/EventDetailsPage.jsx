import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { userContext } from '../../context/userContext.jsx';

import MainButton from '../ui/MainButton.jsx';
import BackButton from '../ui/BackButton.jsx';
import BookmarkButton from '../ui/BookmarkButton.jsx';

import style from './EventDetailsPage.module.css';

import date from '../../assets/img/Date.svg';
import location from '../../assets/img/Location Pin.svg';
import follow from '../../functions/follow.js';
import RegisteredUsers from '../shared/RegisteredUsers.jsx';

function EventDetailsPage() {
  const { user, updateUser, setUser } = useContext(userContext);
  const [updateEvent, setUpdateEvent] = useState(false);

  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function getEvent() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/event/single/' + id,
        { credentials: 'include' },
      );
      // console.log(response)

      if (!response.ok) return;

      const result = await response.json();
      // console.log(result);
      setEvent(result);
    }
    getEvent();
  }, [updateEvent]);

  function followHandler() {
    follow(event, updateUser);
  }

  async function registerToEvent() {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/event/register/' + event._id,
      { method: 'POST', credentials: 'include' },
    );
    // console.log(response);
    const result = await response.json();
    console.log(result);
    if (!response.ok) return;
    // setUpdateEvent((prev) => !prev);
    updateUser();
  }

  if (!event) return <></>;

  return (
    <main className={style.pageWrapper}>
      <div className={style.heroWrapper}>
        <img
          src={event.cover.secure_url}
          alt=''
          className={style.heroImg}
        />
        <div className={style.heroNav}>
          <BackButton white={true} />
          <p className={style.pageTitle}>Event Details</p>
          <BookmarkButton event={event} />
        </div>
      </div>
      <div className={style.contentWrapper}>
        <div className={style.registeredWrapper}>
          <RegisteredUsers
            event={event}
            big={true}
          />
        </div>
        <div className={style.contentInfoWrapper}>
          <h1 className={style.eventName}>{event.eventInfo.title}</h1>
          <div className={style.cardWrapper}>
            <div className={style.cardImgWrapper}>
              <img
                src={date}
                alt=''
                className={style.cardImg}
              />
            </div>
            <div className={style.cardInfoWrapper}>
              <h3 className={style.cardHeading}>
                {new Date(event.eventInfo.startDate).toLocaleDateString(
                  undefined,
                  { dateStyle: 'long' },
                )}
              </h3>
              <p className={style.cardSubInfo}>
                {new Date(event.eventInfo.startDate).toLocaleDateString(
                  undefined,
                  { weekday: 'long', hour: '2-digit', minute: '2-digit' },
                )}
              </p>
            </div>
          </div>
          <div className={style.cardWrapper}>
            <div className={style.cardImgWrapper}>
              <img
                src={location}
                alt=''
                className={style.cardImg}
              />
            </div>
            <div className={style.cardInfoWrapper}>
              <h3 className={style.cardHeading}>
                {event.eventInfo.location.placeName}
              </h3>
              <p className={style.cardSubInfo}>
                {event.eventInfo.location.state}
              </p>
            </div>
          </div>
          <div className={style.cardWrapper}>
            <div className={style.cardImgWrapper}>
              <img
                src={event.organizer.userInfo.avatar.secure_url}
                alt=''
                className={style.cardImg}
              />
            </div>
            <div className={style.organizerContentWrapper}>
              <Link
                to={`/user/${event.organizer._id}`}
                className={style.cardInfoWrapper + ' ' + style.organizerLink}>
                <h3
                  className={
                    style.organizerHeading
                  }>{`${event.organizer.userInfo.firstName} ${event.organizer.userInfo.lastName}`}</h3>
                <p className={style.cardSubInfo}>Organizer</p>
              </Link>
              <button
                onClick={followHandler}
                className={style.followButton}>
                {user.connections?.following?.includes(event.organizer._id)
                  ? 'Unfollow'
                  : 'Follow'}
              </button>
            </div>
          </div>
        </div>
        <div className={style.aboutWrapper}>
          <h2 className={style.aboutHeading}>About Event</h2>
          <p className={style.aboutText}>{event.eventInfo.description}</p>
        </div>
        {event.registeredUser.some((object) => object._id === user._id) || (
          <div className={style.registerWrapper}>
            <MainButton onClick={registerToEvent}>register</MainButton>
          </div>
        )}
      </div>
    </main>
  );
}

export default EventDetailsPage;
