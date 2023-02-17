import React from 'react'
import LoginForm from './components/LoginForm'
import Wrapper from '../../components/PageWrapperCol'

const Login = ({ pageManager }) => {
    const callPageManager = (page) => {
        pageManager(page)
    }
    return (
        <Wrapper>
            <LoginForm callPageManager={callPageManager} />
        </Wrapper>
    )
}

export default Login