import style from './RegisteredUsers.module.css';

function RegisteredUsers({ event, big = false }) {
  // console.log(event);

  if (!big && event.registeredUser.length === 0) return;
  return (
    <div className={(big ? style.big : style.small) + ' ' + style.wrapper}>
      {event.registeredUser.length > 0 && (
        <div className={style.imagesWrapper}>
          {event.registeredUser.slice(0, 3).map((user, index) => (
            <img
              key={user._id}
              src={user?.userInfo?.avatar?.secure_url}
              alt=''
              loading='lazy'
              className={style.userImage + ' ' + style[`image${index + 1}`]}
            />
          ))}
        </div>
      )}
      <p className={style.text}>
        +{event.registeredUser.length}
        {big && <span className={style.text}> registered</span>}
      </p>
    </div>
  );
}

export default RegisteredUsers;
