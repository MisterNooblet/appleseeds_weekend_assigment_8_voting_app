import React from 'react'
import styles from './PageWrapper.module.css'
const PageWrapper = (props) => {
    return (
        <div className={styles.wrapper}>{props.children}</div>
    )
}

export default PageWrapper