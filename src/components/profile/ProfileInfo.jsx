import styles from './ProfileInfo.module.css';
import ProfilePicture from '../../assets/img/PinkGuyProfilePicture.jpg';

function ProfileInfo({ user, vertical = false }) {
  return (
    <div
      className={
        styles['ProfileInfoWrapper'] +
        ' ' +
        (vertical && styles['VerticalProfile'])
      }>
      <img
        src={user.userInfo.avatar.secure_url}
        alt='profilepicture'
      />
      <div className={styles['ProfileFollowerSection']}>
        <div className={styles['ProfileFollowning']}>
          <p>{user.connections.following.length}</p>
          <p>Following</p>
        </div>
        <div className={styles['ProfileFollower']}>
          <p>{user.connections.followers.length}</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
