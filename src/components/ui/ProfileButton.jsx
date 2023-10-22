import styles from './ProfileButton.module.css';
import FollowIcon from '../../assets/img/FollowButton.svg';
import EditIcon from '../../assets/img/EditIcon.svg';
import StarIcon from '../../assets/img/StarButton.svg';
import LockIcon from '../../assets/img/Lock.svg';

function ProfilButton({
  children,
  edit = false,
  follow = false,
  review = false,
  loggout = false,
}) {
  return (
    <>
      <button className={styles.button}>
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
            src={FollowIcon}
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
