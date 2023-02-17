import React from 'react'
import styles from './assets/styles/Card.module.css'
import Button from '../../../components/Button/Button'
const Card = ({ name, image, votes, modalHandler }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <h3 className={styles.card_name}>{name} <span className={styles.card_stats}>{votes} / 7</span></h3>
            <Button onClick={() => { modalHandler(name, 'vote') }} content='Vote' />
        </div>
    )
}

export default Card