import React from 'react'
import styles from './assets/Input.module.css'
import { CiMail, CiLock } from 'react-icons/ci';
import { HiOutlineIdentification } from 'react-icons/hi';


const Input = ({ type, name, inputHandler, value, loginFailed, placeholder }) => {
    return (
        <div className={styles.input_container}>
            <p>{name}:</p>
            <div className={styles.input_row}>
                <span>{name === 'email' ? <CiMail /> : name === 'name' ? <HiOutlineIdentification /> : <CiLock />}</span>
                <input className={loginFailed ? styles.input_error : undefined} type={type} id={name} name={name} value={value} onChange={(e) => inputHandler(e, name)} placeholder={placeholder}></input>
            </div>
        </div>

    )
}

export default Input