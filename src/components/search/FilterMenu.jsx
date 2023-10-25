import FilterMenuCategory from './FilterMenuCategory.jsx';
import FilterMenuTime from './FilterMenuTime.jsx';

function FilterMenu() {
  return (
    <div>
      <h2>Filter</h2>
      <div>
        <h3>Category</h3>
        <div>
          <FilterMenuCategory
            active={false}
            category='sports'
          />
          <FilterMenuCategory
            active={false}
            category='music'
          />
          <FilterMenuCategory
            active={false}
            category='art'
          />
          <FilterMenuCategory
            active={false}
            category='food'
          />
        </div>
      </div>
      <div>
        <FilterMenuTime />
      </div>
      <div>
        <h3>Location</h3>
      </div>
    </div>
  );
}

export default FilterMenu;
