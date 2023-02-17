import React from 'react'
import LSM from '../../../utils/LocalStorageManager'
import styles from '../assets/UsersTable.module.css'
import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
const UsersTable = () => {
    const users = LSM.pull('users')
    return (
        <div className={styles.table_container}>

            <div className={`${styles.divTable} ${styles.usertable}`}>
                <div className={styles.divTableHeading} >
                    <div className={styles.divTableRow} >
                        <div className={styles.divTableHead} >Name</div>
                        <div className={styles.divTableHead} >Email</div>
                        <div className={styles.divTableHead} >Voted?</div>
                    </div>
                </div>
                <div className={styles.divTableBody}>
                    {
                        users.map((element, idx) => {
                            return (
                                <div key={idx} className={`${styles.divTableRow} ${element.voted ? styles.voted : styles.default}`}>
                                    <div className={styles.divTableCell}>{element.name}</div>
                                    <div className={styles.divTableCell}>{element.email}</div>
                                    <div className={styles.divTableCell}>{element.voted ? <FcCheckmark /> : <FcHighPriority />}</div>
                                </div>)
                        })
                    }

                </div>
            </div>

        </div>

    )
}

export default UsersTable