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
  const [displayMenu, setDisplayMenu] = useState(false);
  const [events, setEvents] = useState(null);
  const [search, setSearch] = useState(false);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    startDate: 'available',
    endDate: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  function updateSearch() {
    setSearch((prev) => !prev);
  }

  useEffect(() => {
    console.log(filters);
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
  }, [search]);

  return (
    <div className={style.pageWrapper}>
      <article className={style.upper}>
        <div>
          <CurrentLocation light={false}></CurrentLocation>
          <div className={style.searchLine}>
            <SearchBar
              setFilters={setFilters}
              updateSearch={updateSearch}
            />
            <FilterButton onClick={() => setDisplayMenu((prev) => !prev)} />
          </div>
          <div className={style.bar}>
            <FilterBar
              filter={filters}
              setFilters={setFilters}
              updateSearch={updateSearch}
            />
          </div>
        </div>
      </article>
      <FilterMenu
        display={displayMenu}
        setDisplayMenu={setDisplayMenu}
        filters={filters}
        setFilters={setFilters}
        updateSearch={updateSearch}
      />
      <div className={style.contentWrapper}>
        {events &&
          (events.length > 0 ? (
            <EventListCol>
              {events.map((event) => (
                <EventItemCol
                  key={event._id}
                  event={event}
                />
              ))}
            </EventListCol>
          ) : (
            <div className={style.noEvents}>
              <h2>No Events found</h2>
              <p>Please change your filters</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
