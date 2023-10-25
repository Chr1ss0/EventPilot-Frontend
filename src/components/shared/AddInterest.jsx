import React, { useEffect, useRef } from 'react';
import style from './AddInterest.module.css';
import inputElement from '../pages/SignInPage.module.css';
import interestItem from '../profile/InterestItem.module.css';
import barIcon from '../../assets/img/barsIcon.svg';

export default function AddInterest({ setInterests }) {
  const interestRef = useRef();

  function addInterest(event) {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();

      if (!interestRef.current.value.trim()) return;
      setInterests((prev) => [...prev, interestRef.current.value]);
    }
  }

  useEffect(() => {
    interestRef.current.value = '';
  }, [addInterest]);

  return (
    <div className={style.wrapper}>
      <div className={inputElement.inputDiv + ' ' + style.fullWidth}>
        <img
          src={barIcon}
          alt=''
        />
        <input
          ref={interestRef}
          type='text'
          name='interest'
          onKeyDown={addInterest}
          placeholder='Your interest'
        />
      </div>
      <button
        className={interestItem.item + ' ' + style.btnColor}
        type='button'
        onClick={addInterest}>
        ADD +
      </button>
    </div>
  );
}
