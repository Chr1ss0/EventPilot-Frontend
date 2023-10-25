import React, { useState } from 'react';

import style from './Rating.module.css';

export default function Rating({ rating, setRating }) {
  const [hover, setHover] = useState(null);

  return (
    <div className={style.wrapper}>
      {[...Array(5)].map((item, index) => {
        const currentRating = index + 1;
        return (
          <label
            key={index}
            onMouseEnter={() => {
              setHover(currentRating);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
            className={style.label}>
            <input
              className={style.radio}
              type='radio'
              name='rating'
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <svg
              width='60'
              height='60'
              viewBox='0 0 23 23'
              fill={currentRating <= (hover || rating) ? '#00ECAA' : 'none'}
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.5 1.5L14.7445 8.08254L22 9.14459L16.75 14.2655L17.989 21.5L11.5 18.0825L5.011 21.5L6.25 14.2655L1 9.14459L8.2555 8.08254L11.5 1.5Z'
                stroke='#00ECAA'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </label>
        );
      })}
    </div>
  );
}
