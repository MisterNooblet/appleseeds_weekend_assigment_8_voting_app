import React, { useState } from 'react'
import styles from './assets/LoginForm.module.css'
import logoimg from './assets/logo.png'
import Input from './Input'
import Button from '../../../components/Button/Button'
import LSM from '../../../data/LocalStorageManager'


const initialLoginState = {
    email: '',
    password: ''
}

const LoginForm = ({ callPageManager }) => {
    const [loginInput, setLoginInput] = useState(initialLoginState)
    const [loginFailed, setLoginFailed] = useState(false)
    const users = LSM.pull('users')


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
            LSM.push('user', user)
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
            <Button onClick={handleLoginButton} content='Login' />
            {loginFailed ? <h4 className={styles.error_msg}>Login Failed check your login details</h4> : undefined}
        </div>
    )
}

export default LoginForm