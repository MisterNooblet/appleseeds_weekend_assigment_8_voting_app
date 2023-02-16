import React from 'react'
import LoginForm from '../components/LoginComponents/LoginForm'
import Wrapper from '../components/UtilityComponents/PageWrapperCol'

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