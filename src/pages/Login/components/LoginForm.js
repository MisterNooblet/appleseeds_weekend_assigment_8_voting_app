import React, { useState } from 'react'
import styles from './assets/LoginForm.module.css'
import logoimg from './assets/logo.png'
import Input from './Input'
import Button from '../../../components/Button/Button'
import LSM from '../../../utils/LocalStorageManager'
import Modal from '../../../components/Modal/Modal'


const initialLoginState = {
    email: '',
    password: ''
}

const LoginForm = ({ callPageManager }) => {
    const [loginInput, setLoginInput] = useState(initialLoginState)
    const [emailFailed, setEmailFailed] = useState(false)
    const [passwordFailed, setPasswordFailed] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalMsg, setModalMsg] = useState('')
    const users = LSM.pull('users')


    const handleLoginInput = (e, name) => {
        const value = e.target.value
        setLoginInput({ ...loginInput, [name]: value })
    }

    const handleLoginButton = () => {
        const username = loginInput.email
        const password = loginInput.password
        const user = users.find(element => element.email === username && element.password === password)
        if (user) {
            LSM.push('user', user)
            callPageManager('Voting')
        } else {
            setShowModal(true)

        }

    }
    if (showModal) {
        return <Modal content={modalMsg}> <Button onClick={() => setShowModal(false)} content='Retry' /></Modal>
    } else {
        return (
            <div className={styles.loginCard}>
                <img src={logoimg} alt='Logo'></img>
                <h1>Login:</h1>
                <Input type={'email'} name={'email'} inputHandler={handleLoginInput} value={loginInput.email} loginFailed={emailFailed} />
                <Input type={'password'} name={'password'} inputHandler={handleLoginInput} value={loginInput.password} loginFailed={passwordFailed} />
                <Button onClick={handleLoginButton} content='Login' />
            </div>
        )
    }

}

export default LoginForm