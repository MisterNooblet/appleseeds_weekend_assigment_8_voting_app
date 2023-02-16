import React, { useState } from 'react'
import styles from './assets/styles/LoginForm.module.css'
import logoimg from './assets/images/logo.png'
import Input from './Input'

const users = JSON.parse(localStorage.getItem('users'))

const initialLoginState = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const [loginInput, setLoginInput] = useState(initialLoginState)

    const handleLoginInput = (e, name) => {
        const value = e.target.value
        setLoginInput({ ...loginInput, [name]: value })
        console.log(loginInput);
    }

    const handleLoginButton = () => {
        const username = loginInput.email
        const password = loginInput.password
        const user = users.find(element => element.email === username && element.password === password)
        return user ? localStorage.setItem('user', JSON.stringify(user)) : null

    }
    return (
        <div className={styles.loginCard}>
            <img src={logoimg} alt='Logo'></img>
            <h1>Login:</h1>
            <Input type={'email'} name={'email'} inputHandler={handleLoginInput} value={loginInput.email} />
            <Input type={'password'} name={'password'} inputHandler={handleLoginInput} value={loginInput.password} />
            <button onClick={handleLoginButton}>Login</button>
        </div>
    )
}

export default LoginForm