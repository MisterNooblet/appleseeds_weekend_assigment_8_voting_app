import React from 'react'
import Wrapper from '../PageWrapperCol'
import styles from './Modal.module.css'
const Modal = ({ content, children }) => {
    return (
        <Wrapper>
            <div className={styles.modal}>
                <h1>{content}</h1>
                <div>{children}</div>
            </div>
        </Wrapper>
    )
}

export default Modal