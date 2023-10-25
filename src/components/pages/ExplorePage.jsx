import { useEffect, useState } from 'react';
import EventListRow from '../layout/EventListRow.jsx';
import EventItemRow from '../explore/EventItemRow.jsx';
import CurrentLocation from '../shared/CurrentLocation.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import EventListCol from '../layout/EventListCol.jsx';
import styling from './ExplorePage.module.css'

import logo from '../../assets/img/Logo.svg';

function ExplorePage() {
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
    <div className={styling['explorePageWrapper']}>
      <div className={styling['logoStyling']}>
        <img
          src={logo}
          alt=''
        />
        <CurrentLocation />
      </div>
      <div className={styling['upcomingEventsWrapper']}>
        <h2>Upcoming Events</h2>
        <EventListRow>
          {events.map((event) => (
            <EventItemRow
              event={event}
              key={event._id}
            />
          ))}
        </EventListRow>
      </div>
      <div className={styling['eventListRowWrapper']}>
        <h2>Nearby you</h2>
        <EventListRow>
          {events.map((event) => (
            <EventItemRow
              event={event}
              key={event._id}
            />
          ))}
        </EventListRow>
      </div>
      <div className={styling['eventListColWrapper']}>
        <EventListCol>
          {events.map((event) => (
            <EventItemCol
              key={event._id}
              event={event}
            />
          ))}
        </EventListCol>
      </div>
    </div>
  );
}

export default ExplorePage;
