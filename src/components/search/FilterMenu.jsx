import MainButton from '../ui/MainButton.jsx';
import FilterLocationMenu from './FilterLocationMenu.jsx';
import FilterMenuCategory from './FilterMenuCategory.jsx';
import FilterMenuTime from './FilterMenuTime.jsx';

import style from './FilterMenu.module.css';

function FilterMenu({ filters, setFilters }) {
  return (
    <div className={style.wrapper}>
      <h2 className={style.mainHeading}>Filter</h2>
      <div className={style.sectionWrapper}>
        <div className={style.section}>
          <h3 className={style.sectionTitle}>Category</h3>
          <div className={style.categories}>
            <FilterMenuCategory
              active={filters.category === 'Sports'}
              category='sports'
              onClick={() =>
                setFilters((prev) => {
                  return { ...prev, category: 'Sports' };
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
          <FilterLocationMenu />
        </div>
      </div>
      <div className={style.buttons}>
        <button
          type='button'
          className={style.resetButton}>
          Reset
        </button>
        <MainButton>apply</MainButton>
      </div>
    </div>
  );
}

export default FilterMenu;
