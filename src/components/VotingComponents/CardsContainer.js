import React, { useState } from 'react'
import Card from './Card'
import styles from './assets/styles/CardsContainer.module.css'

const parties = JSON.parse(localStorage.getItem('parties'))
const user = JSON.parse(localStorage.getItem('user'))

const CardsContainer = () => {
    return (
        <div className={styles.cards_container}>
            <h3>Voter:{user.name}</h3>
            {parties.map((element, idx) => { return <Card key={idx} name={element.name} image={element.image} votes={element.votes} /> })}
        </div>
    )
}

export default CardsContainer