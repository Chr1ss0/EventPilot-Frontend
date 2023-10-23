import styles from './SplashScreen.module.css';
import logo from '../../assets/img/Logo.svg'
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function SplashScreenPage() {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/signin")
        }, 6000)

        return () => clearTimeout(timer)
    }, [])

    return(
    <div className={styles['splash-screen']}>
    <img src={logo} alt="" />
    <h1>vent<span>Pilot</span></h1>
    </div>)
}

export default SplashScreenPage;
