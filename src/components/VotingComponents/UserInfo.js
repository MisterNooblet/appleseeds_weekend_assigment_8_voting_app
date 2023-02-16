import React from 'react'

const user = JSON.parse(localStorage.getItem('user'))
const UserInfo = () => {
    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    )
}

export default UserInfo