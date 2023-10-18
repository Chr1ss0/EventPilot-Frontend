import styles from "./SignInPage.module.css";

function SignUpPage() {
  return(
  <div>

      {/* BACK BUTTON */}

    <div className={styles['logo-container']} >
        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>Event<span>Pilot</span></h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign in</h2>
        <form action="">
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Name.svg" alt="Name" />
            <input type="name" placeholder="Your Name"/>
        </div>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Message.svg" alt="MAIL" />
            <input type="email" placeholder="yourmail@email.com" />
        </div>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input type="password" placeholder="password" autoComplete="new-password"/>

            {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

          <a href=""><img src="src/assets/img/Hidden.svg" alt="HIDDEN" /></a>
        </div>
        <div className={styles['inputDiv']}>
          <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input type="password" placeholder="confirm password" autoComplete="new-password" />

            {/* on click img chnage to "Shown.svg" und Passwort wird angezeigt */}

          <a href=""><img src="src/assets/img/Hidden.svg" alt="HIDDEN" /></a>
        </div>
        </form>
      </div>
      <div className={styles['button-container']}>

          {/* /---MAINBUTTON---/ */}

        <p>Already have an account? <a href="/signin"> Sign-In</a></p> <p></p>
      </div>
  </div>
  )
}

export default SignUpPage;
