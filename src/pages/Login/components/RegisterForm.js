import React, { useState } from 'react'
import styles from './assets/LoginForm.module.css'
import logoimg from './assets/logo.png'
import Input from './Input'
import Button from 'components/Button/Button'
import LSM from 'utils/LocalStorageManager'
import { validateEmail } from 'utils/EmailValidator'
import Modal from 'components/Modal/Modal'

const initialLoginState = {
    name: '',
    email: '',
    password: ''
}

const RegisterForm = ({ setIsSigningUp }) => {
    const [loginInput, setLoginInput] = useState(initialLoginState)
    const [emailFailed, setEmailFailed] = useState(false)
    const [nameFailed, setNameFailed] = useState(false)
    const [passwordFailed, setPasswordFailed] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalMsg, setModalMsg] = useState(['hi', 'hello'])
    const users = LSM.pull('users')


    const handleLoginInput = (e, name) => {
        const value = e.target.value
        setLoginInput({ ...loginInput, [name]: value })
        setEmailFailed(false)
        setPasswordFailed(false)
        setNameFailed(false)
    }

    const handleRegisterButton = () => {
        const name = loginInput.name
        const email = loginInput.email
        const password = loginInput.password
        const uniqueMail = users.find(element => element.email === email) === undefined
        const validMail = validateEmail(email)
        const validPassword = password.length >= 6
        const validName = name.split(' ').length >= 2
        const emailMsg = 'Please include an @ in the email address as well as a domain following it'
        const wrongEmailMsg = 'The email you have entered already exists in our database please go back and login'
        const wrongPasswordMsg = 'The password you have entered is too short please enter a password longer than 6 chars'
        const nameMsg = 'Please provide first and last name seperated by a space ex: John Doe'
        if (validName && !validMail && uniqueMail && validPassword) {
            LSM.addUser(name, email, password)
            setIsSigningUp(false)
        } else {
            const emailError = validateEmail(email)
            if (!validName) {
                setShowModal(true)
                setModalMsg(nameMsg)
                setNameFailed(true)
            }
            else if (emailError) {
                setShowModal(true)
                setModalMsg(emailMsg)
                setEmailFailed(true)
            } else if (!uniqueMail) {
                setShowModal(true)
                setModalMsg(wrongEmailMsg)
                setEmailFailed(true)
            } else if (!validPassword) {
                setShowModal(true)
                setModalMsg(wrongPasswordMsg)
                setPasswordFailed(true)
            }
        }

    }


    //////////////////////////
    if (showModal) {
        return <Modal content={modalMsg}> <Button onClick={() => setShowModal(false)} content='Retry' /></Modal>
    } else {
        return (
            <div className={styles.loginCard}>
                <img src={logoimg} alt='Logo'></img>
                <div>

                    <h3>Please fill in all fields below</h3>
                </div>

                <Input placeholder={'john doe'} type={'text'} name={'name'} inputHandler={handleLoginInput} value={loginInput.name} loginFailed={nameFailed} />
                <Input placeholder={'example@domain.com'} type={'email'} name={'email'} inputHandler={handleLoginInput} value={loginInput.email} loginFailed={emailFailed} />
                <Input placeholder={'password'} type={'password'} name={'password'} inputHandler={handleLoginInput} value={loginInput.password} loginFailed={passwordFailed} />

                <div className={styles.buttonbox}>
                    <Button onClick={() => setIsSigningUp(false)} content='GO BACK' />
                    <Button onClick={handleRegisterButton} content='CONFIRM' />
                </div>
            </div>
        )
    }
}

export default RegisterForm