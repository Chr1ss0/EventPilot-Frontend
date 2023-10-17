import { Link, NavLink } from 'react-router-dom';
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

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.content}>
          <div className={style.sideWrapper}>
            <NavLink to={'/'} className={style.link}>
              {({ isActive }) => (
                <div
                  className={
                    style.linkItem + ' ' + (isActive ? style.selected : '')
                  }
                >
                  <img
                    src={isActive ? compassSelected : compass}
                    alt="Explore"
                  />
                  <p
                    className={
                      style.text + ' ' + (isActive ? style.selected : '')
                    }
                  >
                    Explore
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to={'/events'} className={style.link}>
              {({ isActive }) => (
                <div className={style.linkItem}>
                  <img
                    src={isActive ? CalenderSelected : Calender}
                    alt="events"
                  />
                  <p
                    className={
                      style.text + ' ' + (isActive ? style.selected : '')
                    }
                  >
                    Events
                  </p>
                </div>
              )}
            </NavLink>
          </div>
          <div className={style.sideWrapper}>
            <NavLink to={'/search'} className={style.link}>
              {({ isActive }) => (
                <div className={style.linkItem}>
                  <img src={isActive ? searchSelected : search} alt="Search" />
                  <p
                    className={
                      style.text + ' ' + (isActive ? style.selected : '')
                    }
                  >
                    Search
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to={'/profile'} className={style.link}>
              {({ isActive }) => (
                <div className={style.linkItem}>
                  <img
                    src={isActive ? profileSelected : profile}
                    alt="Profile"
                  />
                  <p
                    className={
                      style.text + ' ' + (isActive ? style.selected : '')
                    }
                  >
                    Profile
                  </p>
                </div>
              )}
            </NavLink>
          </div>
          <Link to={'events'} className={style.addEventLink}>
            <img
              src={plus}
              alt="go to add Event"
              className={style.addEventImg}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
