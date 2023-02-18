import React from 'react'
import Wrapper from '../../components/PageWrapperCol'
import LSM from '../../utils/LocalStorageManager'
import AdminTitle from './components/AdminTitle'
import TotalVotes from './components/TotalVotes'
import UsersTable from './components/UsersTable'
import Button from '../../components/Button/Button'
const Admin = ({ pageManager }) => {
    const user = LSM.pull('user')
    return (
        <Wrapper>
            <div className='admin_container'>
                <AdminTitle name={user.name} />
                <UsersTable />
                <TotalVotes />
                <Button content={'LOGOUT'} onClick={() => {
                    LSM.logout()
                    pageManager('Login')
                }} />
            </div>
        </Wrapper>
    )
}

export default Admin