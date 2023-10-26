import { useContext, useRef, useState } from 'react';
import style from './FilterLocationMenu.module.css';
import filterLocationIcon from '../../assets/img/filterLocation.svg';
import userLocationIcon from '../../assets/img/userLocation.svg';
import filterLocationArrow from '../../assets/img/filterSvg.svg';
import { userContext } from '../../context/userContext';

export default function FilterLocationMenu({ setFilters }) {
  const [searchLocation, setSearchLocation] = useState('Stadt');
  const [switchFields, setSwitchFields] = useState(false);
  const zipCodeRef = useRef();
  const { user } = useContext(userContext);

  async function setUserLocation() {
    try {
      if (user.userInfo?.defaultLocation.placeName) {
        setSearchLocation(user.userInfo.defaultLocation.placeName);
        setFilters((prev) => {
          return { ...prev, location: 'user', distance: 200 };
        });
      } else setSearchLocation('No default.');
    } catch (error) {
      console.log(error);
    }
  }

  async function setZipLocation() {
    try {
      const zipCode = zipCodeRef.current.value;
      console.log(zipCode);
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/utility/location/${zipCode}`,
      );
      const data = await result.json();
      setSearchLocation(data[0]['place name']);
      setFilters((prev) => {
        return {
          ...prev,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          distance: 150,
        };
      });
      setSwitchFields(false);
    } catch (error) {
      console.log(error);
    }
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
            min='5'
            max='5'
            ref={zipCodeRef}
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
