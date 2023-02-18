import React from 'react'
import LSM from 'utils/LocalStorageManager'

const TotalVotes = () => {
    const users = LSM.pull('users')
    const votes = LSM.pull('totalVotes')
    return (
        <div>
            <h4>Total Votes are: {votes}/{users.length}</h4>
        </div>
    )
}

export default TotalVotes