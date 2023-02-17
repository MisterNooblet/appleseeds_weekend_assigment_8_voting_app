import React from 'react'
import Wrapper from '../../components/PageWrapperCol'
import LSM from '../../utils/LocalStorageManager'
import AdminTitle from './components/AdminTitle'
import TotalVotes from './components/TotalVotes'
import UsersTable from './components/UsersTable'
const Admin = () => {
    const user = LSM.pull('user')
    return (
        <Wrapper>
            <AdminTitle name={user.name} />
            <UsersTable />
            <TotalVotes />
        </Wrapper>
    )
}

export default Admin