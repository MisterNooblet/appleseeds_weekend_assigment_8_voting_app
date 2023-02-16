import React from 'react'
import styles from './assets/styles/Card.module.css'
const Card = ({ name, image, votes, voteHandler }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <h3 className={styles.card_name}>{name} <span className={styles.card_stats}>{votes} / 7</span></h3>
            <button className={styles.card_btn} onClick={() => { voteHandler(name) }}>Vote</button>
        </div>
    )
}

export default Card