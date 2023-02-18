import React, { useState } from 'react'
import Card from './Card'
import styles from './assets/styles/CardsContainer.module.css'
import LSM from '../../../utils/LocalStorageManager'
import Modal from '../../../components/Modal/Modal'
import Button from '../../../components/Button/Button'

const CardsContainer = ({ callPageManager }) => {
    const parties = LSM.pull('parties')
    const user = LSM.pull('user')
    const [votes, setVotes] = useState(parties)
    const [modalActive, setModalActive] = useState(false)
    LSM.push('parties', votes)
    const voteHandler = (name) => {
        LSM.votes('add')
        LSM.push('tempvote', votes)
        setVotes(() => LSM.updateVotes(name))
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
            LSM.votes('sub')
            setModalActive(false)
            setVotes(previousState)
        } else if (action === 'logout') {
            if (user.type === 'user') {
                LSM.logout()
                callPageManager('Login')
            } else {
                LSM.logout('admin')
                callPageManager('Admin')
            }
        }
    }
    if (modalActive) {
        return (
            <Modal content={`Thank you for your participation ${user.name}, you can still change your vote or ${user.type === 'user' ? 'confirm and logout' : 'continue to admin panel'}`}>
                <Button content={'Re-vote'} onClick={() => modalHandler(null, 'revote')}></Button>
                <Button content={user.type === 'user' ? 'Confirm & log out' : 'To admin panel'} onClick={() => modalHandler(null, 'logout')}></Button>
            </Modal>
        )
    } else if (!modalActive) {
        return (
            <>
                <h3>Voter:{user.name}</h3>
                <div className={styles.cards_container}>
                    {votes.map((element, idx) => { return <Card key={idx} name={element.name} image={element.image} votes={element.votes} modalHandler={modalHandler} /> })}
                </div>
            </>
        )

    }

}

export default CardsContainer