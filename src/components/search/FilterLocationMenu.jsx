import { useState } from 'react';
import style from './FilterLocationMenu.module.css';
import filterLocationIcon from '../../assets/img/filterLocation.svg';
import userLocationIcon from '../../assets/img/userLocation.svg';
import filterLocationArrow from '../../assets/img/filterSvg.svg';

export default function FilterLocationMenu() {
  const [searchLocation, setSearchLocation] = useState('Stadt');
  const [switchFields, setSwitchFields] = useState(false);

  function setUserLocation() {}

  function setZipLocation() {
    setSwitchFields(false);
  }

  return (
    <div className={style.filterLocationMenu_wrapper}>
      <div className={style.filterLocationMenu_input}>
        <img
          className={style.filterLocationMenu_searchIcon}
          onClick={() => setSwitchFields((prevState) => !prevState)}
          src={filterLocationIcon}
          alt='set Userlocation button'
        />
        {switchFields ? (
          <input
            className={style.filterLocationMenu_currentLocation}
            type='text'
            placeholder={'21514'}
          />
        ) : (
          <p className={style.filterLocationMenu_currentLocation}>
            {searchLocation}
          </p>
        )}
        <img
          onClick={setZipLocation}
          className={style.filterLocationMenu_cta}
          src={filterLocationArrow}
          alt='select Zipcode location'
        />
      </div>
      <div
        onClick={setUserLocation}
        className={style.filterLocationMenu_usericon_wrapper}>
        <img
          className={style.filterLocationMenu_usericon}
          src={userLocationIcon}
          alt='select Location button'
        />
      </div>
    </div>
  );
}
