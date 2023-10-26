import React, { useRef, useState } from 'react';
import styles from '../pages/SignInPage.module.css';

import locationIcon from '../../assets/img/Location.svg';

import locationHandler from '../../functions/locationSuggestions.js';

export default function LocationInput({ setLocationUser }) {
  const [locations, setLocations] = useState([]);
  const locationRef = useRef();

  return (
    <div className={styles['inputDiv']}>
      <img
        src={locationIcon}
        alt='Location'
      />
      <div className={styles['inputLocation']}>
        <input
          ref={locationRef}
          onChange={(event) =>
            locationHandler(event, setLocationUser, setLocations)
          }
          type='text'
          placeholder='Zipcode'
          name='location'
        />
        {locations.length > 0 && (
          <div className={styles.locationBtnsWrapper}>
            <p className={styles.locationText}>
              Select the City of your choosing
            </p>
            {locations.map((location, index) => (
              <button
                type='button'
                key={index}
                onClick={() => {
                  console.log(location);
                  setLocationUser(location);
                  setLocations([]);
                }}>
                {location['place name']}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
