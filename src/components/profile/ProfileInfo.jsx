import styles from './ProfileInfo.module.css'
import ProfilePicture from '../../assets/img/PinkGuyProfilePicture.jpg'

function ProfileInfo({vertical=false}) {
  return (
  <div className={styles['ProfileInfoWrapper']+' ' + (vertical && styles['VerticalProfile'])} >
    <img src={ProfilePicture} alt="profilepicture" />
    <div className={styles['ProfileFollowerSection']}>
      <div className={styles['ProfileFollowning']}>
        <p>100</p>
        <p>Following</p>
      </div>
      <div className={styles['ProfileFollower']}>
        <p>1500</p>
        <p>Followers</p>
      </div>
    </div>
  </div>
  );
}

export default ProfileInfo;
