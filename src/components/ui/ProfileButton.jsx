import styles from './ProfileButton.module.css';
import FollowIcon from '../../assets/img/FollowButton.svg';
import FollowedIcon from '../../assets/img/FollowedIcon.svg';
import EditIcon from '../../assets/img/EditIcon.svg';
import StarIcon from '../../assets/img/StarButton.svg';
import LockIcon from '../../assets/img/Lock.svg';

function ProfilButton({
  onClick,
  edit = false,
  follow = false,
  review = false,
  loggout = false,
  followActive = false,
  children,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          styles.button + ' ' + (followActive && follow ? styles.following : '')
        }>
        {edit && (
          <img
            className={styles.icon}
            src={EditIcon}
            alt='edit icon'
          />
        )}
        {follow && (
          <img
            className={styles.icon}
            src={followActive ? FollowedIcon : FollowIcon}
            alt='follow icon'
          />
        )}
        {review && (
          <img
            className={styles.icon}
            src={StarIcon}
            alt='star icon'
          />
        )}
        {loggout && (
          <img
            className={styles.icon}
            src={LockIcon}
            alt='lock icon'
          />
        )}
        <p className={styles.profileText}>{children}</p>
      </button>
    </>
  );
}

export default ProfilButton;
