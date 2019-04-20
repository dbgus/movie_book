import React from 'react'
import styled from 'styled-components'


const OverLay = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    background-color: black;
    opacity: .5;
    z-index:1
    cursor:pointer;
`

const Active = styled.div`
    width:510px;
    height: 100%;
    position: fixed;
    background-color: #3A8DE8;
    z-index:2;
`

const TitleBox = styled.div`
    text-align: center;
    padding:1rem;
    border-bottom: 1px solid #bad2e0;
`

const Title = styled.h1`
    color: #BDD3DE
    text-shadow:0 0 5px black
`

const HederList = styled.div`
    padding: 3rem;
`

const HederListItems = styled.h2`
    padding:1rem;
    color:#BDD3DE
    font-size: 2.5rem;
    cursor: pointer;
    &:hover{
        background-color:#2874E8
        transition: .3s
    }
`

const Footer = styled.div`
    width:100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #bad2e0;
    padding-top: 8rem;
`

const Button = styled.div`
    margin: 2rem;
    cursor: pointer;
    position: fixed;
`

const Ham = styled.div`
    width:33px;
    height: 5px;
    margin: 3px;
    background-color: #999;
`
function LeftHeader({ Toggle, status, move }) {
    if (!status) {
        return (
            <Button onClick={Toggle} >
                <Ham></Ham>
                <Ham></Ham>
                <Ham></Ham>
            </Button>
        )
    }
    else {
        return (
            <div>
                <Active>
                    <TitleBox>
                        <Title>Movie Dashboard</Title>
                    </TitleBox>
                    <HederList>
                        <HederListItems onClick={move} id="wish" >wish list</HederListItems>
                        <HederListItems onClick={move} id="watch">watch list</HederListItems>
                        <HederListItems onClick={move} id="about" >about</HederListItems>
                    </HederList>
                    <Footer>
                        <p>footer</p>
                    </Footer>
                </Active>
                <OverLay onClick={Toggle} />
            </div>
        )
    }
}

export default LeftHeader
