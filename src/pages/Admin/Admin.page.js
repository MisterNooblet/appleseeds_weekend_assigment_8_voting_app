import React from 'react'
import Wrapper from '../../components/PageWrapperCol'
import LSM from '../../utils/LocalStorageManager'
import AdminTitle from './components/AdminTitle'
import TotalVotes from './components/TotalVotes'
const Admin = () => {
    const user = LSM.pull('user')
    return (
        <Wrapper>
            <AdminTitle name={user.name} />
            <TotalVotes />
        </Wrapper>
    )
}

export default Admin