import React from 'react'
import styles from './assets/styles/LoginForm.module.css'
import logoimg from './assets/images/logo.png'
import Input from './Input'

// const users = JSON.parse(localStorage.getItem('users'))

const LoginForm = () => {
    return (
        <div className={styles.loginCard}>
            <img src={logoimg} alt='Logo'></img>
            <h1>Login:</h1>
            <Input type={'text'} name={'Username'} />
            <Input type={'password'} name={'Password'} />
            <button>Login</button>
        </div>
    )
}

export default LoginForm