import React, { useContext, useEffect, useRef, useState } from 'react';

import BackButton from '../ui/BackButton.jsx';
import { userContext } from '../../context/userContext.jsx';
import InterestList from '../layout/InterestList.jsx';
import InterestItem from '../profile/InterestItem.jsx';
import AddInterest from '../shared/AddInterest.jsx';
import LocationInput from '../shared/LocationInput.jsx';
import MainButton from '../ui/MainButton.jsx';

import profile from '../../assets/img/Name.svg';
import barsIcon from '../../assets/img/barsIcon.svg';
import editIcon from '../../assets/img/EditIcon.svg';

import style from './ProfileEditPage.module.css';
import styleInputs from './SignInPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProfileEditPage() {
  const { user, updateUser, setUser } = useContext(userContext);
  const [interests, setInterests] = useState([...user.userInfo.interest]);
  const [profileImage, setProfileImage] = useState(
    user.userInfo.avatar.secure_url,
  );
  const [locationUser, setLocationUser] = useState(null);
  const navigate = useNavigate();

  function updateImage(event) {
    const [file] = event.target.files;
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  }

  async function editProfile(event) {
    event.preventDefault();

    // if (event.key === 'Enter') return;

    const form = new FormData(event.target);

    if (locationUser) {
      const {
        'place name': placeName,
        latitude,
        longitude,
        state,
      } = locationUser;
      form.append('placeName', placeName);
      form.append('latitude', latitude);
      form.append('longitude', longitude);
      form.append('state', state);
    }
    form.delete('location');

    form.set('interest', interests.join(', '));

    console.log(form);
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/user/edit',
      { method: 'PUT', credentials: 'include', body: form },
    );
    const result = await response.json();
    console.log(result);

    if (!response.ok) return;
    updateUser();
    navigate(`/user/${user._id}`);
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.headerWrapper}>
        <BackButton />
        <p className={style.userName}>
          {user.userInfo.firstName} {user.userInfo.lastName}
        </p>
        <div>{/*don't delete for allignment */}</div>
      </div>
      <form
        onSubmit={editProfile}
        className={style.form}>
        <div className={style.profileImageWrapper}>
          <img
            src={profileImage}
            alt=''
            className={style.profileImage}
          />
          <label
            htmlFor='profileImage'
            className={style.profileImageButton}>
            <img
              className={style.profileEditIcon}
              src={editIcon}
              alt=''
            />
          </label>
          <input
            className={style.fileInput}
            onChange={updateImage}
            id='profileImage'
            type='file'
            name='image'
          />
        </div>
        <div>
          <div className={styleInputs.inputDiv}>
            <img
              src={profile}
              alt=''
            />
            <input
              type='text'
              defaultValue={user.userInfo.firstName}
              name='firstName'
              required
            />
          </div>
          <div className={styleInputs.inputDiv}>
            <img
              src={profile}
              alt=''
            />
            <input
              type='text'
              defaultValue={user.userInfo.lastName}
              name='lastName'
              required
            />
          </div>
          <LocationInput setLocationUser={setLocationUser} />
          <div className={style.aboutInputDiv}>
            {/* <h2 className={style.aboutHeading}>About Me</h2>
          <p className={style.aboutMeText}>{user.userInfo.aboutMe}</p> */}
            <img
              src={barsIcon}
              alt=''
            />
            <textarea
              name='aboutMe'
              rows={4}
              defaultValue={user.userInfo.aboutMe}></textarea>
          </div>
        </div>
        <div className={style.aboutToping}>
          <h2 className={style.aboutHeading}>Interests</h2>
          <InterestList>
            {interests.map((interest, index) => (
              <InterestItem
                key={interest + index}
                setInterests={setInterests}>
                {interest}
              </InterestItem>
            ))}
            <AddInterest setInterests={setInterests} />
          </InterestList>
        </div>
        <div className={style.submitWrapper}>
          <MainButton>submit edit</MainButton>
        </div>
      </form>
    </div>
  );
}
