import React from 'react'
import styled from 'styled-components'

const WishBox = styled.div`
width:70%;
display:flex;
align-items:center;
justify-content: space-around;
margin: 0 auto 0 auto;
padding:3rem;
`

const Poster = styled.img`
width:210px;
`

const Right = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
`

const InfoBox = styled.div`
width:500px;
display:flex;
justify-content: space-around;
align-items: center;
`
const Title = styled.p`
font-size: 2rem;
`
const ShowDetail = styled.p`
cursor: pointer;
&:hover{
    text-decoration: underline
}
`

function WishItem({ data, movePage }) {
    return (
        <WishBox>
            <Poster alt="" src={data.medium_cover_image} />
            <Right>
                <InfoBox>
                    <Title>{data.title}</Title>
                    <p>{data.mpa_rating}</p>
                    <p>rating: {data.rating} / 10 </p>
                    <p>runTime: {data.runtime}M </p>
                </InfoBox>
                <ShowDetail id={data.id} onClick={movePage} >
                    movie's detail?
                </ShowDetail>
            </Right>
        </WishBox>
    )
}

export default WishItem
