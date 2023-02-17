import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import Wrapper from '../../components/PageWrapperCol'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'

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