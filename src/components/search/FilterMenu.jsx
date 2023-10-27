import MainButton from '../ui/MainButton.jsx';
import FilterLocationMenu from './FilterLocationMenu.jsx';
import FilterMenuCategory from './FilterMenuCategory.jsx';
import FilterMenuTime from './FilterMenuTime.jsx';

import style from './FilterMenu.module.css';

function FilterMenu({
  filters,
  setFilters,
  display = false,
  setDisplayMenu,
  updateSearch,
  searchRef,
}) {
  return (
    <div className={style.wrapper + ' ' + (display ? style.active : '')}>
      <h2 className={style.mainHeading}>Filter</h2>
      <div className={style.sectionWrapper}>
        <div className={style.section}>
          <h3 className={style.sectionTitle}>Category</h3>
          <div className={style.categories}>
            <FilterMenuCategory
              active={filters.category === 'Sport'}
              category='sports'
              onClick={() =>
                setFilters((prev) => {
                  return { ...prev, category: 'Sport' };
                })
              }
            />
            <FilterMenuCategory
              active={filters.category === 'Music'}
              category='music'
              onClick={() =>
                setFilters((prev) => {
                  return { ...prev, category: 'Music' };
                })
              }
            />
            <FilterMenuCategory
              active={filters.category === 'Art'}
              category='art'
              onClick={() =>
                setFilters((prev) => {
                  return { ...prev, category: 'Art' };
                })
              }
            />
            <FilterMenuCategory
              active={filters.category === 'Food'}
              category='food'
              onClick={() =>
                setFilters((prev) => {
                  return { ...prev, category: 'Food' };
                })
              }
            />
          </div>
        </div>
        <div>
          <FilterMenuTime
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className={style.section}>
          <h3 className={style.sectionTitle}>Location</h3>
          <FilterLocationMenu setFilters={setFilters} />
        </div>
      </div>
      <div className={style.buttons}>
        <button
          onClick={() => {
            setFilters({
              title: '',
              category: '',
              startDate: '',
              endDate: '',
              location: '',
              latitude: '',
              longitude: '',
            });
            updateSearch();
            setDisplayMenu(false);
            searchRef.current.value = '';
          }}
          type='button'
          className={style.resetButton}>
          Reset
        </button>
        <MainButton
          onClick={() => {
            updateSearch();
            setDisplayMenu(false);
          }}>
          apply
        </MainButton>
      </div>
    </div>
  );
}

export default FilterMenu;
