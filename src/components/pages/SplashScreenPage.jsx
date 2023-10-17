import styles from './SplashScreen.module.css';

function SplashScreenPage() {
    return(
    <div className={styles['splash-screen']}>
    <img src="src/assets/img/Logo.svg" alt="" />
    <h1>vent<span>Pilot</span></h1>
    </div>)
}

export default SplashScreenPage;
