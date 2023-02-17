import React, { useState } from 'react'
import Card from './Card'
import styles from './assets/styles/CardsContainer.module.css'

const CardsContainer = () => {
    const parties = JSON.parse(localStorage.getItem('parties'))
    const user = JSON.parse(localStorage.getItem('user'))
    const votesData = parties.reduce((a, b) => {
        let name = b.name
        a[name] = 0
        return a
    }, {})
    const [votes, setVotes] = useState(votesData)
    const voteHandler = (name) => {
        setVotes({ ...votes, [name]: (votes[`${name}`] + 1) })
    }
    return (
        <div className={styles.cards_container}>
            <h3>Voter:{user.name}</h3>
            {parties.map((element, idx) => { return <Card key={idx} name={element.name} image={element.image} votes={votes[element.name]} voteHandler={voteHandler} /> })}
        </div>
    )
}

export default CardsContainer