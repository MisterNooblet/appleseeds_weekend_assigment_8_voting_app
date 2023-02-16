import React from 'react'
import styles from './assets/styles/Input.module.css'
import { CiUser, CiLock } from 'react-icons/ci';


const Input = ({ type, name }) => {
    return (
        <div className={styles.input_container}>
            <p>{name}</p>
            <div className={styles.input_row}>
                <span>{name === 'Username' ? <CiUser /> : <CiLock />}</span><input type={type} id={name} name={name}></input>
            </div>
        </div>

    )
}

export default Input