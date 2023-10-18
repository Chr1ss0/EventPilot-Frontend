import styles from './SignInPage.module.css';
import MainButton from '../ui/MainButton.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import passwordHidden from '../../assets/img/Hidden.svg';
import passwordShown from '../../assets/img/Shown.svg';

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const navigate = useNavigate();

  async function signIn(event) {
    event.preventDefault();

    const formdata = new FormData(event.target);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + '/api/auth/login',
      { method: 'POST', credentials: 'include', body: formdata },
    );

    if (result.ok) console.log('login succesfull');
    console.log(response);
    const result = await response.json();
    console.log(result);
  }

  return (
    <div className={styles['formulaPage-container']}>
      <div className={styles['logo-container']}>
        <img src="src/assets/img/Logo.svg" alt="Coporate Logo" />
        <h1>
          Event<span>Pilot</span>
        </h1>
      </div>
      <div className={styles['form-container']}>
        <h2>Sign in</h2>
        <form className={styles.form} onSubmit={signIn}>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Message.svg" alt="MAIL" />

            <input
              type="email"
              placeholder="yourmail@email.com"
              autoComplete="username"
              name="email"
            />
          </div>
          <div className={styles['inputDiv']}>
            <img src="src/assets/img/Lock.svg" alt="LOCK" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              autoComplete="current-password"
              name="password"
            />
            <button type="button" onClick={togglePassword}>
              <img
                src={showPassword ? passwordShown : passwordHidden}
                alt={showPassword ? 'hide password' : 'display password'}
              />
            </button>
          </div>
          <div className={styles['button-container']}>
            <div className={styles['button-signin']}>
              <MainButton showArrow={true}>sign in</MainButton>
            </div>
            <div className={styles['switch-container']}>
              <p>
                Don't have an account? <a href="/signup"> Sign-Up</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
