import { Link, NavLink, Outlet } from 'react-router-dom';
import style from './Navbar.module.css';

import compass from '../../assets/img/compass.svg';
import compassSelected from '../../assets/img/compassSelected.svg';
import Calender from '../../assets/img/Calender.svg';
import CalenderSelected from '../../assets/img/CalenderSelected.svg';
import search from '../../assets/img/search.svg';
import searchSelected from '../../assets/img/searchSelected.svg';
import profile from '../../assets/img/profile.svg';
import profileSelected from '../../assets/img/profileSelected.svg';

import plus from '../../assets/img/plus.svg';
import { useContext } from 'react';
import { userContext } from '../../context/userContext.jsx';

function Navbar() {
  const { user, updateUser, setUser } = useContext(userContext);
  console.log(user._id);
  return (
    <>
      <Outlet />
      <nav className={style.nav}>
        <div className={style.content}>
          <div className={style.sideWrapper}>
            <NavLink
              to={'/explore'}
              className={style.link}>
              {({ isActive }) => (
                <div
                  className={
                    style.linkItem + ' ' + (isActive ? style.selected : '')
                  }>
                  <img
                    src={isActive ? compassSelected : compass}
                    alt='Explore'
                  />
                  <p className={style.text}>Explore</p>
                </div>
              )}
            </NavLink>
            <NavLink
              to={'/events/own'}
              className={style.link}>
              {({ isActive }) => (
                <div
                  className={
                    style.linkItem + ' ' + (isActive ? style.selected : '')
                  }>
                  <img
                    src={isActive ? CalenderSelected : Calender}
                    alt='events'
                  />
                  <p className={style.text}>Events</p>
                </div>
              )}
            </NavLink>
          </div>
          <div className={style.sideWrapper}>
            <NavLink
              to={'/search'}
              className={style.link}>
              {({ isActive }) => (
                <div
                  className={
                    style.linkItem + ' ' + (isActive ? style.selected : '')
                  }>
                  <img
                    src={isActive ? searchSelected : search}
                    alt='Search'
                  />
                  <p className={style.text}>Search</p>
                </div>
              )}
            </NavLink>
            <NavLink
              to={`/user/${user._id}`}
              className={style.link}>
              {({ isActive }) => (
                <div
                  className={
                    style.linkItem + ' ' + (isActive ? style.selected : '')
                  }>
                  <img
                    src={isActive ? profileSelected : profile}
                    alt='Profile'
                  />
                  <p className={style.text}>Profile</p>
                </div>
              )}
            </NavLink>
          </div>
          <Link
            to={'/addevent'}
            className={style.addEventLink}>
            <img
              src={plus}
              alt='go to add Event'
              className={style.addEventImg}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
