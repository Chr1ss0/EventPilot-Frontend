import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';
import BackButton from '../ui/BackButton.jsx';

function SignUpPage() {
  return (
    <div className={styles['formulaPage-container']}>
      <div className={styles['backButton-wrapper']}>
        <BackButton />
      </div>
      <div className={styles['logo-container']}>
        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>
          Event<span>Pilot</span>
        </h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign up</h2>
        <form action="">
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Name.svg" alt="Name" />
            <input type="name" placeholder="Your Name" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Message.svg" alt="MAIL" />
            <input type="email" placeholder="yourmail@email.com" />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
            />

            {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

            <a href="">
              <img src="src/assets/img/Hidden.svg" alt="HIDDEN" />
            </a>
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input
              type="password"
              placeholder="confirm password"
              autoComplete="new-password"
            />

            {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

            <a href="">
              <img src="src/assets/img/Hidden.svg" alt="HIDDEN" />
            </a>
          </div>
        </form>
      </div>
      <div className={styles['button-container']}>
        <div className={styles['button-signin']}>
          <MainButton showArrow={true}>sign up </MainButton>
        </div>
        <div className={styles['switch-container']}>
          <p>
            Already have an account? <a href="/signin"> Sign-In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
