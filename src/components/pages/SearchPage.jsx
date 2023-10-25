import { useEffect, useState } from 'react';
import EventListCol from '../layout/EventListCol.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import style from './SearchPage.module.css';
import CurrentLocation from '../shared/CurrentLocation.jsx';
import SearchBar from '../search/SearchBar.jsx';
import FilterButton from '../search/FilterButton.jsx';
import FilterBar from '../search/FilterBar.jsx';
import FilterMenu from '../search/FilterMenu.jsx';

function SearchPage() {
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
    <div className={style.pageWrapper}>
      <div>
        <CurrentLocation />
        <div>
          <SearchBar />
          <FilterButton />
        </div>
        <FilterBar />
      </div>
      <FilterMenu />
      <div className={style.contentWrapper}>
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

export default SearchPage;
