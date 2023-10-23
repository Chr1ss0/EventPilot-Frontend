import { useEffect, useState } from 'react';
import EventListCol from '../layout/EventListCol.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import style from './Searchpage.module.css';

function SearchPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/event/all',
        { credentials: 'include' },
      );
      console.log(response);
      const result = await response.json();
      console.log(result);

      if (!response.ok) return;
      setEvents(result);
    }
    getEvents();
  }, []);
  return (
    <div className={style.pageWrapper}>
      <EventListCol>
        {events.map((event) => (
          <EventItemCol
            key={event._id}
            event={event}
          />
        ))}
      </EventListCol>
    </div>
  );
}

export default SearchPage;
