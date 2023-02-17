import React, { useState } from 'react'
import Card from './Card'
import styles from './assets/styles/CardsContainer.module.css'
import LSM from '../../../utils/LocalStorageManager'
import Modal from '../../../components/Modal/Modal'
import Button from '../../../components/Button/Button'

const CardsContainer = () => {
    const parties = LSM.pull('parties')
    const user = LSM.pull('user')
    const [votes, setVotes] = useState(parties)
    const [modalActive, setModalActive] = useState(false)
    LSM.push('votes', votes)
    const voteHandler = (name) => {
        // eslint-disable-next-line
        LSM.push('tempvote', votes)
        setVotes(votes.map(element => element.name === name ? { ...element, ['votes']: element['votes'] + 1 } : element))
    }
    const modalHandler = (name, action) => {
        if (action === 'vote' && !user.voted) {
            user.voted = true
            LSM.push('user', user)
            setTimeout(() => { setModalActive(true) }, 2000)

            voteHandler(name)
        } else if (action === 'revote') {
            const previousState = LSM.pull('tempvote')
            user.voted = false
            LSM.push('user', user)
            setModalActive(false)
            setVotes(previousState)
        }
    }
    if (modalActive) {
        return (
            <Modal content={`Thank you for your participation ${user.name}, you can still change your vote or confirm and logout`}>
                <Button content={'Re-vote'} onClick={() => modalHandler(null, 'revote')}></Button>
                <Button content={'Confirm & log out'}></Button>
            </Modal>
        )
    } else if (!modalActive) {
        return (
            <div className={styles.cards_container}>
                <h3>Voter:{user.name}</h3>
                {votes.map((element, idx) => { return <Card key={idx} name={element.name} image={element.image} votes={element.votes} modalHandler={modalHandler} /> })}
            </div>
        )

    }

}

export default CardsContainer