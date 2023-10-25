import LikedEvents from '../ui/LikedEvents.jsx';
import MainButton from '../ui/MainButton.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import EventListCol from '../layout/EventListCol.jsx';

import style from './EventPage.module.css';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/userContext.jsx';

function EventPage() {
  const { updateUser } = useContext(userContext);
  const [events, setEvents] = useState(null);
  const [showBookmarked, setShowBookmarked] = useState(false);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/watchlist',
        { credentials: 'include' },
      );
      // console.log(response);
      const result = await response.json();
      console.log(result);

      if (!response.ok) return;
      setEvents(result);
    }
    getEvents();
  }, []);

  if (!events) return;

  return (
    <>
      <main className={style.main}>
        <article className={style.upper}>
          <h1>Upcoming Events</h1>
          <LikedEvents
            state={showBookmarked}
            setState={setShowBookmarked}
          />
        </article>
        <article className={style.middle}>
          <div>
            <EventListCol>
              {showBookmarked ? (
                events.bookmarks.length !== 0 ? (
                  events.bookmarks.map((event) => (
                    <EventItemCol
                      key={event._id}
                      event={event}
                    />
                  ))
                ) : (
                  <div className={style.noEvents}>
                    <h2>No Upcoming Events</h2>
                    <p>There are no Events yet!</p>
                  </div>
                )
              ) : events.bookedEvents.length !== 0 ? (
                events.bookedEvents.map((event) => (
                  <EventItemCol
                    key={event._id}
                    event={event}
                  />
                ))
              ) : (
                <div className={style.noEvents}>
                  <h2>No Upcoming Events</h2>
                  <p>There are no Events yet!</p>
                </div>
              )}
            </EventListCol>
          </div>
        </article>
        {/* <article className={style.bottom}>
          <MainButton>search events</MainButton>
        </article> */}
      </main>
    </>
  );
}

export default EventPage;
