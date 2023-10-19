import React, { useRef } from 'react';
import style from './AddInterest.module.css';
import inputElement from '../pages/SignInPage.module.css';
import interestItem from '../profile/InterestItem.module.css';
import barIcon from '../../assets/img/barsIcon.svg';

export default function AddInterest() {
  const interestRef = useRef();

  async function addInterest() {}

  return (
    <div className={style.wrapper}>
      <div className={inputElement.inputDiv}>
        <img src={barIcon} alt="" />
        <input
          ref={interestRef}
          type="text"
          name="interest"
          placeholder="Your interest"
        />
      </div>
      <button
        className={interestItem.item + ' ' + style.btnColor}
        type="button"
        onClick={addInterest}
      >
        ADD +
      </button>
    </div>
  );
}
