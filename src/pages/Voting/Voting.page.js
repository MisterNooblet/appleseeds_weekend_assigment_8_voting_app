import React from 'react'
import CardsContainer from './components/CardsContainer'
import Wrapper from '../../components/PageWrapperCol'
const Voting = ({ pageManager }) => {
    return (
        <Wrapper>
            <CardsContainer callPageManager={pageManager} />
        </Wrapper>
    )
}

export default Voting