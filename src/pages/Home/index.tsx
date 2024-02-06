import React from 'react'
import House from '../../scene/House'
import styled from 'styled-components'

type Props = {

}
const Home: React.FC<Props> = ({

}) => {
    return (
        <StyleWrap>
            <StyleContentWrap className='StyleContentWrap'><House animate={true} /></StyleContentWrap>
        </StyleWrap>
    )
}

export const StyleWrap = styled.div`
    width: 100vw;
`
export const StyleContentWrap = styled.div`
    margin: 64px auto 0;
    width: calc(100vw - 48px);
    max-width: 960px;
`
export default Home;
