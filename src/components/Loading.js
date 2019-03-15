import React from 'react'
import LoadingImg from '../logo.svg'
import styled,{keyframes} from 'styled-components'

function Loading() {

    const LoadingBox = styled.div`
        display:flex;
        justify-content: center;
    `

    const turn = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `
    const App = styled.img` 
        animation: ${turn} infinite 20s linear;
        height: 40vmin;
        pointer - events: none;
    `


    return (
        <LoadingBox>
            <App alt="" src={LoadingImg} />
        </LoadingBox>
    )
}

export default Loading
