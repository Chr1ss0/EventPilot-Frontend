import { useEffect, useState } from 'react';
import EventListCol from '../layout/EventListCol.jsx';
import EventItemCol from '../shared/EventItemCol.jsx';
import style from './SearchPage.module.css';
import CurrentLocation from '../shared/CurrentLocation.jsx';
import SearchBar from '../search/SearchBar.jsx';
import FilterButton from '../search/FilterButton.jsx';
import FilterBar from '../search/FilterBar.jsx';
import FilterMenu from '../search/FilterMenu.jsx';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const [filterMenu, setFilterMenu] = useState(false);
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    startDate: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    const filtersEmpty = Object.values(filters).every((cur) => '' === cur);
    const filterQuery = Object.entries(filters)
      .map((entry) => `${entry[0]}=${entry[1]}`)
      .join('&');

    let url;
    if (filtersEmpty) {
      url = `${import.meta.env.VITE_BACKEND_URL}/api/event/all`;
    } else {
      url = `${
        import.meta.env.VITE_BACKEND_URL
      }/api/event/filtered?${filterQuery}`;
    }
    console.log({ url });

    async function getEvents() {
      const response = await fetch(url, { credentials: 'include' });
      // console.log(response);
      const result = await response.json();
      if (result.message === 'Token invalid.') return navigate('/signin');
      console.log(result);
      if (!response.ok) return;
      setEvents(result);
    }
    getEvents();
  }, [filters]);

  return (
    <div className={style.pageWrapper}>
      <article className={style.upper}>
        <div>
          <CurrentLocation light={false}></CurrentLocation>
          <div className={style.searchLine}>
            <SearchBar />
            <FilterButton onClick={() => setFilterMenu((prev) => !prev)} />
          </div>
          <div className={style.bar}>
            <FilterBar
              filter={filters}
              setFilters={setFilters}
            />
          </div>
        </div>
      </article>
      <FilterMenu
        display={filterMenu}
        filters={filters}
        setFilters={setFilters}
      />
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
