import { useEffect, useState } from 'react';
import EventListRow from '../layout/EventListRow.jsx';
import EventItemRow from '../explore/EventItemRow.jsx';

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
    <>
      <EventListRow>
        {events.map((event) => (
          <EventItemRow
            event={event}
            key={event._id}
          />
        ))}
      </EventListRow>
    </>
  );
}

export default ExplorePage;
