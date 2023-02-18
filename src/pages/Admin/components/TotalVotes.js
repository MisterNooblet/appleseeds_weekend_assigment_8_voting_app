import React from 'react'
import LSM from 'utils/LocalStorageManager'

const TotalVotes = () => {
    const users = LSM.pull('users')
    const votes = LSM.pull('totalVotes')
    const percentage = (votes / users.length * 100).toFixed(2)
    return (
        <div>
            <h4>Total Votes are: {votes}/{users.length} that make up a total of {percentage}%</h4>
        </div>
    )
}

export default TotalVotes