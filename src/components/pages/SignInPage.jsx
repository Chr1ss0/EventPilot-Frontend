import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';

function SignInPage() {
  return (
    <div className={styles['formulaPage-container']}>

      {/* BACK BUTTON */}

      <div className={styles['logo-container']} >

        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>
          Event<span>Pilot</span>
        </h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign in</h2>
        <form action="">
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Message.svg" alt="MAIL" />

            <input type="email" placeholder="yourmail@email.com" autoComplete="username" />
        </div>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input type="password" placeholder="password" autoComplete="current-password"/>


          {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

          <a href="">
            <img src="src/assets/img/Hidden.svg" alt="HIDDEN" />
          </a>
        </div>
        </form>
      </div>
      <div className={styles['button-container']}>
      <div className={styles['button-signin']}>
      <MainButton showArrow={true}>sign in </MainButton>
      </div>
      <div className={styles['switch-container']}>
        <p>Don't have an account? <a href="/signup"> Sign-Up</a></p>
      </div>
      </div>
    </div>
  );
}

export default SignInPage;
