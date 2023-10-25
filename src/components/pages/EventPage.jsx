import LikedEvents from '../ui/LikedEvents.jsx';
import MainButton from '../ui/MainButton.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import EventListCol from '../layout/EventListCol.jsx';

import style from './EventPage.module.css';
import { useEffect, useState } from 'react';

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/event/all',
        { credentials: 'include' },
      );
      // console.log(response);
      const result = await response.json();
      // console.log(result);

      if (!response.ok) return;
      setEvents(result);
    }
    getEvents();
  }, []);

  return (
    <>
      <main className={style.main}>
        <article className={style.upper}>
          <h1>Upcoming Events</h1>
          <LikedEvents />
        </article>
        <article className={style.middle}>
          <div className={style.noEvents}>
            <h2>No Upcoming Events</h2>
            <p>There are no Events yet!</p>
          </div>
          <div>
            <EventListCol>
              {events.map((event) => (
                <EventItemCol
                  key={event._id}
                  event={event}
                />
              ))}
            </EventListCol>
          </div>
        </article>
        <article className={style.bottom}>
          {/* <MainButton>search events</MainButton> */}
        </article>
      </main>
    </>
  );
}

export default EventPage;
