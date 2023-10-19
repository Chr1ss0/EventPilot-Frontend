import styles from './ProfileButton.module.css';
import FollowIcon from '../../assets/img/FollowButton.svg';
import EditIcon from '../../assets/img/EditIcon.svg';
import StarIcon from '../../assets/img/StarButton.svg';
import LockIcon from '../../assets/img/Lock.svg';

function ProfilButton({
  children,
  edit = false,
  follow = false,
  star = false,
}) {
  return (
    <>
      <div className={styles.buttonDiv}>
        <button className={styles.button}>
          {edit && (
            <img className={styles.icon} src={EditIcon} alt="edit icon" />
          )}
          {follow && (
            <img className={styles.icon} src={FollowIcon} alt="follow icon" />
          )}
          {star && (
            <img className={styles.icon} src={StarIcon} alt="star icon" />
          )}
          {lock && (
            <img className={styles.icon} src={LockIcon} alt="lock icon" />
          )}
          <p className={styles.profileText}>{children}</p>
        </button>
      </div>
    </>
  );
}

export default ProfilButton;
