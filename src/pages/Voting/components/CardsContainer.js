import React, { useState } from 'react'
import Card from './Card'
import styles from './assets/styles/CardsContainer.module.css'
import LSM from '../../../utils/LocalStorageManager'

const CardsContainer = () => {
    const parties = LSM.pull('parties')
    const user = LSM.pull('user')
    const [votes, setVotes] = useState(parties)
    LSM.push('votes', votes)
    const voteHandler = (name) => {
        // eslint-disable-next-line
        setVotes(votes.map(element => element.name === name ? { ...element, ['votes']: element['votes'] + 1 } : element))
    }
    return (
        <div className={styles.cards_container}>
            <h3>Voter:{user.name}</h3>
            {votes.map((element, idx) => { return <Card key={idx} name={element.name} image={element.image} votes={element.votes} voteHandler={voteHandler} /> })}
        </div>
    )
}

export default CardsContainer