import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';

function SignInPage() {
  return (
    <div>
      <div className={styles['logo-container']}>
        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>
          Event<span>Pilot</span>
        </h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign in</h2>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Message.svg" alt="MAIL" />
          <input type="email" placeholder="yourmail@email.com" />
        </div>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Lock.svg" alt="LOCK" />
          <input type="password" placeholder="password" />

          {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

          <a href="">
            <img src="src/assets/img/Hidden.svg" alt="HIDDEN" />
          </a>
        </div>
      </div>
      <div className={styles['button-container']}>
        <MainButton showArrow={false}>sign in </MainButton>
        <p>
          Don't have an account? <a href="/signuppage"> Sign-Up</a>
        </p>{' '}
        <p></p>
      </div>
    </div>
  );
}

export default SignInPage;
