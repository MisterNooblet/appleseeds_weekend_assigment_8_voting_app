import React, { useState } from 'react'
import styles from './assets/LoginForm.module.css'
import logoimg from './assets/logo.png'
import Input from './Input'
import Button from '../../../components/Button/Button'
import LSM from '../../../utils/LocalStorageManager'
import { validateEmail } from '../../../utils/EmailValidator'
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
    const [modalMsg, setModalMsg] = useState(['hi', 'hello'])
    const users = LSM.pull('users')


    const handleLoginInput = (e, name) => {
        const value = e.target.value
        setLoginInput({ ...loginInput, [name]: value })
        setEmailFailed(false)
        setPasswordFailed(false)
    }

    const handleLoginButton = () => {
        const email = loginInput.email
        const password = loginInput.password
        const validMail = users.find(element => element.email === email)
        const emailMsg = 'Please include an @ in the email address as well as a domain following it'
        const wrongEmailMsg = 'The email you have entered does not exist in our database please check your input'
        const wrongPasswordMsg = 'The password you have entered is incorrect please try again'
        if (validMail && validMail.password === password) {
            LSM.push('user', validMail)
            callPageManager('Voting')
        } else {
            const emailError = validateEmail(email)
            if (emailError) {
                setShowModal(true)
                setModalMsg(emailMsg)
                setEmailFailed(true)
            } else if (!validMail) {
                setShowModal(true)
                setModalMsg(wrongEmailMsg)
                setEmailFailed(true)
            } else if (validMail && validMail.password !== password) {
                setShowModal(true)
                setModalMsg(wrongPasswordMsg)
                setPasswordFailed(true)
            }
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