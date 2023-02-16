import React from 'react'
import styles from './assets/styles/Card.module.css'
const Card = ({ name, image, votes }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <h3 className={styles.card_name}>{name}</h3>
            <button className={styles.card_btn}>Vote</button>
            <div className={styles.card_stats}></div>
        </div>
    )
}

export default Card