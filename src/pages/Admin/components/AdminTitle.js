import React from 'react'
import styles from '../assets/AdminTitle.module.css'
const AdminTitle = ({ name }) => {
    return (
        <div className={styles.title}>
            <h1>Welcome to the admin panel <span>{name}</span></h1>
            <h3>Below you will find the current voting statistics and data</h3>
        </div>
    )
}

export default AdminTitle