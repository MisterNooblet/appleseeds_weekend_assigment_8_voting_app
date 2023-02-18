import React from 'react'
import styles from './Modal.module.css'
const Modal = ({ content, children }) => {
    return (

        <div className={styles.modal}>
            <h1>{content}</h1>
            <div>{children}</div>
        </div>

    )
}

export default Modal