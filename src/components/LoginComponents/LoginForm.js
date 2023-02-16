import React, { useState } from 'react'
import styles from './assets/styles/LoginForm.module.css'
import logoimg from './assets/images/logo.png'
import Input from './Input'

const users = JSON.parse(localStorage.getItem('users'))

const initialLoginState = {
    email: '',
    password: ''
}

const LoginForm = ({ callPageManager }) => {
    const [loginInput, setLoginInput] = useState(initialLoginState)
    const [loginFailed, setLoginFailed] = useState(false)

    const handleLoginInput = (e, name) => {
        const value = e.target.value
        setLoginInput({ ...loginInput, [name]: value })
        setLoginFailed(false)
    }

    const handleLoginButton = () => {
        const username = loginInput.email
        const password = loginInput.password
        const user = users.find(element => element.email === username && element.password === password)
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            setLoginFailed(false)
            callPageManager('Voting')
        } else {
            setLoginFailed(true)
        }

    }
    return (
        <div className={styles.loginCard}>
            <img src={logoimg} alt='Logo'></img>
            <h1>Login:</h1>
            <Input type={'email'} name={'email'} inputHandler={handleLoginInput} value={loginInput.email} loginFailed={loginFailed} />
            <Input type={'password'} name={'password'} inputHandler={handleLoginInput} value={loginInput.password} loginFailed={loginFailed} />
            <button onClick={handleLoginButton}>Login</button>
            {loginFailed ? <h4 className={styles.error_msg}>Login Failed check your login details</h4> : undefined}
        </div>
    )
}

export default LoginForm